from django.db import models
import pycountry

countries = [(i.alpha_2, i.name) for i in list(pycountry.countries)]

# Create your models here.
class Case(models.Model):
    country = models.CharField(max_length=2, choices=countries)
    
    confirmed = models.IntegerField()
    recovered = models.IntegerField()
    deaths = models.IntegerField()
    
    created_at = models.DateField(auto_now=True, unique=True)

    def __str__(self):
        return self.country