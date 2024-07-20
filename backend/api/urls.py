from django.urls import path
from . import views
from .views import CreateUserView, NoteListCreate, NoteDelete

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("user/register/", views.CreateUserView.as_view(), name="register")
]