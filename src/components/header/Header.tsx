import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Home, User, Folder, Menu, X } from 'lucide-react'; // Instala lucide-react para los iconos

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto para cambiar el estilo al scrollear
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Projects', href: '#proyectos', icon: <Folder size={18} /> },
    { name: 'GitHub', href: 'https://github.com/tomirios2005', icon: <Github size={18} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tomas-rios-abab09217', icon: <Linkedin size={18} /> },
  ];
 

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nombre */}
        <div className="text-xl font-bold text-white tracking-tighter">
          TOMAS<span className="text-purple-500">RIOS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('http');
            return (
              <a
                key={link.name}
                href={link.href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noreferrer' : undefined}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium text-sm"
              >
                {link.icon}
                {link.name}
              </a>
            );
          })}
      

        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 text-slate-300 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;