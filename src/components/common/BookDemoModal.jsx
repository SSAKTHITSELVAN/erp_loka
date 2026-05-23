import { useState } from 'react';
import { X, Calendar, Clock, Phone, Mail, User, MapPin, FileText, CheckCircle, Briefcase, Building2 } from 'lucide-react';

export default function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91',
    companyName: '',
    designation: '',
    address: '',
    date: '',
    time: '',
    consideringSAP: '',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation (Indian format)
  const validatePhone = (phone) => {
    // Remove +91 and check if remaining is 10 digits
    const phoneNumber = phone.replace('+91', '').trim();
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim() || formData.phone === '+91') {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number (must be 10 digits after +91)';
    }

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation / Role is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.consideringSAP) newErrors.consideringSAP = 'Please select an option';
    if (!formData.requirements.trim()) newErrors.requirements = 'Requirements are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit to Google Forms
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams({
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

      // Submit to Google Forms (no-cors mode to avoid CORS issues)
      await fetch('https://docs.google.com/forms/u/0/d/1jIBl6zp6nclSRxZ02z0WFo0JUwsxDPh2UZ1LrlL1JKk/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      // Show success (no-cors means we can't check response, but form should submit)
      console.log('Demo booking submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '+91',
          companyName: '',
          designation: '',
          address: '',
          date: '',
          time: '',
          consideringSAP: '',
          requirements: '',
        });
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Still show success since no-cors doesn't return errors
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '+91',
          companyName: '',
          designation: '',
          address: '',
          date: '',
          time: '',
          consideringSAP: '',
          requirements: '',
        });
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-slideUp">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-slate-900" />
        </button>

        {isSubmitted ? (
          // Success Message
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12" style={{ color: '#16a34a' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Rajdhani, sans-serif', color: '#0f172a' }}>
              Demo Booked Successfully!
            </h2>
            <p className="text-lg" style={{ color: '#475569' }}>
              Thank you for your interest. We'll contact you shortly to confirm your demo session.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div
              className="sticky top-0 p-6 rounded-t-2xl z-10"
              style={{
                background: 'linear-gradient(to right, #0ea5e9, #0ea5e9)',
                backgroundColor: '#0ea5e9'
              }}
            >
              <h2 className="modal-header-title">
                Book a Demo
              </h2>
              <p className="modal-header-subtitle">
                Schedule a personalized SAP Business One demonstration
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <User size={16} className="text-electric" />
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Mail size={16} className="text-electric" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                  placeholder="your.email@company.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Phone size={16} className="text-electric" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                  placeholder="+91 XXXXXXXXXX"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Company Name and Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Building2 size={16} className="text-electric" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.companyName ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                    placeholder="Your company name"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>

                {/* Designation / Role */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Briefcase size={16} className="text-electric" />
                    Designation / Role *
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.designation ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                    placeholder="e.g., CEO, Manager, Director"
                  />
                  {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <MapPin size={16} className="text-electric" />
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.address ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all resize-none`}
                  placeholder="Enter your company address"
                ></textarea>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Calendar size={16} className="text-electric" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.date ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Clock size={16} className="text-electric" />
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.time ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all`}
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* SAP Consideration */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <CheckCircle size={16} className="text-electric" />
                  Are You Considering Purchasing SAP Business One Solutions / Services? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consideringSAP"
                      value="yes"
                      checked={formData.consideringSAP === 'yes'}
                      onChange={handleChange}
                      className="w-5 h-5 text-electric focus:ring-2 focus:ring-electric/20"
                    />
                    <span className="text-slate-700 font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consideringSAP"
                      value="no"
                      checked={formData.consideringSAP === 'no'}
                      onChange={handleChange}
                      className="w-5 h-5 text-electric focus:ring-2 focus:ring-electric/20"
                    />
                    <span className="text-slate-700 font-medium">No</span>
                  </label>
                </div>
                {errors.consideringSAP && <p className="text-red-500 text-sm mt-1">{errors.consideringSAP}</p>}
              </div>

              {/* Requirements */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <FileText size={16} className="text-electric" />
                  Your Requirements *
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.requirements ? 'border-red-500' : 'border-slate-300'} rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all resize-none`}
                  placeholder="Please describe your business requirements and what you'd like to see in the demo..."
                ></textarea>
                {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_50px_rgba(249,115,22,0.55)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  background: 'linear-gradient(to right, #f97316, #fb923c)',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Book Demo Now'}
              </button>

            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
