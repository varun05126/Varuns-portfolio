import React from 'react';
import { motion } from 'framer-motion';
import GlassPanel from '../components/ui/GlassPanel';

const facts = [
  ['College', 'Vardhaman College of Engineering'],
  ['Learning', 'Web Development, Python, DSA'],
  ['Interests', 'Full-stack development, AI/ML, Open Source'],
  ['Email', 'malthumkarvarun@gmail.com'],
];

const timeline = [
  ['Foundation', 'Built programming fundamentals with Python, Java, C++, DBMS, and operating-system basics.'],
  ['Web Development', 'Started building browser-based projects with HTML, CSS, JavaScript, React, and Node.js.'],
  ['Applied Projects', 'Created SkillHer and an E-Waste Management System to connect learning with practical impact.'],
];

const About: React.FC = () => {
  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold text-primary">About Varun</p>
        <h1 className="text-4xl font-bold">Student developer building one project at a time.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}>
          <GlassPanel className="h-full p-6">
            <h2 className="mb-4 text-xl font-semibold">My Story</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              I am a student at Vardhaman College of Engineering. I enjoy learning by building:
              taking an idea, breaking it into small features, and turning it into a working web app.
            </p>
            <p className="text-sm text-muted-foreground">
              My current focus is strengthening full-stack fundamentals: frontend UI, backend APIs,
              databases, deployment, and problem solving through DSA.
            </p>
          </GlassPanel>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <GlassPanel className="h-full p-6">
            <h2 className="mb-4 text-xl font-semibold">Quick Facts</h2>
            <div className="space-y-3">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-lg bg-primary/10 p-3">
                  <p className="text-xs font-semibold text-primary">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </div>
      <GlassPanel className="mt-8 p-6">
        <h2 className="mb-5 text-xl font-semibold">Learning Timeline</h2>
        <div className="space-y-4">
          {timeline.map(([title, body], index) => (
            <motion.div
              key={title}
              className="border-l border-primary/40 pl-4"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default About;
