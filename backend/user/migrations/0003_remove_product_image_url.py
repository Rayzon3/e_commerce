# Generated by Django 3.2.7 on 2021-11-11 11:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_product_image_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image_url',
        ),
    ]
