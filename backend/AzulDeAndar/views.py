from django.conf import settings                                    
from django.shortcuts import render, redirect                   
from django.contrib.auth import authenticate, login, logout


def index(request):
    return render(request, 'AzulDeAndar/index.html')

def login_user(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        # the password verified for the user
        if user.is_active:
            login(request, user)
            return redirect('/')
    return redirect(settings.LOGIN_URL, request)

def logout_user(request):
    logout(request)
    return redirect('/')
