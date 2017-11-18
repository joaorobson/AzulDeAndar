from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import *




# Create your views here.
def index(request):
    return render(request, 'example/index.html')

class StudentViewSet(viewsets.ModelViewSet):

    queryset = Student.objects.all()
    serializer_class = StudentSerializer
