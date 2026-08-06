import { motion } from 'framer-motion';
import { ZoomSection } from '@/components/ui/ZoomSection';

const Footer: React.FC = () => {
  return (
    <section className="relative">
      <ZoomSection
        accentColor="#fbbf24"
        zoomPoint={{ x: 0.5, y: 0.5 }}
        className="min-h-[20vh] w-full flex-col items-center justify-center px-4 pt-8"
        duration={0.6}
        delay={0.2}
      >
        <div className="relative z-10 text-center">
          <motion.p
            className="text-2xl font-bold italic text-foreground mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            "Code with purpose. Learn continuously. Build solutions that make a difference."
          </motion.p>

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            © 2026 Varun. All Rights Reserved.
          </motion.p>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Footer;