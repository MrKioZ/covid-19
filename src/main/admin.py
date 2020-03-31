from django.contrib import admin
from .models import Cases

# Register your models here.
admin.site.site_header = 'CoronaVirus 2019'

class CasesAdmin(admin.ModelAdmin):
    list_display = ('title', 'confirmed','recovered', 'deaths')

admin.site.register(Cases)
