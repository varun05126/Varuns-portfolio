# Varun's Portfolio

A personal portfolio website built with HTML, CSS, Django, and SQLite showcasing projects, skills, and contact information.

![Screenshot placeholder](./static/images/screenshot.png) <!-- add screenshot here -->

## �� 🛠��️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Backend**: Django 4.2
- **Database**: SQLite
- **Other**: Git

## �� 🚀 Features

- Responsive single-page layout
- About me section
- Skills showcase grouped by category
- Projects section pulling from Django admin (SkillHer and E-Waste Management System)
- Contact section with links to email, LinkedIn, and GitHub
- Django admin interface to manage projects

## �� 📦 Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/varun05126/Varuns-portfolio.git
   cd Varuns-portfolio
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the development server**
   ```bash
   python manage.py runserver
   ```

7. Visit `http://127.0.0.1:8000/` in your browser.

## �� 🧑‍���💻 Managing Projects

Log in to the Django admin at `/admin` with your superuser credentials to add, edit, or delete projects. The `Project` model includes fields for title, description, tech stack, repository URL, live demo URL, and status.

## �� 📫 Contact

- **Email**: malthumkarvarun@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/varun-malthumkar-4a8735356/
- **GitHub**: https://github.com/varun05126

## �� 🎯 Projects Featured

1. **SkillHer** — A platform that helps women discover learning resources and build in-demand skills.  
   *Tech stack*: HTML, CSS, Django, SQLite  
   *Status*: In development  
   *Repo*: https://github.com/varun05126/skillher

2. **E-Waste Management System** — A web app that connects users with e-waste collection centers and promotes responsible recycling.  
   *Tech stack*: HTML, CSS, Django, Leaflet.js, SQLite  
   *Status*: Coming soon  
   *Repo*: https://github.com/varun05126/ewaste

## �� 📝 License

This project is open source and available under the [MIT License](LICENSE).

---