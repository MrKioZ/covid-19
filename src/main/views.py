from django.shortcuts import render
from django.template import RequestContext


def handler404(request, *args, **argv):
    response = render_to_response('main/templates/404.html', {},context_instance=RequestContext(request))
    response.status_code = 404
    return response


def handler500(request, *args, **argv):
    response = render_to_response('main/templates/500.html', {},context_instance=RequestContext(request))
    response.status_code = 500
    return response

def index(request):
    print('User:',request.user)
    print('ip:',get_visitor_ip(request))
    return render(request, 'main/templates/index.html')

def get_visitor_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
