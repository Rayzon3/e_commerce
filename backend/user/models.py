import uuid
from django.db import models
from django.db.models.fields.files import ImageField
import base64
import requests
import json 

class Product (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    desc = models.TextField()
    price  =  models.IntegerField()
    image  = models.ImageField(upload_to='./photos', default = '', blank=True)
    color = models.CharField(max_length=20, blank=True)
    # image_url = models.TextField(default='',blank=True)

    # def save(self):
    #     encodedString = base64.b64encode(self.item_image.file.read())
    #     data = {"key": "2541c62d9518472b87496c3fa37760fc" , "image": encodedString.decode("utf-8")}
    #     uploadedImageInfo = requests.post("https://api.imgbb.com/1/upload", data=data)
    #     jsonResponse = json.loads(uploadedImageInfo.text)
    #     self.item_image_url = jsonResponse["data"]["display_url"]
    #     super().save()

    def __str__(self):
        return self.title

# Create your models here.

#images to be added 