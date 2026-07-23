import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import Card from '../components/ui/Card';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', category: 'Frontend', proficiency: 90 },
    { name: 'TypeScript', category: 'Frontend', proficiency: 85 },
    { name: 'Node.js', category: 'Backend', proficiency: 80 },
    { name: 'Express', category: 'Backend', proficiency: 75 },
    { name: 'MongoDB', category: 'Database', proficiency: 80 },
    { name: 'Three.js', category: 'Graphics', proficiency: 70 },
    { name: 'Tailwind CSS', category: 'Styling', proficiency: 85 },
    { name: 'Framer Motion', category: 'Animation', proficiency: 80 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Skills & Expertise</h1>
      <GlassPanel className="p-6">
        <div className="gap-6 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <Card
              key={idx}
              variant="hoverable"
              className="flex flex-col items-center p-4 text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <span className="text-primary text-2xl">{skill.name.charAt(0)}</span>
              </div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{skill.category}</p>
              <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-primary h-2.5 transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {skill.proficiency}%
              </p>
            </Card>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};

export default Skills;