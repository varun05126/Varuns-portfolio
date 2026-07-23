import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useStore();

  return (
    <header className="bg-white/5 dark:bg-black/5 backdrop-blur-sm border-b border-white/10 dark:border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-6">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-primary">Varun Portfolio</span>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/skills"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded hover:bg-muted"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
