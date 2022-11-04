from dataclasses import field
from operator import mod
from django.contrib.auth.models import User
from rest_framework import serializers
from django.core import validators

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['username','email','password']
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        return user