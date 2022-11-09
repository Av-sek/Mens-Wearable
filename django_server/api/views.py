
from .serializers import *
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from .serializers import CustomTokenObtainPairSerializer

# Create your views here.
class UserCreate(APIView):
    authentication_classes = []
    permission_classes = [permissions.AllowAny]
    
    def post(self,request):
        serializers = UserSerializer(data=request.data)
        if not serializers.is_valid():
            return Response(serializers.errors)
        serializers.save()
        
        user = User.objects.get(username = serializers.data['username'])
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'status': 200,
            'payload': serializers.data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        )

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    
    