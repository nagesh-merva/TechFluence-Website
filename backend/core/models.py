from django.db import models

class InstagramMedia(models.Model):
    media_id = models.CharField(max_length=255, unique=True)
    media_type = models.CharField(max_length=50)
    media_url = models.URLField()
    caption = models.TextField(blank=True, null=True)
    permalink = models.URLField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.media_type} - {self.media_id}"

from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class Winner(models.Model):
    event = models.ForeignKey(Event, related_name='winners', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    prize = models.CharField(max_length=50)
    image = models.ImageField(upload_to='winners/')
    def __str__(self):
        return f"{self.name} - {self.prize}"
