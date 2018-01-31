from django.db import models
from django.utils.translation import ugettext_lazy as _
from smartfields import fields
import datetime

class Teacher(models.Model):
    
    name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome do professor?")    
    )


    def __str__(self):
        return "Prof. " +  self.name


class School(models.Model):

    name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome da escola do aluno?")
    )

    def __str__(self):
        return self.name


class Class(models.Model):


    school = models.ForeignKey(School,on_delete=models.SET_DEFAULT, default=1) 

    name = models.CharField(
        max_length=30,
        help_text=_("Qual a turma do aluno?"),
        blank=True,
        default="Sem turma"
    )

    YEAR_CHOICES = []

    for i in range(2015, datetime.datetime.now().year+1):
        YEAR_CHOICES.append((i,i))

    reference_year = models.IntegerField(choices=YEAR_CHOICES, default=datetime.datetime.now().year)

    def __str__(self):
        return str(self.reference_year) + '/' + self.name + "/" + self.school.name 

class Student(models.Model):

    name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome do aluno?")    
    )

    image = fields.ImageField(
            upload_to="images/",
            help_text=_("Coloque a foto do aluno."),
            blank=True
    )

    father_name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome do pai do aluno?"),
            blank=True
    )

    mother_name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome da mãe do aluno?"),
            blank=True
    )

    adress = models.CharField(
            max_length=142,
            help_text=_("Qual o endereço do aluno?"),
            blank=True
    )

    special_education_needs = models.CharField(
            max_length=200,
            help_text=_("Qual a necessidade de educação especial?"),
            default="Nenhuma",
    )


    school_class = models.ManyToManyField(Class, blank=True)

    teacher = models.ManyToManyField(Teacher, blank=True)

    def __str__(self):
        return "Estudante " + self.name



class Telephone(models.Model):

    telephone_number = models.CharField(
            max_length=15,
            help_text=_("Qual o telefone para contato?"),
            blank=True
    )

    student = models.ForeignKey(Student, on_delete=models.CASCADE,null=True, blank=True)

