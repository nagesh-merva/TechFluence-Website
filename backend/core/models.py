from django.db import models

class InstagramMedia(models.Model):
    media_id = models.CharField(max_length=255, unique=True)
    media_type = models.CharField(max_length=50)
    media_url = models.URLField(default="")
    caption = models.TextField(blank=True, null=True)
    permalink = models.URLField()
    imagetime = models.TextField(null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.media_type} - {self.media_id}"

from django.db import models

class Event(models.Model):
    class EventCategory(models.TextChoices):
        OFFLINE = 'offline', 'Offline'
        ONLINE = 'online', 'Online'
        GAMING = 'gaming', 'Gaming'

    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='winners/', null=True, blank=True) 
    category = models.CharField(
        max_length=10,
        choices=EventCategory.choices,
        default=EventCategory.OFFLINE  
    )

    def __str__(self):
        return self.name

class Winner(models.Model):
    event = models.ForeignKey(Event, related_name='winners', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    prize = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} - {self.prize}"
