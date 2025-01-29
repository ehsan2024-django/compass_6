from django.urls import path
from . import views

urlpatterns = [
    path('', views.compass_view   , name ='compass'),


]