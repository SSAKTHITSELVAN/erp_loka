import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { navLinks } from '../../data/content';
import BookDemoModal from '../common/BookDemoModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isCareerPage = location.pathname === '/career';

  const handleNavClick = (href) => {
    setIsOpen(false);

    // If it's a hash link
    if (href.startsWith('#')) {
      // If we're not on home page, navigate to home with hash
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        // If we're on home page, smooth scroll to section
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">

      {/* Top Gradient Border - Electric Blue to Orange */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 50%, #f97316 100%)'
      }}></div>

      {/* Main Container - Reduced Width */}
      <div className="max-w-[1320px] mx-auto px-8 py-1.5">
        <div className="flex justify-between items-center h-14">

          {/* Logo Section with Actual Logo Image */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                const heroElement = document.getElementById('home');
                if (heroElement) {
                  heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="flex items-center cursor-pointer group flex-shrink-0 -ml-10 transition-all duration-300 hover:scale-105"
          >
            <img
              src="/logo_final_v.png"
              alt="ERP LOKA Logo"
              className="h-17 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
            />
            <div className="flex flex-col justify-center leading-none -ml-5">
              <span className="text-2xl logo-main-title text-left transition-all duration-300 group-hover:text-[#0ea5e9] group-hover:tracking-wider">
                ERP LOKA
              </span>
              <p className="text-xs logo-sub-title mt-0.5 text-left transition-all duration-300 group-hover:text-[#f97316] group-hover:translate-x-1 pl-11.5">
                IT Consulting
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((item) => {
              const isExternal = item.href.startsWith('#');
              return isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-2 py-1.5 text-[16px] font-semibold transition-all duration-300 rounded relative group text-slate-900 hover:text-electric hover:scale-110 hover:tracking-wide hover:-translate-y-0.5"
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif'
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-electric via-[#0ea5e9] to-[#f97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-electric/5 to-[#f97316]/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-2 py-1.5 text-[16px] font-semibold transition-all duration-300 rounded relative group text-slate-900 hover:text-electric hover:scale-110 hover:tracking-wide hover:-translate-y-0.5"
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif'
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-electric via-[#0ea5e9] to-[#f97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-electric/5 to-[#f97316]/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              );
            })}

            {/* Book a Demo CTA Button - Red */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2 ml-3 text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] relative overflow-hidden group"
              style={{
                background: '#E60000',
                fontFamily: 'Rajdhani, sans-serif',
                borderRadius: '0px'
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Calendar size={18} />
                Book a Demo
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded hover:bg-gray-100 transition-colors text-slate-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - White Background */}
      <div
        className={`xl:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Logo and Close Button Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              if (location.pathname === '/') {
                const heroElement = document.getElementById('home');
                if (heroElement) {
                  heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="flex items-center cursor-pointer -ml-2 group transition-all duration-300 hover:scale-105"
          >
            <img
              src="/logo_final_v.png"
              alt="ERP LOKA Logo"
              className="h-17 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
            />
            <div className="flex flex-col justify-center leading-none -ml-2">
              <span className="text-xl logo-main-title text-left transition-all duration-300 group-hover:text-[#0ea5e9] group-hover:tracking-wider">
                ERP LOKA
              </span>
              <p className="text-[10px] logo-sub-title mt-0.5 text-left transition-all duration-300 group-hover:text-[#f97316] group-hover:translate-x-1 pl-11.5">
                IT Consulting
              </p>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded hover:bg-gray-100 transition-colors text-slate-900"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-8 px-8">
          {navLinks.map((item) => {
            const isExternal = item.href.startsWith('#');
            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-2xl font-bold py-5 border-b border-gray-200 text-slate-900 hover:text-electric transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:tracking-wide relative group"
                style={{
                  fontFamily: 'Rajdhani, sans-serif'
                }}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-electric to-[#f97316] group-hover:h-8 transition-all duration-300 rounded-full"></span>
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold py-5 border-b border-gray-200 text-slate-900 hover:text-electric transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:tracking-wide relative group"
                style={{
                  fontFamily: 'Rajdhani, sans-serif'
                }}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-electric to-[#f97316] group-hover:h-8 transition-all duration-300 rounded-full"></span>
                {item.name}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsDemoModalOpen(true);
            }}
            className="mt-8 px-6 py-4 text-xl font-bold text-white text-center shadow-[0_0_30px_rgba(220,38,38,0.4)] w-full"
            style={{
              background: '#E60000',
              fontFamily: 'Rajdhani, sans-serif'
            }}
          >
            Book a Demo
          </button>
        </div>
      </div>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </nav>
  );
}