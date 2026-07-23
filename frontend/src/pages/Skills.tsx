import React from 'react';
import { motion } from 'framer-motion';
import GlassPanel from '../components/ui/GlassPanel';

const skillGroups = [
  {
    category: 'Languages',
    items: [
      ['Python', 78],
      ['Java', 68],
      ['C++', 62],
      ['JavaScript', 72],
    ],
  },
  {
    category: 'Web',
    items: [
      ['HTML', 84],
      ['CSS', 78],
      ['React', 70],
      ['Node.js', 62],
    ],
  },
  {
    category: 'Tools',
    items: [
      ['Git', 72],
      ['VS Code', 82],
      ['Postman', 66],
      ['SQLite', 64],
    ],
  },
  {
    category: 'Core CS',
    items: [
      ['DSA', 70],
      ['DBMS', 68],
      ['OS fundamentals', 60],
      ['Problem solving', 74],
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold text-primary">Technical toolkit</p>
        <h1 className="text-4xl font-bold">Skills & Expertise</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <GlassPanel className="h-full p-6">
              <h2 className="mb-5 text-xl font-semibold">{group.category}</h2>
              <div className="space-y-4">
                {group.items.map(([skill, level]) => (
                  <div key={skill}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium">{skill}</span>
                      <span className="text-muted-foreground">{level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ delay: 0.2 + index * 0.08, duration: 0.75 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
