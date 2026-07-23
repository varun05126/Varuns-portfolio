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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundBoundary>
        <FishBackground />
      </BackgroundBoundary>
      <div className="relative z-10">
        <Header />
      </div>
      <main className="relative z-10 min-h-screen pb-12">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
