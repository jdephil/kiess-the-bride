# Generated by Django 3.2.6 on 2024-02-19 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_rename_guests_guest'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guest',
            name='attending',
            field=models.BooleanField(default=False),
        ),
    ]
