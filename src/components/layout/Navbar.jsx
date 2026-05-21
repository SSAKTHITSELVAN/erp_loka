import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle } from 'lucide-react';
import { navLinks } from '../../data/content';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                <CheckCircle className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-tight transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                ERP LOKA
              </span>
              <span
                className={`text-xs font-medium transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                IT consulting
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-gray-700 py-4 border-b border-gray-200 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
