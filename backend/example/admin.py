from django.contrib import admin
from student.models import *

class TelephoneInline(admin.StackedInline):
    model = Telephone

class StudentAdmin(admin.ModelAdmin):
    inlines = [TelephoneInline]



admin.site.register(Student, StudentAdmin)
admin.site.register(Class)
