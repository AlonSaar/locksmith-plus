import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-container container-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Single line with subtitle below */}
          <Link to="/" className="group">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Locksmith-Plus
              </h1>
              <p className="text-xs text-gray-600 font-medium whitespace-nowrap">
                NYC Metro Security Experts
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Precisely spaced */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-700 bg-blue-50 shadow-sm'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number - Single line with subtitle below */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Phone className="h-4 w-4" />
              <div>
                <p className="text-xs font-medium opacity-90 whitespace-nowrap">Emergency 24/7</p>
                <p className="text-sm font-bold whitespace-nowrap">(516) 555-LOCK</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button - Precisely aligned */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Precisely structured */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="container-padding py-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl mt-6">
              <Phone className="h-4 w-4" />
              <div>
                <p className="text-xs font-medium whitespace-nowrap">Emergency 24/7</p>
                <p className="text-sm font-bold whitespace-nowrap">(516) 555-LOCK</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;