# Seed initial projects
from django.db import migrations

def add_initial_projects(apps, schema_editor):
    Project = apps.get_model('frontend', 'Project')

    projects = [
        {
            'title': 'SkillHer',
            'description': 'A platform that helps women discover learning resources and build in-demand skills.',
            'tech_stack': 'HTML, CSS, Django, SQLite',
            'repo_url': 'https://github.com/varun05126/skillher',
            'live_url': '',  # No live URL as it's still in development
            'status': 'In development'
        },
        {
            'title': 'E-Waste Management System',
            'description': 'A web app that connects users with e-waste collection centers and promotes responsible recycling.',
            'tech_stack': 'HTML, CSS, Django, Leaflet.js, SQLite',
            'repo_url': 'https://github.com/varun05126/ewaste',
            'live_url': '',  # Will be updated soon
            'status': 'Coming soon'
        }
    ]

    for project_data in projects:
        Project.objects.create(**project_data)

def remove_initial_projects(apps, schema_editor):
    Project = apps.get_model('frontend', 'Project')
    Project.objects.filter(title__in=['SkillHer', 'E-Waste Management System']).delete()

class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(add_initial_projects, remove_initial_projects),
    ]