from django.conf.urls import url, include                                                
from rest_framework import routers
from . import views                                                             

router = routers.DefaultRouter()

router.register(r'students', views.StudentViewSet)
router.register(r'telephones', views.TelephoneViewSet)
router.register(r'classes', views.ClassViewSet)


urlpatterns =  [
        url(r'classes/(?P<class>.+)/$', views.StudentByClassList.as_view())
]

urlpatterns += router.urls
