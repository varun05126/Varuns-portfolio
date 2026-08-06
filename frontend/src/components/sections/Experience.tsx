import { motion } from 'framer-motion';
import ZoomSection from '@/components/ui/ZoomSection';
import * as Lucide from 'lucide-react';

const Experience: React.FC = () => {
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
            Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-start gap-6 p-6 bg-muted/20 rounded-xl border border-muted/50"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary/20 rounded-lg"
            >
              <Lucide.Briefcase className="h-6 w-6 text-primary" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-baseline gap-4">
                <h3 className="font-semibold text-lg text-foreground">
                  Frontend Development Intern
                </h3>
                <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs">
                  Cognifyz Technologies
                </span>
              </div>

              <div className="flex items-baseline gap-4 text-sm text-muted-foreground">
                <span>
                  <Lucide.Calendar className="mr-1 h-4 w-4" />
                  Jan 2023 - Present
                </span>
                <span className="mx-2 h-0.5 w-4 bg-primary/20"></span>
                <span>
                  <Lucide.Building className="h-4 w-4" />
                  Remote
                </span>
              </div>

              <p className="text-muted-foreground/80 leading-relaxed">
                Built responsive interfaces, improved UI/UX with HTML/CSS/JS, integrated REST APIs,
                and optimized responsiveness for various devices and screen sizes.
              </p>

              {/* Skills used */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                <span className="px-2 py-0.5 rounded bg-primary/20 text-xs font-medium">
                  HTML/CSS
                </span>
                <span className="px-2 py-0.5 rounded bg-primary/20 text-xs font-medium">
                  JavaScript
                </span>
                <span className="px-2 py-0.5 rounded bg-primary/20 text-xs font-medium">
                  REST APIs
                </span>
                <span className="px-2 py-0.5 rounded bg-primary/20 text-xs font-medium">
                  Responsive Design
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Experience;