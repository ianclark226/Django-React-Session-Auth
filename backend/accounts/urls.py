from django.urls import path
from .views import SignUpView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticated, DeleteAccountView, GetUserView

urlpatterns = [
    path('authenticated', CheckAuthenticated.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('register', SignUpView.as_view()),
    path('delete', DeleteAccountView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('get_users', GetUserView.as_view()),
]