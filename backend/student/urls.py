from django.conf.urls import url, include                                                
from rest_framework import routers

                                                                                
from . import views                                                             

router = routers.DefaultRouter()

router.register(r'bla', views.StudentViewSet)

urlpatterns = [                                                                 
    url(r'^$', views.index, name='index'),                                      
    url(r'^', include(router.urls))
] 
