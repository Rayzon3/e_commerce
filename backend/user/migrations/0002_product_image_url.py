# Generated by Django 3.2.7 on 2021-11-11 11:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_url',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
