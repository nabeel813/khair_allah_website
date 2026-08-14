from django.shortcuts import render

from clients.models import Client


def home(request):
    return render(request, 'core/index.html')

def about(request):
    return render(request, 'core/about.html')

def contact(request):
    return render(request, 'core/contact.html')

def medical(request):
    return render(request, 'core/medical.html')

def tourism(request):
    return render(request, 'core/tourism.html')

def logistics(request):
    return render(request, 'core/logistics.html')

def clients(request):
    client_photos = Client.objects.filter(is_active=True)
    return render(request, 'core/clients.html', {'client_photos': client_photos})

def terms(request):
    return render(request, 'core/terms.html')

def privacy(request):
    def clients(request):
        client_photos = Client.objects.filter(is_active=True)
    testimonials = Testimonial.objects.filter(is_active=True)
    return render(request, 'core/clients.html', {
        'client_photos': client_photos,
        'testimonials': testimonials,
    })