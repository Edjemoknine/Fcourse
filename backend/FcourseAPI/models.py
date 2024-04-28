from django.db import models
from uuid import uuid4


class Category(models.Model):
    """Represents categories for courses."""
    title = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.title

def generate_filename(instance, filename):
    extension = filename.split('.')[-1]
    new_filename = f"{uuid4()}.{extension}"
    return f"static/assets/{new_filename}"

class Course(models.Model):
    """Represents individual courses."""
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField(max_length=255)
    image = models.ImageField(upload_to=generate_filename)
    categories = models.ManyToManyField(Category, related_name="courses")

    def __str__(self):
        return self.title


class CourseDetails(models.Model):
    """Associates categories with courses."""
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("course", "category")
