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
    Fetch Instagram posts using the Graph API and store them in the database.
    """
    try:
        # Step 1: Fetch Media
        media_url = f"https://graph.facebook.com/v19.0/{USER_ID}/media?fields=media_url,media_type,permalink,timestamp&access_token={ACCESS_TOKEN}"
        media_response = requests.get(media_url)
        media_data = media_response.json().get("data", [])

        if not media_data:
            return Response({"message": "No media found"}, status=status.HTTP_204_NO_CONTENT)

        # Step 2: Save Media Data to Database (only if all required keys exist)
        saved_count = 0
        for media in media_data:
            if all(key in media for key in ["media_url", "media_type", "permalink"]):  # ✅ Skip incomplete data
                media_id = media.get("id")
                media_url = media.get("media_url")
                media_type = media.get("media_type")
                permalink = media.get("permalink")
                imagetime = media.get("timestamp")
                # like_count = media.get("like_count", 0)  # Default to 0 if missing

                # Ensure media is not duplicated
                if not InstagramMedia.objects.filter(media_id=media_id).exists():
                    InstagramMedia.objects.create(
                        media_id=media_id,
                        media_url=media_url,
                        media_type=media_type,
                        permalink=permalink,
                        imagetime=imagetime,
                        # like_count=like_count
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
    parser_classes = [MultiPartParser, FormParser]

class WinnerCreateView(generics.CreateAPIView):
    permission_classes = [AllowAny] 
    queryset = Winner.objects.all()
    serializer_class = WinnerSerializer
    parser_classes = [MultiPartParser, FormParser]  # Enables file uploads
    permission_classes = [permissions.AllowAny]  # Adjust permissions as needed