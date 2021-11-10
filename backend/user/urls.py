from django.urls.conf import path
from .api import ProductViewSet
from rest_framework.routers import DefaultRouter
from .api import FacebookLogin
from .api import GoogleLogin
router = DefaultRouter()
router.register(r'', ProductViewSet, basename='product')
urlpatterns = [
    router.urls,
    path('facebook-login/', FacebookLogin.as_view(), name='fb_login'),
    path('google-login/', GoogleLogin.as_view(), name='google_login')
]

#work pending on google and facebook login