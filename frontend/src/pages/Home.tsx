import React from 'react';
import { motion } from 'framer-motion';
import GlassPanel from '../components/ui/GlassPanel';
import Card from '../components/ui/Card';

const tags = ['Python', 'JavaScript', 'React', 'Node.js', 'Django', 'DSA'];

const projects = [
  {
    title: 'SkillHer',
    description: 'A learning-resource platform that helps women discover practical skills and growth paths.',
  },
  {
    title: 'E-Waste Management System',
    description: 'A web app for connecting users with e-waste collection centers and recycling information.',
  },
];

const Home: React.FC = () => {
  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <GlassPanel className="p-8">
        <motion.p
          className="mb-3 text-sm font-semibold text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Student developer at Vardhaman College of Engineering
        </motion.p>
        <motion.h1
          className="mb-5 text-4xl font-bold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          Building useful full-stack projects while learning modern software engineering.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
        >
          I am Varun, a student developer focused on web development, Python, DSA, and practical
          products that solve real problems. This portfolio collects my current skills, projects,
          and learning journey.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34 }}
        >
          {tags.map((tag) => (
            <span key={tag} className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              {tag}
            </span>
          ))}
        </motion.div>
      </GlassPanel>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          ['Current Focus', 'Web development, Python programming, data structures, and backend fundamentals.'],
          ['Goal', 'Grow into a full-stack developer who can design, build, deploy, and maintain real products.'],
        ].map(([title, body], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <GlassPanel className="h-full p-6">
              <h2 className="mb-3 text-xl font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{body}</p>
            </GlassPanel>
          </motion.div>
        ))}
      </div>

      <GlassPanel className="mt-8 p-6">
        <h2 className="mb-4 text-xl font-semibold">Featured Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + index * 0.1 }}
              whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
            >
              <Card variant="hoverable" className="h-full p-4">
                <h3 className="mb-2 font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default Home;
