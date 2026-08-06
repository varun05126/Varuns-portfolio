import { motion } from 'framer-motion';
import { Zap, Heart, Brain, ShieldCheck, Sparkles } from 'lucide-react';
import { ZoomSection } from '@/components/ui/ZoomSection';

const WhyWorkWithMe: React.FC = () => {
  const qualities = [
    {
      title: 'Strong Analytical/Problem-Solving Skills',
      description: 'Ability to break down complex problems and devise efficient solutions',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Passion for AI',
      description: 'Deep enthusiasm for artificial intelligence and machine learning technologies',
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: 'Fast learner',
      description: 'Quickly grasp new concepts, technologies, and methodologies',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Clean Maintainable Code',
      description: 'Writing readable, well-structured, and easily maintainable code',
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: 'Commitment to Quality',
      description: 'Dedication to delivering high-quality work that meets requirements and exceeds expectations',
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  return (
    <section className="relative">
      <ZoomSection
        accentColor="#3b82f6"
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
            Why Work With Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="flex flex-col items-center justify-center p-6 bg-muted/20 rounded-xl border border-muted/50 hover:bg-muted/30 hover:border-muted/200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/20 rounded-full">
                    {quality.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-center">{quality.title}</h3>
                <p className="text-sm text-muted-foreground text-center mt-2 max-w-xs">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default WhyWorkWithMe;