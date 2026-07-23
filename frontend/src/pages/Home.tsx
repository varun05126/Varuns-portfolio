import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import Card from '../components/ui/Card';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to My Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <GlassPanel className="p-6">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Passionate developer building innovative solutions with a focus on
            user experience and performance.
          </p>
        </GlassPanel>
        <GlassPanel className="p-6">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              React
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Node.js
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              TypeScript
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Three.js
            </span>
          </div>
        </GlassPanel>
      </div>
      <div className="mt-8">
        <GlassPanel className="p-6">
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-4">
            <Card variant="hoverable" className="p-4">
              <h3 className="font-semibold mb-2">SkillHer</h3>
              <p className="text-sm text-muted-foreground">
                A platform for women's skill development.
              </p>
            </Card>
            <Card variant="hoverable" className="p-4">
              <h3 className="font-semibold mb-2">E-Waste Management System</h3>
              <p className="text-sm text-muted-foreground">
                An application to manage electronic waste recycling.
              </p>
            </Card>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default Home;
