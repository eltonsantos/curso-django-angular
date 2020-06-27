from django.contrib import admin
from .models import Member

# class MemberAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'surname')

admin.site.register(Member)