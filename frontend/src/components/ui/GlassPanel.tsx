import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useStore } from '@/store/useStore';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  blur?: number; // 16-24px range
  opacity?: number; // 0.08-0.15 range
  shadow?: boolean;
  radius?: string; // e.g., 'rounded-xl'
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  blur = 20,
  opacity = 0.08,
  shadow = true,
  radius = 'rounded-xl',
}) => {
  const { isDark } = useStore();
  const glassOpacity = typeof opacity === 'number' ? opacity : 0.08;
  const glassBlur = typeof blur === 'number' ? blur : 20;

  return (
    <div
      className={twMerge(
        `${radius} ${shadow ? 'shadow-lg' : ''} ${className}`
      )}
      style={{
        backgroundColor: isDark
          ? `rgba(0, 0, 0, ${glassOpacity})`
          : `rgba(255, 255, 255, ${glassOpacity})`,
        backdropFilter: `blur(${glassBlur}px)`,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: `rgba(255, 255, 255, 0.2)`
      }}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
