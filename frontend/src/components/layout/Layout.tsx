import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FishBackground from '../three/FishBackground';

interface LayoutProps {
  children: React.ReactNode;
}

class BackgroundBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Fish background failed to render:', error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const foregroundStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        backgroundColor: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
      }}
    >
      <BackgroundBoundary>
        <FishBackground />
      </BackgroundBoundary>
      <div className="relative z-10" style={foregroundStyle}>
        <Header />
      </div>
      <main className="relative z-10 min-h-screen pb-12" style={{ ...foregroundStyle, minHeight: '100vh' }}>
        {children}
      </main>
      <div className="relative z-10" style={foregroundStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
