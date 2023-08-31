from rest_framework import routers
from django.urls import include, path
from . import views

router = routers.DefaultRouter()
router.register(r"application", views.ApplicationViewSet, basename='application')

urlpatterns = [
    path("", include(router.urls)),
    ]
