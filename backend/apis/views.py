from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .models import UserSerializer
from rest_framework.permissions import AllowAny
# Create your views here.
class RegisterView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
