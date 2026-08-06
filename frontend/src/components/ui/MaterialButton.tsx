import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface MaterialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  className?: string;
}

const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.02 },
  press: { scale: 0.95 },
};

const MaterialButton: React.FC<MaterialButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  // Button styles
  const variantConfig: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
    primary: {
      bg: 'bg-primary',
      text: 'text-primary-foreground',
      border: 'border-transparent',
      hoverBg: 'bg-primary/90',
    },
    secondary: {
      bg: 'bg-secondary/20',
      text: 'text-secondary-foreground',
      border: 'border-border',
      hoverBg: 'bg-secondary/30',
    },
    outline: {
      bg: 'bg-transparent',
      text: 'text-primary',
      border: 'border-border',
      hoverBg: 'bg-primary/10',
    },
    ghost: {
      bg: 'bg-transparent',
      text: 'text-primary/80',
      border: 'border-transparent',
      hoverBg: 'bg-primary/10',
    },
  };

  const sizeConfig: Record<string, { px: string; py: string; text: string; gap: string }> = {
    sm: { px: '2', py: '1', text: 'text-sm', gap: '2' },
    md: { px: '3', py: '1.5', text: 'text-base', gap: '2' },
    lg: { px: '4', py: '2', text: 'text-lg', gap: '3' },
  };

  const { px, py, text, gap } = sizeConfig[size];
  const { bg, text: textColor, border, hoverBg } = variantConfig[variant];

  // Handle loading state
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      e.preventDefault();
    }
  };

  // Remove problematic props that are not compatible with motion.button
  const {
    onDrag: _onDrag,
    onDragEnd: _onDragEnd,
    onDragStart: _onDragStart,
    onDragLeave: _onDragLeave,
    onDragEnter: _onDragEnter,
    onDragOver: _onDragOver,
    onAnimationStart: _onAnimationStart,
    onAnimationEnd: _onAnimationEnd,
    onAnimationIteration: _onAnimationIteration,
    onTransitionEnd: _onTransitionEnd,
    ...restProps
  } = props;

  return (
    <motion.button
      ref={ref}
      type="button"
      variants={buttonVariants}
      initial="idle"
      whileTap="press"
      whileHover="hover"
      onClick={handleClick}
      disabled={loading || props.disabled}
      className={twMerge(
        'relative inline-flex items-center justify-center gap-x-2',
        'rounded-md border font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'hover:shadow-md',
        px && `px-${px}`,
        py && `py-${py}`,
        text,
        gap && `gap-${gap}`,
        bg,
        textColor,
        border,
        hoverBg,
        className
      )}
      {...restProps}
    >
      {icon && iconPosition === 'left' && (
        <div className="flex h-4 w-4 items-center justify-center">
          {icon}
        </div>
      )}

      {loading ? (
        <div className="flex h-4 w-4 items-center justify-center">
          <div className="w-2 h-2 border-2 border-primary/50 border-t-primary rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {typeof children === 'string' ? children : children}
        </>
      )}

      {icon && iconPosition === 'right' && (
        <div className="flex h-4 w-4 items-center justify-center">
          {icon}
        </div>
      )}
    </motion.button>
  );
};

export default MaterialButton;