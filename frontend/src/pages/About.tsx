import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <GlassPanel className="p-6">
            <h2 className="text-xl font-semibold mb-4">Hello, I'm Varun</h2>
            <p className="mb-4">
              I'm a passionate computer science student with a strong focus on
              full-stack development, specializing in creating immersive user
              experiences with modern web technologies.
            </p>
            <p className="mb-4">
              My journey in software development began with a fascination for
              how technology can solve real-world problems. Since then, I've
              honed my skills in both frontend and backend technologies,
              always striving to write clean, efficient, and maintainable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or hiking in nature.
            </p>
          </GlassPanel>
          <GlassPanel className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  HTML5
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  CSS3
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Express
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Three.js
                </span>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};

export default About;
