import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, FileText } from 'lucide-react';
import { MaterialButton } from '@/components/ui/MaterialButton';
import { ZoomSection } from '@/components/ui/ZoomSection';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <ZoomSection
        accentColor="#fbbf24"
        zoomPoint={{ x: 0.5, y: 0.4 }}
        className="min-h-[100vh] w-full flex-col items-center justify-center px-4 pt-20"
      >
        <div className="text-center space-y-6">
          {/* Name - reveals first */}
          <motion.h1
            className="text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Varun
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            AI & ML Student | Full Stack Developer | Problem Solver
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg text-muted-foreground/80 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Passionate about building intelligent systems that solve real-world problems.
            Skilled in full-stack development, AI/ML, and crafting elegant user experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <MotionButton
              variant="primary"
              size="lg"
              className="flex items-center gap-2"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </MotionButton>

            <MotionButton
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </MotionButton>

            <MotionButton
              variant="secondary"
              size="lg"
              className="flex items-center gap-2"
            >
              Download Resume
              <FileText className="h-4 w-4" />
            </MotionButton>
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

// Wrapper for MaterialButton with motion variants
const MotionButton = ({ variant, size, className, children, ...props }:
  React.ComponentProps<typeof import('@/components/ui/MaterialButton').MaterialButton> & {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
  }) => {
  return (
    <motion.button
      asChild
      className={`
        transition-all duration-300 transform
        hover:-translate-y-1 hover:scale-105
        ${variant === 'primary' ? 'bg-primary/20 hover:bg-primary/30' : ''}
        ${variant === 'outline' ? 'border border-primary/20 hover:border-primary/30' : ''}
        ${variant === 'secondary' ? 'bg-secondary/20 hover:bg-secondary/30' : ''}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* We'd need to clone the MaterialButton here, but for simplicity, let's use a regular button */}
      <button className={className} {...props}>
        {children}
      </button>
    </motion.button>
  );
};

export default Hero;