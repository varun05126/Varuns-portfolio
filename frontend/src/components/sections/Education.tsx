import { MotionProps } from 'framer-motion';

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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Degree Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center md:text-left">
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center bg-primary/20 rounded-full shrink-0">
                  <span className="text-primary font-bold text-lg">B.Tech</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">Computer Science Engineering (AI & ML)</h3>
                  <p className="text-sm text-muted-foreground">
                    Vardhaman College of Engineering, Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="border-t border-primary/10 pt-4">
                <h3 className="font-semibold mb-2">Coursework</h3>
                <div className="grid gap-2 md:grid-cols-2">
                  {coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded bg-primary/10 text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            }
          }

          {/* Right: Timeline */}
          <div className="space-y-6 border-l-2 border-primary/20 pl-4">
            <h2 className="text-2xl font-bold">Academic Timeline</h2>

            {/* Timeline items */}
            <div className="space-y-6">
              {/* Year 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center bg-primary/20 rounded-full shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Foundation Year</h3>
                  <p className="text-sm text-muted-foreground">
                    Built strong foundation in programming fundamentals with Python, Java, C++, DBMS, and operating systems.
                  </p>
                </div>
              </div>

              {/* Year 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center bg-primary/20 rounded-full shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Web Development Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Started building browser-based projects with HTML, CSS, JavaScript, React, and Node.js.
                  </p>
                </div>
              </div>

              {/* Year 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center bg-primary/20 rounded-full shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Applied Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    Created SkillHer and an E-Waste Management System to connect learning with practical impact.
                  </p>
                </div>
              }
            </div>
          }
        }
      </div>
    </section>
  );
};

export default Education;