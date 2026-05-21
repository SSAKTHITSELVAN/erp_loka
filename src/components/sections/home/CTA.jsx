import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Sparkles, Clock, Shield, MessageCircle } from 'lucide-react';

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', sapNeed: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-electric/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 border border-electric/30 rounded-full mb-4">
            <Sparkles size={14} className="text-electric" />
            <span className="text-xs font-bold text-electric font-heading tracking-widest uppercase">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-150 font-heading tracking-tighter">
            Ready to Transform Your <span className="gradient-text">Business?</span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-electric/20 shadow-[0_0_80px_rgba(14,165,233,0.1)] overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* Left — Messaging */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Let's discuss how our SAP solutions can drive your business growth.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Clock,          text: 'Response within 2 hours' },
                    { icon: Shield,         text: 'Free initial consultation' },
                    { icon: MessageCircle,  text: 'Available 24/7' },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/25 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-electric" />
                      </div>
                      <span className="text-slate-300 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-800/40 p-8 md:p-12 border-l border-slate-700/50"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 font-heading">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-gray-150 placeholder-slate-500 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 font-heading">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-gray-150 placeholder-slate-500 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  {/* Need */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2 font-heading">
                      What do you need?
                    </label>
                    <select
                      value={formData.sapNeed}
                      onChange={(e) => setFormData({ ...formData, sapNeed: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-gray-150 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select SAP service...</option>
                      <option value="support">SAP Support &amp; AMS</option>
                      <option value="implementation">SAP Implementation</option>
                      <option value="optimization">SAP Optimization</option>
                      <option value="consulting">SAP Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-energetic to-energetic-light text-white font-heading font-bold rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_50px_rgba(249,115,22,0.55)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Schedule Free Consultation</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to receive communication from ERP LOKA
                  </p>
                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}