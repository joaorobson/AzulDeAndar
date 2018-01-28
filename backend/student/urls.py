from django.conf.urls import url, include                                                
from rest_framework import routers

                                                                                
from . import views                                                             

router = routers.DefaultRouter()

router.register(r'students', views.StudentViewSet)

urlpatterns = router.urls                                           
