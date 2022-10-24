from django.db import models

# Create your models here.

#.................... Product model for male products ...............
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()