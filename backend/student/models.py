from django.db import models
from django.utils.translation import ugettext_lazy as _
from smartfields import fields
import datetime
from  AzulDeAndar import settings

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

    class Meta:
        unique_together = ('name', 'reference_year')

    def __str__(self):
        return str(self.reference_year) + ': ' + self.name + "/" + self.school.name 

class Student(models.Model):

    name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome do aluno?")    
    )


    date_of_birth = models.DateField(
            blank=True,
            default='1998-03-08',
    )

    @property
    def convert_date_of_birth(self):
        return self.date_of_birth.strftime('%d/%m/%y')


    @property
    def get_telephone_numbers(self):
        return list(self.telephone_set.all().values_list( \
                    'telephone_number', flat=True))
    @property
    def schools_names(self):
        list_of_schools = list(self.school_class.all())
        list_of_schools.sort(key=lambda x:x.reference_year)
        return [item.__str__() for item in list_of_schools]
                    
    @property
    def get_teachers_names(self):
        return list(self.teacher.values_list( \
                    'name', flat=True))

    image = fields.ImageField(
            upload_to="images/",
            help_text=_("Coloque a foto do(a) aluno(a)."),
            blank=True
    )

    father_name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome do pai do(a) aluno(a)?"),
            blank=True
    )

    mother_name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome da mãe do(a) aluno(a)?"),
            blank=True
    )

    responsible = models.CharField(
            max_length=100,
            help_text=_("Quem é o responsável pelo(a) aluno(a)?"),
            default="Os pais",
    )

    adress = models.CharField(
            max_length=142,
            help_text=_("Qual o endereço do(a) aluno(a)?"),
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

