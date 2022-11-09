from dataclasses import field
from operator import mod
from django.contrib.auth.models import User
from rest_framework import serializers
from django.core import validators
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['username','email','password','is_staff']
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        return user
    

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data.update(
            {
                'is_staff': self.user.is_staff,
            }
        )
        return data