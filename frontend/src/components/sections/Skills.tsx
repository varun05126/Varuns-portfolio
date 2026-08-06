import ZoomSection from '@/components/ui/ZoomSection';
import SkillChip from '@/components/ui/SkillChip';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: 'Languages',
      items: [
        ['Java', 68],
        ['Python', 78],
        ['JavaScript', 72],
        ['HTML', 84],
        ['CSS', 78],
        ['SQL', 70],
      ],
    },
    {
      category: 'Frontend',
      items: [
        ['React', 75],
        ['Vite', 70],
        ['Tailwind CSS', 80],
        ['Bootstrap', 65],
      ],
    },
    {
      category: 'Backend',
      items: [
        ['Django', 70],
        ['Django REST Framework', 65],
        ['Node.js', 62],
        ['Express.js', 60],
      ],
    },
    {
      category: 'Database',
      items: [
        ['PostgreSQL', 68],
        ['MySQL', 72],
        ['SQLite', 75],
        ['MongoDB', 60],
      ],
    },
    {
      category: 'AI & ML',
      items: [
        ['Machine Learning', 75],
        ['Prompt Engineering', 70],
        ['OpenAI APIs', 65],
        ['Groq API', 60],
        ['LLM Integration', 68],
      ],
    },
    {
      category: 'Tools',
      items: [
        ['Git', 72],
        ['GitHub', 78],
        ['VS Code', 82],
        ['Postman', 66],
        ['Docker (Basics)', 60],
        ['Render', 65],
        ['Vercel', 70],
      ],
    },
  ];

  return (
    <section className="relative">
      <ZoomSection
        accentColor="#3b82f6"
        zoomPoint={{ x: 0.5, y: 0.2 }}
        className="min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20"
      >
        <div className="relative z-10 w-full max-w-4xl space-y-12">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Skills & Expertise
          </h2>

          <div className="grid gap-8">
            {skillGroups.map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((item) => {
                    const [skill, level] = item;
                    return (
                      <div key={`${group.category}-${skill}`} className="flex items-center">
                        <SkillChip
                          label={skill as string}
                          level={level as number}
                          size="md"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Skills;