from django.urls import path
from .views import CategoriesView, CategoryView, CoursesView, CourseView

urlpatterns = [
    path('categories/', CategoriesView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryView.as_view(), name='category-detail'),
    path('courses/', CoursesView.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseView.as_view(), name='course-detail'),
]
