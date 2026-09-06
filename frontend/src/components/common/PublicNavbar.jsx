import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const PublicNavbar = ({ selectedLanguage, onLanguageChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-surface-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-900/50">
            Q
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Ask Your Doctor <span className="text-primary-400 text-xs font-normal hidden sm:inline">(QLP)</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-primary-400 font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive('/about') ? 'text-primary-400 font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* Desktop Actions & Language Selector */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
          <Link to="/login" className="btn btn-ghost btn-sm text-gray-300">
            Log In
          </Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface-800/95 backdrop-blur-2xl">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                isActive('/') ? 'bg-primary-600/20 text-primary-300' : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                isActive('/about') ? 'bg-primary-600/20 text-primary-300' : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              About Us
            </Link>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <span className="text-xs text-gray-400">Language:</span>
                <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-secondary btn-sm justify-center"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary btn-sm justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
