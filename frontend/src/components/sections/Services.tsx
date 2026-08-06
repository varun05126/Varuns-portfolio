import { motion } from 'framer-motion';
import { Code, Brain, Server, Database } from 'lucide-react';
import { ZoomSection } from '@/components/ui/ZoomSection';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end web application development from frontend UI to backend APIs and database design.',
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: 'AI Integration',
      description: 'Implementing artificial intelligence solutions including LLMs, machine learning models, and AI-powered features.',
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: 'Backend Development',
      description: 'Building scalable server-side applications, REST APIs, and microservices using modern frameworks.',
      icon: <Server className="h-5 w-5" />,
    },
    {
      title: 'Database Design',
      description: 'Designing and optimizing relational and NoSQL databases for performance, scalability, and data integrity.',
      icon: <Database className="h-5 w-5" />,
    },
  ];

  return (
    <section className="relative">
      <ZoomSection
        accentColor="#fbbf24"
        zoomPoint={{ x: 0.5, y: 0.5 }}
        className="min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20"
      >
        <div className="relative z-10 w-full max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center text-foreground mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="flex flex-col items-center justify-center p-6 bg-muted/20 rounded-xl border border-muted/50 hover:bg-muted/30 hover:border-muted/200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/20 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-center">{service.title}</h3>
                <p className="text-sm text-muted-foreground text-center mt-2 max-w-xs">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Services;