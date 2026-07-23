import React from 'react';
import { motion } from 'framer-motion';
import GlassPanel from '../components/ui/GlassPanel';

const projects = [
  {
    title: 'SkillHer',
    description: 'A platform that helps women discover learning resources and build in-demand skills.',
    tech: ['HTML', 'CSS', 'Django', 'SQLite'],
    status: 'Still in development',
    repo: 'https://github.com/varun05126/skillher',
  },
  {
    title: 'E-Waste Management System',
    description: 'A web app that connects users with e-waste collection centers and promotes responsible recycling.',
    tech: ['HTML', 'CSS', 'Django', 'Leaflet.js', 'SQLite'],
    status: 'Live demo will be updated soon',
    repo: 'https://github.com/varun05126/ewaste',
  },
];

const Projects: React.FC = () => {
  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold text-primary">Selected work</p>
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28, rotateX: 4 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <GlassPanel className="h-full p-6">
              <div className="mb-5 h-28 rounded-lg border border-white/10 bg-primary/10 p-4">
                <div className="h-full rounded-md bg-gradient-to-br from-primary/40 via-white/10 to-muted" />
              </div>
              <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>
              <p className="mb-5 text-sm text-muted-foreground">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mb-4 text-xs text-muted-foreground">{project.status}</p>
              <a
                href={project.repo}
                className="text-sm font-medium text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository
              </a>
            </GlassPanel>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
