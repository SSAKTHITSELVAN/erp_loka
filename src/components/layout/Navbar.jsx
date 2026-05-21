import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { navLinks } from '../../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">

      {/* Top Gradient Border - Electric Blue to Orange */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 50%, #f97316 100%)'
      }}></div>

      {/* Main Container - Reduced Width */}
      <div className="max-w-[1320px] mx-auto px-8 py-2">
        <div className="flex justify-between items-center h-16">

          {/* Logo Section with Actual Logo Image */}
          <a href="#home" className="flex items-center cursor-pointer group flex-shrink-0">
            <img
              src="/logo_final_v.png"
              alt="ERP LOKA Logo"
              className="h-16 w-auto object-contain"
            />
            <div className="flex flex-col justify-center leading-none -ml-4">
              <span className="text-3xl logo-main-title">
                ERP LOKA
              </span>
              <p className="text-sm logo-sub-title mt-1">
                IT Consulting
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2 py-2 text-[18px] font-semibold transition-all duration-300 rounded relative group text-slate-900 hover:text-electric"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}
              >
                {item.name}
                <span className="absolute bottom-4 left-3 right-3 h-0.5 bg-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}

            {/* Contact Us CTA Button - Red */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 ml-4 text-[18px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] relative overflow-hidden group"
              style={{
                background: '#E60000',
                fontFamily: 'Rajdhani, sans-serif',
                borderRadius: '0px'
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <MessageSquare size={20} />
                Contact Us
              </span>
            </a>
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
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <a href="#home" className="flex items-center cursor-pointer" onClick={() => setIsOpen(false)}>
            <img
              src="/logo_final_v.png"
              alt="ERP LOKA Logo"
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col justify-center leading-none -ml-3">
              <span className="text-2xl logo-main-title">
                ERP LOKA
              </span>
              <p className="text-xs logo-sub-title mt-1">
                IT Consulting
              </p>
            </div>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded hover:bg-gray-100 transition-colors text-slate-900"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-8 px-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold py-5 border-b border-gray-200 text-slate-900 hover:text-electric transition-colors"
              style={{
                fontFamily: 'Rajdhani, sans-serif'
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-6 py-4 text-xl font-bold text-white text-center shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            style={{
              background: '#E60000',
              fontFamily: 'Rajdhani, sans-serif'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}