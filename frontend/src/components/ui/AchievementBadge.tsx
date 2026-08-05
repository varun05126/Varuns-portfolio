import { MotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface AchievementBadgeProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon,
  size = 'md',
  className = '',
}) => {
  const sizeConfig: Record<string, { size: string; p: string; text: string; title: string }> = {
    sm: { size: 'h-10 w-10', p: 'p-1', text: 'text-xs', title: 'text-sm' },
    md: { size: 'h-12 w-12', p: 'p-2', text: 'text-sm', title: 'text-base' },
    lg: { size: 'h-14 w-14', p: 'p-3', text: 'text-base', title: 'text-lg' },
  };

  const { size: sizeClass, p, text, title: titleSize } = sizeConfig[size];

  return (
    <div
      className={twMerge(
        'relative flex items-center justify-center',
        sizeClass,
        p,
        'rounded-full',
        'bg-primary/10',
        'border',
        'border-primary/20',
        'hover:bg-primary/20',
        'hover:border-primary/30',
        'transition-all',
        'duration-300',
        'transform',
        'hover:-translate-y-1',
        'hover:scale-105',
        className
      )}
    >
      {icon && (
        <div className="absolute -top-2 -left-2 bg-primary rounded-full flex items-center justify-center w-5 h-5">
          {icon}
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mb-1">
          {icon || (
            <div className="w-4 h-4 bg-primary rounded-full"></div>
          )}
        </div>
        <h3 className={titleSize} font-medium>{title}</h3>
        {description && (
          <p className={text} text-muted-foreground text-center>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;