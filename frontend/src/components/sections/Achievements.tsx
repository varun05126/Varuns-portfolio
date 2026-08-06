import { motion } from 'framer-motion';
import { AchievementBadge } from '@/components/ui/AchievementBadge';
import { Trophy, Code, Heart, Lightbulb } from 'lucide-react';
import { ZoomSection } from '@/components/ui/ZoomSection';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Frontend Development Internship Completed',
      description: 'Successfully completed frontend development internship at Cognifyz Technologies',
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: 'Multiple AI-Powered Full-Stack Applications',
      description: 'Built and deployed several AI-integrated web applications from concept to production',
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: 'Strong Data Structures & Algorithms Foundation',
      description: 'Proven ability to solve complex algorithmic problems and optimize code performance',
      icon: <Heart className="h-5 w-5" />,
    },
    {
      title: 'Passionate About Solving Real-World Problems',
      description: 'Dedicated to creating technology solutions that address genuine societal needs',
      icon: <Lightbulb className="h-5 w-5" />,
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
            Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.1 * index + Math.random() * 0.1, // slight random delay
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col items-center justify-center p-6 bg-muted/20 rounded-xl border border-muted/50 hover:bg-muted/30 hover:border-muted/200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="mb-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-primary/20 rounded-full">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-center">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Achievements;