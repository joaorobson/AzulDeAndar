from django.contrib import admin
from student.models import *

class ClassStudentInline(admin.StackedInline):
    model = Student.school_class.through 

class TeacherClassInline(admin.StackedInline):
    model = Class.teacher.through 

class TelephoneInline(admin.StackedInline):
    model = Telephone

class ClassAdmin(admin.ModelAdmin):
    inlines = [TeacherClassInline]
    exclude = ('teacher',)

class TeacherAdmin(admin.ModelAdmin):
    inlines = [TeacherClassInline]

class StudentAdmin(admin.ModelAdmin):
    inlines = [TelephoneInline, ClassStudentInline]
    exclude = ('school_class',)



admin.site.register(Student, StudentAdmin)
admin.site.register(Class, ClassAdmin)
admin.site.register(School)
admin.site.register(Teacher)
