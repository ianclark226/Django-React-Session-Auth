from django.urls import path
from .views import SignUpView, GetCSRFToken

urlpatterns = [
    path('register', SignUpView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
]