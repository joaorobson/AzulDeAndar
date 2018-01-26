from django.db import models
from django.utils.translation import ugettext_lazy as _
from smartfields import fields
# Create your models here.


class Class(models.Model):

    year = models.IntegerField()

    letter = models.CharField(
            max_length=1,
    )

    def __str__(self):
        return str(self.year) + "° " + self.letter



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


    school_class = models.ForeignKey(Class, on_delete=models.SET_NULL, null=True)    

    def __str__(self):
        return "Estudante " + self.name


class Telephone(models.Model):

    telephone_number = models.CharField(
            max_length=15,
            help_text=_("Qual o telefone para contato?"),
            blank=True
    )

    student = models.ForeignKey(Student, on_delete=models.CASCADE,null=True, blank=True)

