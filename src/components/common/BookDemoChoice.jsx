import { useState } from 'react';
import { X, FileText, ExternalLink, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoModal from './BookDemoModal';
import calendlySvg from '../../assets/calendly.svg';

export default function BookDemoChoice({ isOpen, onClose }) {
  const [showForm, setShowForm] = useState(false);

  const handleCalendlyClick = () => {
    // Open Calendly in new tab
    window.open('https://calendly.com/ssakthitselvan7/erp_loka', '_blank');
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden"
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
            <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>

            {/* Content - Scrollable if needed */}
            <div className="p-6 md:p-10 overflow-y-auto max-h-[calc(90vh-8px)]">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 font-heading">
                  Book Your <span className="text-blue-600">Demo</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
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
                  className="group relative rounded-[1.5rem] overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 text-left bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl"
                >
                  {/* Top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                  <div className="p-6">
                    {/* Calendly SVG Logo */}
                    <div className="mb-6">
                      <div className="w-full h-20 flex items-center justify-center bg-white rounded-2xl shadow-sm p-4">
                        <img
                          src={calendlySvg}
                          alt="Calendly"
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-3 font-heading flex items-center gap-2">
                      Quick Meeting
                      <ExternalLink size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-base leading-relaxed mb-6">
                      Schedule an instant meeting via Calendly. Quick and easy - pick a time that works for you.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium">15-30 minute slots available</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium">Instant confirmation</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium">Calendar sync integration</span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                      <span className="text-blue-600 font-bold text-lg">Open Calendly</span>
                      <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.button>

                {/* Option 2: Detailed Form - Similar look */}
                <motion.button
                  onClick={handleFormClick}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative rounded-[1.5rem] overflow-hidden border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 text-left bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl"
                >
                  {/* Top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

                  <div className="p-6">
                    {/* Company Logo - similar to Calendly card */}
                    <div className="mb-6">
                      <div className="w-full h-20 flex items-center justify-center bg-white rounded-2xl shadow-sm p-4">
                        <img
                          src="/logo_final_v.png"
                          alt="ERP LOKA"
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-600 mb-3 font-heading">
                      Detailed Discussion
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-base leading-relaxed mb-6">
                      Share comprehensive requirements via our detailed form. Perfect for complex projects.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-sm font-medium">Comprehensive requirements form</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-sm font-medium">Share detailed project needs</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-sm font-medium">Custom solution planning</span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-emerald-200">
                      <span className="text-emerald-600 font-bold text-lg">Fill Detailed Form</span>
                      <ArrowRight className="text-emerald-600 group-hover:translate-x-2 transition-transform" size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.button>

              </div>

              {/* Bottom note */}
              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-600 text-base">
                  Not sure which option? Start with a <span className="text-blue-600 font-bold">quick meeting</span> to discuss your needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
