# Generated by Django 3.2.6 on 2024-02-25 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20240225_1918'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guest',
            name='events',
            field=models.ManyToManyField(blank=True, related_name='guest', to='core.Event'),
        ),
    ]
