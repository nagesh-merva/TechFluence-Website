from rest_framework import serializers
from .models import InstagramMedia,Event, Winner


class InstagramMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramMedia
        fields = '__all__'





from rest_framework import serializers
from .models import Event, Winner

class WinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Winner
        fields = ['id', 'name', 'prize']

class EventSerializer(serializers.ModelSerializer):
    winners = WinnerSerializer(many=True, read_only=True)
    image = serializers.ImageField(use_url=True)  # Ensure full URL for images

    class Meta:
        model = Event
        fields = ['id', 'name', 'description', 'image', 'winners','category']
