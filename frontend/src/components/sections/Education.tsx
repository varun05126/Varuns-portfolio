import { motion } from 'framer-motion';
import { ZoomSection } from '@/components/ui/ZoomSection';

interface EducationProps {
  className?: string;
}

const Education: React.FC<EducationProps> = ({ className = '' }) => {
  const coursework = [
    'Data Structures & Algorithms',
    'Artificial Intelligence',
    'Machine Learning',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems',
    'Object-Oriented Programming'
  ];

  return (
    <section className={className}>
      <ZoomSection
        accentColor="#fbbf24"
        zoomPoint={{ x: 0.5, y: 0.5 }}
        className="min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20"
      >
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: Degree Info */}
            <div className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-center md:text-left"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Education
              </motion.h2>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/20 rounded-full shrink-0">
                    <span className="text-primary font-bold text-lg">B.Tech</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Computer Science Engineering (AI & ML)</h3>
                    <p className="text-sm text-muted-foreground">
                      Vardhaman College of Engineering, Hyderabad, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="border-t border-primary/10 pt-4"
                >
                  <h3 className="font-semibold mb-2">Coursework</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    {coursework.map((course, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.6 }}
                        className="px-3 py-1.5 rounded bg-primary/10 text-sm font-medium"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            }

            {/* Right: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-6 border-l-2 border-primary/20 pl-4"
            >
              <h2 className="text-2xl font-bold">Academic Timeline</h2>

              {/* Timeline items */}
              <div className="space-y-6">
                {/* Year 1 */}
                <motion.div
                  key="year1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-primary/20 rounded-full shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Foundation Year</h3>
                    <p className="text-sm text-muted-foreground">
                      Built strong foundation in programming fundamentals with Python, Java, C++, DBMS, and operating systems.
                    </p>
                  </div>
                </motion.div>

                {/* Year 2 */}
                <motion.div
                  key="year2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-primary/20 rounded-full shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Web Development Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Started building browser-based projects with HTML, CSS, JavaScript, React, and Node.js.
                    </p>
                  </div>
                </motion.div>

                {/* Year 3 */}
                <motion.div
                  key="year3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-primary/20 rounded-full shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Applied Projects</h3>
                    <p className="text-sm text-muted-foreground">
                      Created SkillHer and an E-Waste Management System to connect learning with practical impact.
                    </p>
                  </div>
                </motion.div>
              </div>
            }
          </div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Education;