import { motion } from 'framer-motion';
import { MaterialButton } from '@/components/ui/MaterialButton';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ExamGPT',
      description: 'AI-powered exam prep assistant with features like AI Q&A, personalized study plans, progress tracking, secure authentication, and responsive design.',
      features: [
        'AI-powered question answering',
        'Personalized study plans',
        'Progress tracking & analytics',
        'Secure user authentication',
        'Responsive design for all devices'
      ],
      stack: ['React', 'Django', 'PostgreSQL', 'OpenAI API'],
      status: 'Completed',
      repo: 'https://github.com/varun05126/examgpt',
    },
    {
      title: 'SkillHer',
      description: 'AI career recommendation platform for women featuring personalized career guidance, skill recommendations, learning roadmap generation, and AI-powered suggestions.',
      features: [
        'Personalized career guidance',
        'Skill gap analysis & recommendations',
        'Automated learning roadmap generation',
        'AI-powered course suggestions',
        'Modern responsive UI'
      ],
      stack: ['React', 'Django', 'PostgreSQL', 'Groq API'],
      status: 'Live Demo',
      repo: 'https://github.com/varun05126/skillher',
    },
    {
      title: 'E-Waste Management System',
      description: 'Smart recycling platform enabling pickup requests, smart waste tracking, user dashboard, recycling awareness campaigns, and reward systems.',
      features: [
        'Scheduled pickup requests',
        'Real-time waste tracking',
        'User dashboard & analytics',
        'Recycling awareness & education',
        'Reward point system'
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite'],
      status: 'Completed',
      repo: 'https://github.com/varun05126/ewaste',
    },
    {
      title: 'Smart Study Planner',
      description: 'Task organizer and study schedule generator featuring daily planning, task management, exam reminders, and study analytics.',
      features: [
        'Daily & weekly planning',
        'Task prioritization system',
        'Exam deadline reminders',
        'Study analytics & insights',
        'Customizable study templates'
      ],
      stack: ['Django', 'React', 'PostgreSQL'],
      status: 'In Development',
      repo: 'https://github.com/varun05126/studyplanner',
    },
  ];

  return (
    <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20">

        <div className="relative z-10 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Projects
          </h2>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={project.title} className="group">
                <div className="bg-muted/20 rounded-xl border border-muted/50 overflow-hidden hover:bg-muted/30 transition-all duration-300">
                  {/* Project header */}
                  <div className="px-6 pt-5 pb-4">
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      {project.title}
                      <div className="h-6 w-6 flex items-center justify-center bg-primary/20 rounded-full text-sm">
                        <span className="text-primary">{project.status === 'Completed' ? '✓' : project.status === 'Live Demo' ? '🟢' : '🟡'}</span>
                      </div>
                    </h3>
                    <p className="text-muted-foreground/80 mt-2 line-clamp-3">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="px-6 pb-4">
                    <h4 className="font-semibold text-foreground mb-3">Features</h4>
                    <ul className="space-y-2 text-sm">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-0.5 h-2.5 w-2.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="px-6 pb-4">
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="px-6 pt-4 pb-6">
                    <div className="flex flex-col sm:flex-row sm:gap-3 w-full">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-primary/20 text-primary hover:bg-primary/30 rounded-md border border-primary/20 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Code className="h-4 w-4" /> View Repository
                      </a>
                      {project.status === 'Live Demo' && (
                        <a
                          href="#"
                          className="mt-3 sm:mt-0 flex-1 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md hover:shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;