import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import Card from '../components/ui/Card';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SkillHer',
      description:
        'A comprehensive platform designed to empower women through skill development and career growth opportunities.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'E-Waste Management System',
      description:
        'An application to streamline electronic waste collection, recycling, and awareness campaigns.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Personal Finance Tracker',
      description:
        'A responsive web application for tracking expenses, setting budgets, and visualizing financial health.',
      technologies: ['React', 'Firebase', 'Chart.js'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            variant="hoverable"
            className="flex flex-col h-full"
          >
            <GlassPanel className="p-4 flex-1">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-xs rounded text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-xs">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </GlassPanel>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
