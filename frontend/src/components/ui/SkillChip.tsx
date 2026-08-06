import { twMerge } from 'tailwind-merge';

interface SkillChipProps {
  label: string;
  level?: number; // 0-100 proficiency level
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SkillChip: React.FC<SkillChipProps> = ({
  label,
  level = 0,
  size = 'md',
  className = '',
}) => {

  // Background color based on level
  const getBgColor = (level: number) => {
    if (level >= 80) return 'bg-primary/20';
    if (level >= 60) return 'bg-accent/20';
    if (level >= 40) return 'bg-secondary/20';
    return 'bg-muted/20';
  };

  // Text color based on level
  const getTextColor = (level: number) => {
    if (level >= 80) return 'text-primary';
    if (level >= 60) return 'text-accent';
    if (level >= 40) return 'text-secondary';
    return 'text-muted-foreground';
  };

  const sizeConfig: Record<string, { px: string; py: string; text: string }> = {
    sm: { px: '2', py: '1', text: 'text-xs' },
    md: { px: '3', py: '1.5', text: 'text-sm' },
    lg: { px: '4', py: '2', text: 'text-base' },
  };

  const { px, py, text } = sizeConfig[size];

  return (
    <div
      className={twMerge(
        'inline-flex items-center px-3 py-1 text-xs transition-all duration-200',
        px && `px-${px}`,
        py && `py-${py}`,
        text,
        'rounded-full',
        'border',
        'border-primary/20',
        getBgColor(level),
        getTextColor(level),
        'hover:border-primary/30',
        'hover:bg-primary/25',
        className
      )}
    >
      <span className="font-medium">{label}</span>
      {level > 0 && (
        <span className="ml-2 flex h-2 w-12 items-center">
          <div
            className="w-full h-full bg-primary/20 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${Math.min(Math.max(level, 0), 100)}%` }}
            ></div>
          </div>
        </span>
      )}
    </div>
  );
};

export default SkillChip;