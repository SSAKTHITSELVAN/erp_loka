import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ChevronDown, Factory, ShoppingCart, Heart, Car, Truck, Landmark, Flame, Wifi, Monitor, Package, Zap, UtensilsCrossed, Lightbulb, Settings, ArrowRightLeft, Headphones } from 'lucide-react';
import { navLinks, solutionsData, industriesData } from '../../data/content';
import { servicesData } from '../../data/services';
import { industriesDetailData } from '../../data/industries';
import BookDemoChoice from '../common/BookDemoChoice';

const industryIconMap = {
  Factory, ShoppingCart, Heart, Car, Truck, Landmark,
  Flame, Wifi, Monitor, Package, Zap, UtensilsCrossed
};

const solutionIconMap = {
  Lightbulb, Settings, ArrowRightLeft, Headphones
};

const solutionTabs = {
  support: {
    label: 'SAP Support & AMS',
    useModules: true,
    categoryLink: null,
  },
  implementation: {
    label: 'SAP Implementation',
    categoryLink: '/services/category/implementation',
    items: [
      { title: 'Greenfield Implementation', link: '/services/category/implementation' },
      { title: 'Brownfield Implementation', link: '/services/category/implementation' },
      { title: 'Company Rollout', link: '/services/category/implementation' },
      { title: 'Plant Rollout', link: '/services/category/implementation' },
    ],
  },
  optimisation: {
    label: 'SAP Optimisation',
    categoryLink: '/services/category/optimisation',
    items: [
      { title: 'Performance Tuning', link: '/services/category/optimisation' },
      { title: 'Configuration Changes', link: '/services/category/optimisation' },
      { title: 'Enhancement Implementation', link: '/services/category/optimisation' },
      { title: 'System Upgrades', link: '/services/category/optimisation' },
    ],
  },
  consulting: {
    label: 'SAP Consulting',
    categoryLink: '/services/category/consulting',
    items: [
      { title: 'Business Process Analysis', link: '/services/category/consulting' },
      { title: 'Solution Architecture', link: '/services/category/consulting' },
      { title: 'Best Practice Implementation', link: '/services/category/consulting' },
      { title: 'Change Management', link: '/services/category/consulting' },
    ],
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState('support');
  const [mobileOpenSection, setMobileOpenSection] = useState(null);
  const [mobileActiveSolutionTab, setMobileActiveSolutionTab] = useState(null);
  const dropdownTimeoutRef = useRef(null);
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
    setActiveDropdown(null);

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

  const handleDropdownEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{ background: '#0A0A0A' }}>

      {/* Top Gradient Border - Gold */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, #D9B24C 0%, #F5D76E 50%, #D9B24C 100%)'
      }}></div>

      {/* Main Container - Reduced Width */}
      <div className="mx-auto px-8 py-1" style={{ maxWidth: 'min(1600px, 92vw)' }}>
        <div className="flex justify-between items-center h-16 3xl:h-20">

          {/* Logo Section */}
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
              className="w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
              style={{ height: 'clamp(5rem, 6vw, 7rem)' }}
            />
            <div className="flex flex-col justify-center -ml-2" style={{ gap: '2px' }}>
              <span className="logo-main-title transition-all duration-300 group-hover:tracking-wider" style={{ fontSize: 'clamp(1.25rem, 1.6vw, 2rem)', letterSpacing: '0.08em', display: 'block' }}>
                ERP <span style={{ color: '#D9B24C', background: 'linear-gradient(90deg, #D9B24C, #F5D76E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LOKA</span>
              </span>
              <p className="logo-sub-title transition-all duration-300 group-hover:text-[#D9B24C] group-hover:translate-x-1" style={{ fontSize: 'clamp(0.6rem, 0.7vw, 0.85rem)', letterSpacing: '0.22em', display: 'block' }}>
                LEARN. GROW. LEAD.
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((item) => {
              const isExternal = item.href.startsWith('#');
              const hasDropdown = item.dropdown;

              const linkContent = (
                <>
                  <span className="flex items-center gap-1">
                    {item.name}
                    {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </span>
                  <span className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-[#D9B24C] via-[#F5D76E] to-[#D9B24C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#D9B24C]/5 to-[#D9B24C]/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </>
              );

              const linkClasses = "px-2 py-1.5 font-semibold transition-all duration-300 rounded relative group text-white hover:text-[#D9B24C] hover:scale-110 hover:tracking-wide hover:-translate-y-0.5";
              const linkStyle = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(0.875rem, 1vw, 1.1rem)' };

              if (hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={linkClasses}
                      style={linkStyle}
                    >
                      {linkContent}
                    </a>

                    {/* Dropdown Panel */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-lg shadow-2xl overflow-hidden animate-fadeIn"
                        style={{
                          background: '#111111',
                          border: '1px solid rgba(217,178,76,0.2)',
                          minWidth: item.name === 'Solutions' ? '750px' : '600px',
                          animation: 'fadeIn 0.2s ease-out'
                        }}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {/* Gold top accent */}
                        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #D9B24C 0%, #F5D76E 50%, #D9B24C 100%)' }}></div>

                        {item.name === 'Solutions' && (
                          <div className="flex" style={{ minHeight: '320px' }}>
                            {/* Left Sidebar - Category Tabs */}
                            <div className="w-[220px] py-4 px-3 flex flex-col gap-1" style={{ borderRight: '1px solid rgba(217,178,76,0.15)', background: 'rgba(0,0,0,0.3)' }}>
                              {Object.entries(solutionTabs).map(([key, tab]) => (
                                <button
                                  key={key}
                                  onMouseEnter={() => setActiveServiceTab(key)}
                                  onClick={() => setActiveServiceTab(key)}
                                  className={`text-left px-4 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                                    activeServiceTab === key
                                      ? 'bg-[#D9B24C]/15 text-[#F5D76E] border-l-3 border-[#D9B24C]'
                                      : 'text-gray-300 hover:bg-[#D9B24C]/8 hover:text-[#D9B24C]'
                                  }`}
                                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                                >
                                  {tab.label}
                                </button>
                              ))}
                            </div>

                            {/* Right Content Area */}
                            <div className="flex-1 p-6 flex flex-col">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                  {solutionTabs[activeServiceTab].label}
                                </h4>
                                {solutionTabs[activeServiceTab].categoryLink && (
                                  <Link
                                    to={solutionTabs[activeServiceTab].categoryLink}
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-xs font-semibold flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 hover:bg-[#D9B24C]/15"
                                    style={{ color: '#D9B24C', border: '1px solid rgba(217,178,76,0.3)' }}
                                  >
                                    View All <span className="text-base leading-none">→</span>
                                  </Link>
                                )}
                              </div>

                              {activeServiceTab === 'support' ? (
                                <div className="grid grid-cols-3 gap-2">
                                  {servicesData.modules.map((module) => (
                                    <Link
                                      key={module.slug}
                                      to={`/services/${module.slug}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center gap-2 p-2.5 rounded-md hover:bg-[#D9B24C]/10 cursor-pointer transition-colors duration-200 group/item border border-transparent hover:border-[#D9B24C]/20"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(217,178,76,0.4)' }}></span>
                                      <span className="text-sm text-gray-300 group-hover/item:text-[#D9B24C] transition-colors duration-200 font-medium">
                                        {module.shortTitle}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="grid grid-cols-1 gap-2">
                                  {solutionTabs[activeServiceTab].items.map((item, idx) => (
                                    <Link
                                      key={item.title}
                                      to={item.link}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 group/item border border-transparent hover:border-[#D9B24C]/25 hover:bg-[#D9B24C]/8"
                                      style={idx < solutionTabs[activeServiceTab].items.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.05)' } : {}}
                                    >
                                      <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors duration-200 group-hover/item:text-black" style={{ background: 'rgba(217,178,76,0.12)', color: '#D9B24C' }}>
                                        {idx + 1}
                                      </span>
                                      <span className="text-sm text-gray-300 group-hover/item:text-[#D9B24C] transition-colors duration-200 font-medium">
                                        {item.title}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {item.name === 'Industries' && (
                          <div className="p-6">
                            <div className="grid grid-cols-4 gap-3">
                              {industriesDetailData.map((industry) => (
                                <Link
                                  key={industry.slug}
                                  to={`/industries/${industry.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center gap-2 p-2 rounded-md hover:bg-[#D9B24C]/10 cursor-pointer transition-colors duration-200 group/item"
                                >
                                  <span className="text-xs text-gray-300 group-hover/item:text-[#D9B24C] transition-colors duration-200 font-medium">
                                    {industry.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={linkClasses}
                  style={linkStyle}
                >
                  {linkContent}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={linkClasses}
                  style={linkStyle}
                >
                  {linkContent}
                </Link>
              );
            })}

            {/* Book a Demo CTA Button */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2 ml-3 font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] relative overflow-hidden group"
              style={{ fontSize: 'clamp(0.875rem, 1vw, 1.1rem)', background: '#DC2626', color: '#000000', fontFamily: 'Rajdhani, sans-serif', borderRadius: '0px' }}
            >
              <span className="absolute inset-0 w-full h-full bg-[#b91c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Calendar size={18} />
                Book a Demo
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded hover:bg-white/10 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 z-40 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#0A0A0A' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(217,178,76,0.2)' }}>
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              if (location.pathname === '/') {
                const heroElement = document.getElementById('home');
                if (heroElement) heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="flex items-center cursor-pointer -ml-2"
          >
            <img src="/logo_final_v.png" alt="ERP LOKA Logo" className="h-20 w-auto object-contain" />
            <div className="flex flex-col justify-center -ml-2" style={{ gap: '2px' }}>
              <span className="text-xl logo-main-title" style={{ letterSpacing: '0.08em' }}>
                ERP <span style={{ color: '#D9B24C', background: 'linear-gradient(90deg, #D9B24C, #F5D76E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LOKA</span>
              </span>
              <p className="text-[10px] logo-sub-title" style={{ letterSpacing: '0.22em' }}>
                LEARN. GROW. LEAD.
              </p>
            </div>
          </Link>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded hover:bg-white/10 transition-colors text-white" aria-label="Close menu">
            <X size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable nav links */}
        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6">
          {navLinks.map((item) => {
            const isExternal = item.href.startsWith('#');
            const hasDropdown = item.dropdown;
            const isExpanded = mobileOpenSection === item.name;

            if (hasDropdown) {
              return (
                <div key={item.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  {/* Accordion trigger */}
                  <button
                    onClick={() => setMobileOpenSection(isExpanded ? null : item.name)}
                    className="w-full flex items-center justify-between py-4 text-left"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <span className="text-xl font-bold" style={{ color: isExpanded ? '#D9B24C' : '#FFFFFF' }}>
                      {item.name}
                    </span>
                    <ChevronDown
                      size={18}
                      className="transition-transform duration-300 flex-shrink-0"
                      style={{ color: '#D9B24C', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>

                  {/* Accordion content */}
                  {isExpanded && (
                    <div className="pb-4 pl-2">
                      {item.name === 'Solutions' && (
                        <div className="space-y-2">
                          {Object.entries(solutionTabs).map(([key, tab]) => {
                            const tabExpanded = mobileActiveSolutionTab === key;
                            return (
                              <div key={key} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(217,178,76,0.15)' }}>
                                <button
                                  onClick={() => setMobileActiveSolutionTab(tabExpanded ? null : key)}
                                  className="w-full flex items-center justify-between px-4 py-3"
                                  style={{ background: tabExpanded ? 'rgba(217,178,76,0.1)' : 'rgba(26,26,26,0.8)' }}
                                >
                                  <span className="text-sm font-semibold" style={{ color: tabExpanded ? '#F5D76E' : '#CFCFCF', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                                    {tab.label}
                                  </span>
                                  <ChevronDown
                                    size={14}
                                    className="transition-transform duration-200 flex-shrink-0"
                                    style={{ color: '#D9B24C', transform: tabExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                  />
                                </button>
                                {tabExpanded && (
                                  <div className="px-3 py-2 space-y-1" style={{ background: 'rgba(10,10,10,0.8)' }}>
                                    {key === 'support' ? (
                                      servicesData.modules.map((module) => (
                                        <Link
                                          key={module.slug}
                                          to={`/services/${module.slug}`}
                                          onClick={() => { setIsOpen(false); setMobileOpenSection(null); setMobileActiveSolutionTab(null); }}
                                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                                          style={{ color: '#CFCFCF' }}
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#D9B24C' }}></span>
                                          <span className="text-sm font-medium">{module.shortTitle}</span>
                                        </Link>
                                      ))
                                    ) : (
                                      <>
                                        {tab.items.map((subItem, idx) => (
                                          <Link
                                            key={idx}
                                            to={subItem.link}
                                            onClick={() => { setIsOpen(false); setMobileOpenSection(null); setMobileActiveSolutionTab(null); }}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg"
                                            style={{ color: '#CFCFCF' }}
                                          >
                                            <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-[10px] font-bold" style={{ background: 'rgba(217,178,76,0.15)', color: '#D9B24C' }}>
                                              {idx + 1}
                                            </span>
                                            <span className="text-sm font-medium">{subItem.title}</span>
                                          </Link>
                                        ))}
                                        <Link
                                          to={tab.categoryLink}
                                          onClick={() => { setIsOpen(false); setMobileOpenSection(null); setMobileActiveSolutionTab(null); }}
                                          className="flex items-center gap-1 px-3 py-2 text-xs font-semibold"
                                          style={{ color: '#D9B24C' }}
                                        >
                                          View all → {tab.label}
                                        </Link>
                                      </>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {item.name === 'Industries' && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {industriesDetailData.map((industry) => (
                            <Link
                              key={industry.slug}
                              to={`/industries/${industry.slug}`}
                              onClick={() => { setIsOpen(false); setMobileOpenSection(null); }}
                              className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
                              style={{ background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(217,178,76,0.12)', color: '#CFCFCF' }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#D9B24C' }}></span>
                              <span className="text-xs font-medium leading-tight">{industry.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center py-4 text-xl font-bold text-white hover:text-[#D9B24C] transition-colors duration-200"
                style={{ fontFamily: 'Rajdhani, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center py-4 text-xl font-bold text-white hover:text-[#D9B24C] transition-colors duration-200"
                style={{ fontFamily: 'Rajdhani, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex-shrink-0 px-5 pb-8">
          <button
            onClick={() => { setIsOpen(false); setIsDemoModalOpen(true); }}
            className="w-full py-4 text-xl font-bold text-center"
            style={{ background: '#DC2626', color: '#000000', fontFamily: 'Rajdhani, sans-serif', borderRadius: '12px', boxShadow: '0 4px 20px rgba(220,38,38,0.35)' }}
          >
            Book a Demo
          </button>
        </div>
      </div>

      {/* Book Demo Choice Modal */}
      <BookDemoChoice isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </nav>
  );
}
