from rest_framework import fields, serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'desc', 'price', 'image', 'color')

