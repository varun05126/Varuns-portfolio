import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <GlassPanel className="p-6">
            <h2 className="text-xl font-semibold mb-4">Hello, I'm Varun</h2>
            <p className="mb-4">
              I'm a student at Vardhaman College of Engineering, passionate about building things
              and learning new technologies. This portfolio is where I document my journey — from
              small experiments to bigger projects.
            </p>
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="flex-shrink-0 text-primary">🎓</span>
                <span>Studying at Vardhaman College of Engineering</span>
              </p>
              <p className="flex items-start">
                <span className="flex-shrink-0 text-primary">🌱</span>
                <span>Currently learning: Web Development, Python, DSA</span>
              </p>
              <p className="flex items-start">
                <span className="flex-shrink-0 text-primary">💡</span>
                <span>Interested in: Full-stack development, AI/ML, Open Source</span>
              </p>
              <p className="flex items-start">
                <span className="flex-shrink-0 text-primary">📫</span>
                <span>How to reach me: malthumkarvarun@gmail.com</span>
              </p>
            </div>
          </GlassPanel>
        </div>
        <div>
          <GlassPanel className="p-6">
            <h2 className="text-xl font-semibold mb-4">Skills Overview</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Python
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Java
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    C++
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    JavaScript
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    HTML
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    CSS
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    React
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Git
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    VS Code
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Postman
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    DSA
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    DBMS
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    OS fundamentals
                  </span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};

export default About;
