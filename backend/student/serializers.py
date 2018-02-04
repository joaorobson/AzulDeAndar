from rest_framework import serializers
from .models import *


class TelephoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Telephone
        fields = '__all__'

class ClassSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Class 
        fields = '__all__' 


class StudentSerializer(serializers.ModelSerializer):

    school_class = ClassSerializer(read_only=True, many=True)
    class Meta:
        model = Student
        fields = ['name',
                  'image',
                  'father_name',
                  'mother_name',
                  'responsible',
                  'adress',
                  'school_class',
                  'teacher',
                  'convert_date_of_birth',
                  'get_telephone_numbers',
                  'special_education_needs',
                  'schools_names',
                  'get_teachers_names',
                  ]

