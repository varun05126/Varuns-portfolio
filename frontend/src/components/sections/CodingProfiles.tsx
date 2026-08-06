import { motion } from 'framer-motion';
import { icons } from 'lucide-react';
import ZoomSection from '@/components/ui/ZoomSection';

const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      platform: 'GitHub',
      url: 'https://github.com/varun05126',
      icon: <icons.Github className="h-5 w-5" />,
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/varun05126',
      icon: <icons.Linkedin className="h-5 w-5" />,
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/varun05126/',
      icon: <icons.CodeSandbox className="h-5 w-5" />,
    },
    {
      platform: 'HackerRank',
      url: 'https://hackerrank.com/varun05126',
      icon: <icons.Terminal className="h-5 w-5" />,
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
            Coding Profiles
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex flex-wrap gap-8 justify-center">
              {profiles.map((profile, index) => (
                <motion.a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="flex flex-col items-center gap-3 p-6 bg-muted/20 rounded-xl border border-muted/50 hover:bg-muted/30 hover:border-muted/200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center justify-center p-3 bg-white/10 rounded-full"
                  >
                    {profile.icon}
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="font-medium text-foreground"
                  >
                    {profile.platform}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default CodingProfiles;