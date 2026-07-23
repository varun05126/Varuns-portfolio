import React from 'react';
import { twMerge } from 'tailwind-merge';
import GlassPanel from './GlassPanel';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'hoverable' | 'clickable';
  size?: 'sm' | 'md' | 'lg';
  radius?: string;
  className?: string;
  asChild?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  radius = 'rounded-lg',
  className = '',
  asChild = false,
}) => {
  const base = 'transition-all duration-200';
  const sizeMap: Record<string, string> = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  const variantMap: Record<string, string> = {
    default: '',
    elevated: 'shadow-md hover:shadow-lg',
    hoverable:
      'hover:-translate-y-1 hover:shadow-md transition-transform duration-200',
    clickable:
      'hover:-translate-y-1 hover:shadow-md active:scale-[0.98] transition-transform duration-200 cursor-pointer',
  };

  if (asChild) {
    // Expect a single child element
    const child = React.Children.only(children);
    const mergedClassName = twMerge(
      base,
      sizeMap[size],
      variantMap[variant],
      radius,
    );
    return React.cloneElement(child as React.ReactElement, {
      className: mergedClassName,
    } as any);
  }

  return (
    <div
      className={twMerge(
        base,
        sizeMap[size],
        variantMap[variant],
        radius,
        className
      )}
    >
      <GlassPanel>{children}</GlassPanel>
    </div>
  );
};

export default Card;