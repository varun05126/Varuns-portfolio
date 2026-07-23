import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FishBackground from '../three/FishBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <FishBackground />
      <Header />
      <main className="min-h-[calc(100vh_-_auto)] pb-12 relative z-10">
        <div className="min-h-[calc(100vh_-_auto)]">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
