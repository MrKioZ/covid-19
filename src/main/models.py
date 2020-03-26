from django.db import models

# Create your models here.
class Cases(models.Model):
    Infected_Countries = models.IntegerField()
    Total_Cases = models.IntegerField()
    Total_Recoverd = models.IntegerField()
