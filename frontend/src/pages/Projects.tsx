import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import Card from '../components/ui/Card';

const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <GlassPanel className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* SkillHer */}
          <Card variant="hoverable" className="flex flex-col h-full">
            <h3 className="font-semibold mb-2">SkillHer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A platform that helps women discover learning resources and build in-demand skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                HTML
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                CSS
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Django
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                SQLite
              </span>
            </div>
            <div className="mb-4">
              <span className="text-xs font-medium">Live Demo:</span> <span className="text-xs text-primary">Still in development</span>
            </div>
            <div>
              <span className="text-xs font-medium">Repo:</span> <a href="https://github.com/varun05126/skillher" className="text-xs text-primary underline" target="_blank" rel="noopener noreferrer">https://github.com/varun05126/skillher</a>
            </div>
          </Card>
          {/* E-Waste Management System */}
          <Card variant="hoverable" className="flex flex-col h-full">
            <h3 className="font-semibold mb-2">E-Waste Management System</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A web app that connects users with e-waste collection centers and promotes responsible recycling.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                HTML
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                CSS
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Django
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Leaflet.js
              </span>
              <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                SQLite
              </span>
            </div>
            <div className="mb-4">
              <span className="text-xs font-medium">Live Demo:</span> <span className="text-xs text-primary">Will be updated soon</span>
            </div>
            <div>
              <span className="text-xs font-medium">Repo:</span> <a href="https://github.com/varun05126/ewaste" className="text-xs text-primary underline" target="_blank" rel="noopener noreferrer">https://github.com/varun05126/ewaste</a>
            </div>
          </Card>
        </div>
      </GlassPanel>
    </div>
  );
};

export default Projects;
