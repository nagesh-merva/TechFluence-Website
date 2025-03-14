from django.contrib import admin
from .models import Event, Winner

class WinnerInline(admin.TabularInline):
    model = Winner
    extra = 1

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    inlines = [WinnerInline]

admin.site.register(Winner)
