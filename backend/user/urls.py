from django.urls.conf import path, include
from .api import ProductViewSet, CartView
from rest_framework.routers import DefaultRouter
from .api import RegisterAPI
from django.urls import path
from knox import views as knox_views
from .api import LoginAPI, ProductViewSet


router = DefaultRouter()
router.register(r'product', ProductViewSet, basename='product')
router.register(r'cart', CartView, basename = 'cart' )

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('', include(router.urls))
]