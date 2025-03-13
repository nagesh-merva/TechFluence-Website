from rest_framework import serializers
from .models import InstagramMedia,Event, Winner


class InstagramMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramMedia
        fields = '__all__'






class WinnerSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)  # Returns full URL for images

    class Meta:
        model = Winner
        fields = ['id', 'name', 'prize', 'image']

class EventSerializer(serializers.ModelSerializer):
    winners = WinnerSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'name', 'description', 'winners']

