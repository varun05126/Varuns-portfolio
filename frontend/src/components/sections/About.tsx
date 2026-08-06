import { motion } from 'framer-motion';
import ZoomSection from '@/components/ui/ZoomSection';

const About: React.FC = () => {
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

  return (
    <section className="relative">
      <ZoomSection
        accentColor="#3b82f6"
        zoomPoint={{ x: 0.3, y: 0.5 }}
        className="min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20"
      >
        <div className="relative z-10 w-full max-w-4xl grid gap-8 md:grid-cols-[1fr_1fr] items-start">
          {/* Left side - Story */}
          <div className="space-y-6">
            <motion.h2
              className="text-3xl font-bold text-foreground"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-muted-foreground/80 leading-relaxed mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I am a CSE (AI & ML) student who turns ideas into practical software using modern tech.
              My interests span AI, Web Development, Cloud Computing, and DSA. I'm currently aiming for
              Software Engineer roles while exploring AI Engineering and Full Stack Development.
            </motion.p>
          </div>

          {/* Right side - Facts and Timeline */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Quick Facts
                </h3>
                <div className="grid gap-3">
                  {facts.map(([label, value], index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index, duration: 0.6 }}
                      className="flex w-full items-start gap-3 p-3 bg-muted/20 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 flex items-center justify-center bg-primary/20 rounded-full">
                          <span className="text-primary text-sm font-medium">{label.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{label}</p>
                        <p className="text-muted-foreground/80">{value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Learning Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Learning Journey
                </h3>
                <div className="space-y-4">
                  {timeline.map(([title, description], index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index, duration: 0.6 }}
                      className="flex items-start gap-4"
                    >
                      {/* Timeline marker */}
                      <div className="relative w-2 h-4 flex-shrink-0">
                        <div className="h-4 w-2 bg-primary"></div>
                        <div className="absolute -left-1 -top-1 w-4 h-4 bg-primary/20 rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-full -left-1 w-2 h-4 bg-primary/20"></div>
                        )}
                      </div>

                      {/* Timeline content */}
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-foreground">{title}</h4>
                        <p className="text-muted-foreground/80">{description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default About;