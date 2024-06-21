from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers
# Create your models here.

class Note(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
