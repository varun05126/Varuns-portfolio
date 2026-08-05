import { useRef } from 'react';
import { useScroll, useTransform, useSpring, motion, Variants } from 'framer-motion';
import { useEffect } from 'react';

interface ZoomSectionProps {
  children: React.ReactNode;
  delay?: number; // Stagger delay between children (default: 0.07s)
  duration?: number; // Transition duration (default: 0.8s)
  fade?: boolean; // Enable fade transition (default: true)
  blur?: boolean; // Enable blur transition (default: true)
  scale?: boolean; // Enable scale transition (default: true)
  parallax?: boolean; // Enable parallax background scaling (default: true)
  zoomPoint?: { x: number; y: number }; // Focal point (0-1 range, default: {x:0.5, y:0.5})
  accentColor?: string; // Focal glow color for this section
  variant?: 'default' | 'dark'; // Section styling
  className?: string; // Additional classes
}

const ZoomSection: React.FC<ZoomSectionProps> = ({
  children,
  delay = 0.07,
  duration = 0.8,
  fade = true,
  blur = true,
  scale = true,
  parallax = true,
  zoomPoint = { x: 0.5, y: 0.5 },
  accentColor,
  variant = 'default',
  className = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  // Check for reduced motion preference
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If reduced motion is requested, return simple fade-in
  if (reduceMotion) {
    return (
      <motion.div
        ref={ref}
        className={`relative isolate ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  // Calculate scale, blur, and opacity based on scroll progress
  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [scale ? 0.85 : 1, scale ? 0.9 : 1, scale ? 1 : 1, scale ? 1 : 1]
  );

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [blur ? '8px' : '0px', blur ? '4px' : '0px', blur ? '0px' : '0px', blur ? '0px' : '0px']
  );

  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [fade ? 0.3 : 1, fade ? 0.6 : 1, fade ? 1 : 1, fade ? 1 : 1]
  );

  // Use spring for smoother animation
  const springScale = useSpring(scaleValue, { damping: 20, stiffness: 120 });
  const springBlur = useSpring(blurValue, { damping: 20, stiffness: 120 });
  const springOpacity = useSpring(opacityValue, { damping: 20, stiffness: 120 });

  // Create variants for staggered children
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: blur ? 'blur(0px)' : 'blur(0px)',
      transition: {
        delay: (i: number) => i * delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative isolate overflow-hidden ${className}`}
      style={{
        '--scroll-progress': scrollYProgress,
      }}
    >
      {/* Background layer for parallax effect */}
      {parallax && (
        <motion.div
          className="absolute inset-0 -z-10 overflow-hidden"
          style={{
            transformOrigin: 'center',
            filter: blur ? 'blur(8px)' : 'blur(0px)',
            WebkitFilter: blur ? 'blur(8px)' : 'blur(0px)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at var(--bg-position-x,50%)_var(--bg-position-y,50%),rgba(255,255,255,0.03)_0%,transparent_40%)] animate-[gradient-shift_15s_ease_infinite]"
               style={{
                 '--bg-position-x': `${(scrollYProgress * 100 * 0.3) + 50}%`,
                 '--bg-position-y': `${(scrollYProgress * 100 * 0.3) + 50}%`,
               }}/>
        </motion.div>
      )}

      {/* Main content container with transform and filter effects */}
      <motion.div
        className="relative z-10 isolation"
        style={{
          transformOrigin: 'center',
          filter: springBlur,
          WebkitFilter: String(springBlur),
          opacity: springOpacity,
        }}
      >
        {/* Content wrapper for stagger effects */}
        <div className="relative">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;

            return (
              <motion.div
                key={child.key ?? index}
                initial="hidden"
                animate="visible"
                variants={variants}
                className="mb-4 last:mb-0"
              >
                {child}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ZoomSection;