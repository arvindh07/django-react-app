from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, NoteView
urlpatterns = [
    path("user/register", RegisterView.as_view(), name="register"),
    path("token", TokenObtainPairView.as_view(), name="token"),
    path("token/refresh", TokenRefreshView.as_view(), name="token-refresh"),
    path("note", NoteView.as_view(), name="note")
]