import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';

const Skills: React.FC = () => {
  const skills = {
    Languages: ['Python', 'Java', 'C++', 'JavaScript'],
    Web: ['HTML', 'CSS', 'React', 'Node.js'],
    Tools: ['Git', 'VS Code', 'Postman'],
    Other: ['DSA', 'DBMS', 'OS fundamentals']
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Skills & Expertise</h1>
      <GlassPanel className="p-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </GlassPanel>
    </div>
  );
};

export default Skills;
