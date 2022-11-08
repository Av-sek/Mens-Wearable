
from django.urls import re_path,path
from api.views import UserCreate
from .viewsets import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
urlpatterns =[
    path("",UserCreate.as_view(), name="create_user"),
    re_path(r'^token/?$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(r'^api/token/verify/?$', TokenVerifyView.as_view(), name='token_verify'),
    re_path(r'^token/refresh/?$', TokenRefreshView.as_view(), name='token_refresh'),
]
