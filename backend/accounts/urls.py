from django.urls import path
from .views import SignUpView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticated

urlpatterns = [
    path('authenticated', CheckAuthenticated.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('register', SignUpView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
]