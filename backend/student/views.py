from django.shortcuts import render
from rest_framework import serializers, viewsets, generics
from .serializers import *




# Create your views here.
def index(request):
    return render(request, 'example/index.html')

class StudentViewSet(viewsets.ModelViewSet):

    queryset = Student.objects.order_by('name')
    serializer_class = StudentSerializer


class TelephoneViewSet(viewsets.ModelViewSet):

    queryset = Telephone.objects.all()
    serializer_class = TelephoneSerializer

class ClassViewSet(viewsets.ModelViewSet):

    queryset = Class.objects.filter(reference_year=2018) 
    serializer_class = ClassSerializer

class StudentByClassList(generics.ListAPIView):

    serializer_class = StudentSerializer

    def get_queryset(self):
        required_class = self.kwargs['class']
        class_id = Class.objects.filter(reference_year=2018,name=required_class). \
                get().id
        print(class_id)
        return Student.objects.filter(school_class=class_id).order_by('name')

