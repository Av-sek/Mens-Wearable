
from django.urls import re_path,path
from api.views import UserCreate
from .viewsets import *

from .views import *
urlpatterns =[
    path("",UserCreate.as_view(), name="create_user"),
    re_path(r"^token/?$", CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    re_path(r"^token/verify/?$", TokenVerifyView.as_view(), name='token_verify'),
    re_path(r"^token/refresh/?$", TokenRefreshView.as_view(), name='token_refresh'),
]
