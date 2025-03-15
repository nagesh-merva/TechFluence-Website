import requests
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import InstagramMedia, Winner
from .serializers import InstagramMediaSerializer, WinnerSerializer


from decouple import config

# Fetch values from .env
USER_ID = config("USER_ID")
ACCESS_TOKEN = config("ACCESS_TOKEN")
HASHTAGNAME = config("HASHTAGNAME")



@api_view(['POST'])
@permission_classes([AllowAny])  # ✅ Allow access to anyone
def fetch_instagram_media(request):
    """
    Fetch Instagram posts by hashtag and store them in the database.
    """
    try:
        # Step 1: Get Hashtag ID
        hashtag_url = f"https://graph.facebook.com/v18.0/ig_hashtag_search?user_id={USER_ID}&q={HASHTAGNAME}&access_token={ACCESS_TOKEN}"
        hashtag_response = requests.get(hashtag_url)
        hashtag_data = hashtag_response.json()
        
        hashtag_id = hashtag_data.get('data', [{}])[0].get('id')
        if not hashtag_id:
            return Response({"error": "Hashtag ID not found"}, status=status.HTTP_400_BAD_REQUEST)

        # Step 2: Fetch Media using Hashtag ID
        media_url = f"https://graph.facebook.com/v18.0/{hashtag_id}/recent_media?user_id={USER_ID}&fields=media_url,caption,media_type,permalink&access_token={ACCESS_TOKEN}"
        media_response = requests.get(media_url)
        media_data = media_response.json().get("data", [])
        
        print(media_data)

        # Step 3: Save Media Data to Database
        saved_count = 0
        for media in media_data:
            media_id = media.get("id")
            media_type = media.get("media_type")
            media_url = media.get("media_url")
            caption = media.get("caption", "")
            permalink = media.get("permalink")

            if not InstagramMedia.objects.filter(media_id=media_id).exists():
                InstagramMedia.objects.create(
                    media_id=media_id,
                    media_type=media_type,
                    media_url=media_url,
                    caption=caption,
                    permalink=permalink
                )
                saved_count += 1

        return Response({"message": f"Successfully fetched {saved_count} new Instagram posts"}, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class InstagramMediaListView(generics.ListAPIView):
    """
    API view to retrieve stored Instagram media.
    """
    permission_classes = [AllowAny]  # ✅ Allow access to anyone
    queryset = InstagramMedia.objects.all().order_by('-timestamp')
    serializer_class = InstagramMediaSerializer

from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Event
from .serializers import EventSerializer

class EventListView(generics.ListAPIView):
    permission_classes = [AllowAny] 
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class WinnerCreateView(generics.CreateAPIView):
    permission_classes = [AllowAny] 
    queryset = Winner.objects.all()
    serializer_class = WinnerSerializer
    parser_classes = [MultiPartParser, FormParser]  # Enables file uploads
    permission_classes = [permissions.AllowAny]  # Adjust permissions as needed