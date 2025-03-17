# Generated by Django 5.1.3 on 2025-03-17 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_event_winner'),
    ]

    operations = [
        migrations.AddField(
            model_name='instagrammedia',
            name='imagetime',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='instagrammedia',
            name='media_url',
            field=models.URLField(default=''),
        ),
    ]
