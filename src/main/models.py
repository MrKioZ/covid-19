from django.db import models
from django.utils.timezone import now
from datetime import datetime

date = datetime.today()

class Cases(models.Model):
    confirmed = models.IntegerField()
    recovered = models.IntegerField()
    deaths = models.IntegerField()
    last_updated = models.DateField(default=date)
