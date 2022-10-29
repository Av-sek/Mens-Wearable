from operator import mod
from django.db import models

# Create your models here.

#.................... Product model for male products ...............


class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
class Brand(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
class Product(models.Model):
    thumbnail = models.ImageField(upload_to='products/')
    name = models.CharField(max_length=100)
    overview = models.TextField()
    description = models.TextField()
    price = models.IntegerField()
    rating = models.IntegerField()
    on_sale = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand_name = models.ForeignKey(Brand, on_delete=models.CASCADE)
    SIZE_CHOICES = [('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ('XL', 'Extra Large'), ('XXL', 'Extra Extra Large')]
    size = models.CharField(max_length=5, choices=SIZE_CHOICES)
    color = models.CharField(max_length=50)
    tags = models.CharField(max_length=100)
    slug = models.SlugField()
    
    def save(self, *args, **kwargs):
        self.slug = self.name.slugify()
        super(Product, self).save(*args, **kwargs)
    def __str__(self):
        return self.name

class Image(models.Model):
    image = models.ImageField(upload_to='products/')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)    
