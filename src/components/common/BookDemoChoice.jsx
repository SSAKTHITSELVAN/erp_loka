import { useState } from 'react';
import { X, FileText, ExternalLink, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoModal from './BookDemoModal';
import calendlySvg from '../../assets/calendly.svg';

export default function BookDemoChoice({ isOpen, onClose }) {
  const [showForm, setShowForm] = useState(false);

  const handleCalendlyClick = () => {
    // Open Calendly in new tab
    window.open('https://calendly.com/venkateshmech8960/30min', '_blank');
    onClose(); // Close the choice modal
  };

  const handleFormClick = () => {
    setShowForm(true); // Show the detailed form
  };

  const handleFormClose = () => {
    setShowForm(false);
    onClose(); // Close everything
  };

  if (!isOpen) return null;

  // If form is selected, show the form modal instead
  if (showForm) {
    return <BookDemoModal isOpen={true} onClose={handleFormClose} />;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop - lighter with less blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal - Light theme with rounder corners, max height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#111111' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Professional size */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 shadow-lg group"
              aria-label="Close"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
            </button>

            {/* Gradient top bar */}
            <div className="h-2" style={{ background: 'linear-gradient(to right, #D9B24C, #E0B84F)' }}></div>

            {/* Content - Scrollable if needed */}
            <div className="p-6 md:p-10 overflow-y-auto max-h-[calc(90vh-8px)]">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 font-heading">
                  Book Your <span style={{ color: '#D9B24C' }}>Demo</span>
                </h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#CFCFCF' }}>
                  Choose your preferred way to connect with us
                </p>
              </div>

              {/* Options - Both cards look similar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {/* Option 1: Calendly */}
                <motion.button
                  onClick={handleCalendlyClick}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative rounded-[1.5rem] overflow-hidden border-2 transition-all duration-300 text-left hover:shadow-xl"
                  style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(217,178,76,0.3)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D9B24C'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(217,178,76,0.3)'}
                >
                  {/* Top accent */}
                  <div className="h-1.5" style={{ background: 'linear-gradient(to right, #D9B24C, #E0B84F)' }}></div>

                  <div className="p-6">
                    {/* Calendly SVG Logo */}
                    <div className="mb-6">
                      <div className="w-full h-20 flex items-center justify-center rounded-2xl shadow-sm p-4" style={{ backgroundColor: '#222222' }}>
                        <img
                          src={calendlySvg}
                          alt="Calendly"
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-3 font-heading flex items-center gap-2" style={{ color: '#D9B24C' }}>
                      Quick Meeting
                      <ExternalLink size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed mb-6" style={{ color: '#CFCFCF' }}>
                      Schedule an instant meeting via Calendly. Quick and easy - pick a time that works for you.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3" style={{ color: '#CFCFCF' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,178,76,0.15)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9B24C' }}></div>
                        </div>
                        <span className="text-sm font-medium">15-30 minute slots available</span>
                      </li>
                      <li className="flex items-center gap-3" style={{ color: '#CFCFCF' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,178,76,0.15)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9B24C' }}></div>
                        </div>
                        <span className="text-sm font-medium">Instant confirmation</span>
                      </li>
                      <li className="flex items-center gap-3" style={{ color: '#CFCFCF' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,178,76,0.15)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9B24C' }}></div>
                        </div>
                        <span className="text-sm font-medium">Calendar sync integration</span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(217,178,76,0.3)' }}>
                      <span className="font-bold text-lg" style={{ color: '#D9B24C' }}>Open Calendly</span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" style={{ color: '#D9B24C' }} size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.button>

                {/* Option 2: Detailed Form - Similar look */}
                <motion.button
                  onClick={handleFormClick}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative rounded-[1.5rem] overflow-hidden border-2 transition-all duration-300 text-left hover:shadow-xl"
                  style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(217,178,76,0.3)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D9B24C'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(217,178,76,0.3)'}
                >
                  {/* Top accent */}
                  <div className="h-1.5" style={{ background: 'linear-gradient(to right, #D9B24C, #E0B84F)' }}></div>

                  <div className="p-6">
                    {/* Company Logo - similar to Calendly card */}
                    <div className="mb-6">
                      <div className="w-full h-20 flex items-center justify-center rounded-2xl shadow-sm p-4" style={{ backgroundColor: '#222222' }}>
                        <img
                          src="/logo_final_v.png"
                          alt="ERP LOKA"
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-3 font-heading" style={{ color: '#D9B24C' }}>
                      Detailed Discussion
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed mb-6" style={{ color: '#CFCFCF' }}>
                      Share comprehensive requirements via our detailed form. Perfect for complex projects.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3" style={{ color: '#CFCFCF' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,178,76,0.15)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9B24C' }}></div>
                        </div>
                        <span className="text-sm font-medium">Comprehensive requirements form</span>
                      </li>
                      <li className="flex items-center gap-3" style={{ color: '#CFCFCF' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,178,76,0.15)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9B24C' }}></div>
                        </div>
                        <span className="text-sm font-medium">Share detailed project needs</span>
                      </li>
                      <li className="flex items-center gap-3" style={{ color: '#CFCFCF' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,178,76,0.15)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9B24C' }}></div>
                        </div>
                        <span className="text-sm font-medium">Custom solution planning</span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(217,178,76,0.3)' }}>
                      <span className="font-bold text-lg" style={{ color: '#D9B24C' }}>Fill Detailed Form</span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" style={{ color: '#D9B24C' }} size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.button>

              </div>

              {/* Bottom note */}
              <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-base" style={{ color: '#999999' }}>
                  Not sure which option? Start with a <span className="font-bold" style={{ color: '#D9B24C' }}>quick meeting</span> to discuss your needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
