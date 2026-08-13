from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=200, help_text="Comma-separated list of technologies")
    repo_url = models.URLField()
    live_url = models.URLField(blank=True, null=True)
    status = models.CharField(max_length=50, help_text="e.g., In development, Coming soon, Completed")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']