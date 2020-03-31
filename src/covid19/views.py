from selenium.webdriver.firefox.options import Options
from django.template import RequestContext
from django.shortcuts import render
from selenium import webdriver
from selenium import webdriver
from main.models import Cases
from datetime import datetime
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def index(request):
    # print('User:',request.user)
    # print('ip:',get_visitor_ip(request))

    cases = Cases.objects.all()[0]

    scrape_cases(cases)

    return render(request, 'templates/index.html', {'cases': cases})

def get_visitor_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def scrape_cases(cases):
    if cases.last_updated.day != datetime.today().day:
        options = Options()
        options.add_argument("--headless")
        driver = webdriver.Firefox(options=options, executable_path=r'C:\webdrivers\geckodriver.exe')
        driver.get('https://www.worldometers.info/coronavirus')
        aTagsInLi = driver.find_elements_by_id('maincounter-wrap')
        for indx, i in enumerate(aTagsInLi):
            num = ''
            for i in [n for n in i.text if n.isdigit()]:
                num += str(i)

            if indx == 0:
                cases.confirmed = int(num)
            elif indx == 1:
                cases.recovered = int(num)
            elif indx == 2:
                cases.deaths = int(num)
            cases.last_updated = datetime.today()
        cases.save()
        driver.quit()
