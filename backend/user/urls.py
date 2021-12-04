from django.urls.conf import path
from .api import ProductViewSet
from rest_framework.routers import DefaultRouter
from .api import RegisterAPI
from django.urls import path
from knox import views as knox_views
from .api import LoginAPI


router = DefaultRouter()
router.register(r'', ProductViewSet, basename='product')
urlpatterns = router.urls

urlpatterns += [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
]