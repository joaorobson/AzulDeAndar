from django.contrib import admin
from student.models import *

class ClassStudentInline(admin.StackedInline):
    model = Student.school_class.through 

class TeacherStudentInline(admin.StackedInline):
    model = Student.teacher.through 

class TelephoneInline(admin.StackedInline):
    model = Telephone

class ClassAdmin(admin.ModelAdmin):
    inlines = [ClassStudentInline]

class TeacherAdmin(admin.ModelAdmin):
    inlines = [TeacherStudentInline]

class StudentAdmin(admin.ModelAdmin):
    inlines = [TelephoneInline, ClassStudentInline, TeacherStudentInline]
    exclude = ('school_class','teacher',)



admin.site.register(Student, StudentAdmin)
admin.site.register(Class)
admin.site.register(School)
admin.site.register(Teacher)
