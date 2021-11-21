import uuid
from django.db import models
from django.db.models.fields.files import ImageField

def upload_to(instance, filename):
    return 'post/{filename}'.format(filename=filename)


class Product (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    desc = models.TextField()
    price  =  models.IntegerField()
    image  = models.ImageField(upload_to=upload_to, default = '', blank=True, null=True)
    color = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.title

# Create your models here.

