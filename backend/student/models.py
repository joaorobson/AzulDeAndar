from django.db import models
from django.utils.translation import ugettext_lazy as _
from smartfields import fields
# Create your models here.


class Telephone(models.Model):

    telephone_number = models.CharField(
            max_length=15,
            help_text=_("Qual o telefone para contato?"),
            blank=True
    )

class Student(models.Model):

    name = models.CharField(
            max_length=100,
            help_text=_("Qual o nome do aluno?")    
    )

    image = fields.ImageField(
            upload_to="images/",
            help_text=_("Coloque a foto do aluno.")
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

    telephone = models.ForeignKey(Telephone,on_delete=models.CASCADE)




class Class(models.Model):

    year = models.IntegerField()

    letter = models.CharField(
            max_length=1,
    )

    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True)    


