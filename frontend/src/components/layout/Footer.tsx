import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-8 border-t border-white/10 dark:border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Varun Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
