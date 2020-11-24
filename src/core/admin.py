from django.contrib import admin
from .models import Case

# Register your models here.
admin.site.site_header = 'COVID-19'

@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ('country', 'confirmed', 'recovered', 'deaths', 'created_at')
