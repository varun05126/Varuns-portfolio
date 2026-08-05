import { MotionProps } from 'framer-motion';

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
    <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20">

        <div className="relative z-10 w-full max-w-4xl grid gap-8 md:grid-cols-[1fr_1fr] items-start">
          {/* Left side - Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-muted-foreground/80 leading-relaxed mb-4">
              I am a CSE (AI & ML) student who turns ideas into practical software using modern tech.
              My interests span AI, Web Development, Cloud Computing, and DSA. I'm currently aiming for
              Software Engineer roles while exploring AI Engineering and Full Stack Development.
            </p>
          </div>

          {/* Right side - Facts and Timeline */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Quick Facts
              </h3>
              <div className="grid gap-3">
                {facts.map(([label, value], index) => (
                  <div key={index} className="flex w-full items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 flex items-center justify-center bg-primary/20 rounded-full">
                        <span className="text-primary text-sm font-medium">{label.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{label}</p>
                      <p className="text-muted-foreground/80">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Learning Journey
              </h3>
              <div className="space-y-4">
                {timeline.map(([title, description], index) => (
                  <div key={index} className="flex items-start gap-4">
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
                      <p className="text-muted-foreground/80">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;