from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from .models import Category, Course
from .serializers import CategorySerializer, CourseSerializer

class CategoriesView(generics.ListCreateAPIView):
    """
    List all categories or create a new one.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryView(generics.RetrieveAPIView):
    """
    Retrieve, update, or delete a category instance.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CoursesView(generics.ListCreateAPIView):
    """
    List all courses or create a new one.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseView(generics.RetrieveAPIView):
    """
    Retrieve, update, or delete a course instance.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
