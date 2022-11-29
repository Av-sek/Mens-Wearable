from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Product)
admin.site.register(Image)
admin.site.register(Size)
admin.site.register(Tags)
admin.site.register(Favourite)