from django.urls import path
from .views import EventListView, InstagramMediaListView, WinnerCreateView, fetch_instagram_media

urlpatterns = [
    path('instagram-media/', InstagramMediaListView.as_view(), name='instagram-media-list'),
    path('fetch-instagram/', fetch_instagram_media, name='fetch-instagram'),
    path('events/', EventListView.as_view(), name='event-list'),
    path('winners/upload/', WinnerCreateView.as_view(), name='winner-upload'),
]
