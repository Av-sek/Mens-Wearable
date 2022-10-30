from rest_framework.routers import DefaultRouter
from django.urls import path
from api.views import UserCreate,LoginView
from .viewsets import *

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns =[
    path("create",UserCreate.as_view(), name="create_user"),
    path('login',obtain_auth_token, name="get-token"),
]
