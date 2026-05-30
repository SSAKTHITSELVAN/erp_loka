import { useState } from 'react';
import { X, Calendar, Clock, Phone, Mail, User, MapPin, FileText, CheckCircle, Briefcase, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const inputBase = {
  background: '#1A1A1A',
  border: '1px solid rgba(217,178,76,0.2)',
  color: '#F2F2F2',
  outline: 'none',
};
const inputFocusStyle = { borderColor: '#D9B24C', boxShadow: '0 0 0 2px rgba(217,178,76,0.12)' };

function Field({ label, icon: Icon, error, children }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#CFCFCF' }}>
        <Icon size={15} style={{ color: '#D9B24C' }} />
        {label}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function DarkInput({ error, style = {}, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
      className={`w-full px-4 py-3 rounded-xl text-sm placeholder-gray-600 transition-all duration-200 ${props.className || ''}`}
      style={{ ...inputBase, ...(focused ? inputFocusStyle : {}), ...(error ? { borderColor: '#f87171' } : {}), ...style }}
    />
  );
}

function DarkTextarea({ error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      onFocus={e => { setFocused(true); props.onFocus?.(e); }}
      onBlur={e => { setFocused(false); props.onBlur?.(e); }}
      className={`w-full px-4 py-3 rounded-xl text-sm placeholder-gray-600 transition-all duration-200 resize-none ${props.className || ''}`}
      style={{ ...inputBase, ...(focused ? inputFocusStyle : {}), ...(error ? { borderColor: '#f87171' } : {}) }}
    />
  );
}

export default function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '+91', companyName: '',
    designation: '', address: '', date: '', time: '',
    consideringSAP: '', requirements: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v) => /^\d{10}$/.test(v.replace('+91', '').trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Required';
    if (!formData.email.trim()) errs.email = 'Required';
    else if (!validateEmail(formData.email)) errs.email = 'Invalid email';
    if (!formData.phone.trim() || formData.phone === '+91') errs.phone = 'Required';
    else if (!validatePhone(formData.phone)) errs.phone = 'Must be 10 digits after +91';
    if (!formData.companyName.trim()) errs.companyName = 'Required';
    if (!formData.designation.trim()) errs.designation = 'Required';
    if (!formData.address.trim()) errs.address = 'Required';
    if (!formData.date) errs.date = 'Required';
    if (!formData.time) errs.time = 'Required';
    if (!formData.consideringSAP) errs.consideringSAP = 'Please select';
    if (!formData.requirements.trim()) errs.requirements = 'Required';
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      const body = new URLSearchParams({
        'entry.2005620554': formData.name,
        'entry.1045781291': formData.email,
        'entry.1065046570': formData.address,
        'entry.1166974658': formData.phone,
        'entry.2023820862': formData.designation,
        'entry.268031843': formData.companyName,
        'entry.546718960': formData.date,
        'entry.1621447213': formData.time,
        'entry.491470163': formData.consideringSAP === 'yes' ? 'Yes' : 'No',
        'entry.108957670': formData.requirements,
      });
      await fetch('https://docs.google.com/forms/u/0/d/1jIBl6zp6nclSRxZ02z0WFo0JUwsxDPh2UZ1LrlL1JKk/formResponse', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (_) {}
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '+91', companyName: '', designation: '', address: '', date: '', time: '', consideringSAP: '', requirements: '' });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-sm"
            style={{ background: 'rgba(0,0,0,0.7)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl max-h-[92vh] rounded-2xl overflow-hidden flex flex-col"
            style={{ background: '#0D0D0D', border: '1px solid rgba(217,178,76,0.2)', boxShadow: '0 0 60px rgba(217,178,76,0.12), 0 30px 80px rgba(0,0,0,0.7)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top accent bar */}
            <div className="h-1 flex-shrink-0" style={{ background: 'linear-gradient(90deg, #D9B24C, #F5D76E, #D9B24C)' }} />

            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 flex-shrink-0" style={{ borderBottom: '1px solid rgba(217,178,76,0.12)' }}>
              <div>
                <h2 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Book a <span style={{ color: '#D9B24C' }}>Demo</span>
                </h2>
                <p className="text-xs mt-0.5" style={{ color: '#888' }}>Schedule a personalized SAP demonstration</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 group"
                style={{ background: 'rgba(217,178,76,0.08)', border: '1px solid rgba(217,178,76,0.2)' }}
              >
                <X size={16} style={{ color: '#D9B24C' }} className="group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-7 py-6" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(217,178,76,0.3) transparent' }}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(217,178,76,0.1)', border: '2px solid rgba(217,178,76,0.3)' }}>
                    <CheckCircle size={40} style={{ color: '#D9B24C' }} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Demo Booked!</h3>
                  <p className="text-base" style={{ color: '#CFCFCF' }}>We'll contact you shortly to confirm your session.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <Field label="Full Name *" icon={User} error={errors.name}>
                    <DarkInput name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" error={errors.name} />
                  </Field>

                  {/* Email */}
                  <Field label="Work Email *" icon={Mail} error={errors.email}>
                    <DarkInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" error={errors.email} />
                  </Field>

                  {/* Phone */}
                  <Field label="Phone Number *" icon={Phone} error={errors.phone}>
                    <DarkInput type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" error={errors.phone} />
                  </Field>

                  {/* Company + Designation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Company Name *" icon={Building2} error={errors.companyName}>
                      <DarkInput name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company" error={errors.companyName} />
                    </Field>
                    <Field label="Designation *" icon={Briefcase} error={errors.designation}>
                      <DarkInput name="designation" value={formData.designation} onChange={handleChange} placeholder="e.g. CEO, Manager" error={errors.designation} />
                    </Field>
                  </div>

                  {/* Address */}
                  <Field label="Company Address *" icon={MapPin} error={errors.address}>
                    <DarkTextarea name="address" value={formData.address} onChange={handleChange} rows={2} placeholder="City, State, Country" error={errors.address} />
                  </Field>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Preferred Date *" icon={Calendar} error={errors.date}>
                      <DarkInput
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        error={errors.date}
                        style={{ colorScheme: 'dark' }}
                      />
                    </Field>
                    <Field label="Preferred Time *" icon={Clock} error={errors.time}>
                      <DarkInput type="time" name="time" value={formData.time} onChange={handleChange} error={errors.time} style={{ colorScheme: 'dark' }} />
                    </Field>
                  </div>

                  {/* SAP consideration */}
                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: '#CFCFCF' }}>
                      <CheckCircle size={15} style={{ color: '#D9B24C' }} />
                      Considering SAP Business One? *
                    </p>
                    <div className="flex gap-3">
                      {['yes', 'no'].map(val => (
                        <label
                          key={val}
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl cursor-pointer border transition-all duration-200 font-semibold text-sm capitalize"
                          style={
                            formData.consideringSAP === val
                              ? { background: 'rgba(217,178,76,0.15)', borderColor: '#D9B24C', color: '#F5D76E' }
                              : { background: '#1A1A1A', borderColor: 'rgba(217,178,76,0.2)', color: '#888' }
                          }
                        >
                          <input type="radio" name="consideringSAP" value={val} checked={formData.consideringSAP === val} onChange={handleChange} className="sr-only" />
                          {val === 'yes' ? '✓ Yes' : '✗ No'}
                        </label>
                      ))}
                    </div>
                    {errors.consideringSAP && <p className="text-red-400 text-xs mt-1">{errors.consideringSAP}</p>}
                  </div>

                  {/* Requirements */}
                  <Field label="Your Requirements *" icon={FileText} error={errors.requirements}>
                    <DarkTextarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your business requirements and what you'd like to see in the demo..."
                      error={errors.requirements}
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #D9B24C, #F5D76E)',
                      color: '#0A0A0A',
                      fontFamily: 'Rajdhani, sans-serif',
                      boxShadow: '0 4px 24px rgba(217,178,76,0.35)',
                    }}
                  >
                    <Calendar size={20} />
                    {isSubmitting ? 'Submitting…' : 'Book Demo Now'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
