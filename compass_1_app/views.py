from django.shortcuts import render

def compass_view(request):
    return render(request, 'compass.html', {'test_message': 'این یک تست است'})