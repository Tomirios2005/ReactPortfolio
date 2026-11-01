import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Home, User, Folder, Briefcase, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = i18n.resolvedLanguage?.startsWith('es') ? 'es' : 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setLang = (next: 'en' | 'es') => {
    void i18n.changeLanguage(next);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home', icon: <Home size={18} /> },
    { name: t('nav.about'), href: '#about', icon: <User size={18} /> },
    { name: t('nav.experience'), href: '#experience', icon: <Briefcase size={18} /> },
    { name: t('nav.projects'), href: '#proyectos', icon: <Folder size={18} /> },
    { name: 'GitHub', href: 'https://github.com/tomirios2005', icon: <Github size={18} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tomas-rios-abab09217', icon: <Linkedin size={18} /> },
  ];

  const languageSwitch = (
    <div className="flex items-center rounded-full border border-slate-700 p-0.5 text-xs font-semibold">
      {(['en', 'es'] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`min-w-9 min-h-8 px-2.5 rounded-full uppercase tracking-wide ${
              lang === code ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
            aria-pressed={lang === code}
          >
          {code}
        </button>
      ))}
    </div>
  );
 

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center  ">
        {/* Logo / Nombre */}
        <div className="text-xl font-bold text-white tracking-tighter">
          TOMAS<span className="text-purple-500">RIOS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
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

        <div className="flex items-center gap-3">
          {languageSwitch}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
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