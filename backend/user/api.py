from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product
# from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
# from rest_auth.registration.views import SocialLoginView
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

# class FacebookLogin(SocialLoginView):
#     adapter_class = FacebookOAuth2Adapter

# class GoogleLogin(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter
    
