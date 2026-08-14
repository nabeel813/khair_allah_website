from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('medical/', views.medical, name='medical'),
    path('tourism/', views.tourism, name='tourism'),
    path('logistics/', views.logistics, name='logistics'),
    path('clients/', views.clients, name='clients'),
    path('terms/', views.terms, name='terms'),
    path('privacy/', views.privacy, name='privacy'),   # ← add this
]