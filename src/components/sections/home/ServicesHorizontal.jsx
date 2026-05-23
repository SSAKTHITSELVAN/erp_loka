import { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Settings, TrendingUp, Lightbulb, CheckCircle2, Calendar } from 'lucide-react';
import { companyData } from '../../../data/content';
import BookDemoChoice from '../../common/BookDemoChoice';

const iconMap = {
  Headphones,
  Settings,
  TrendingUp,
  Lightbulb,
};

export default function ServicesHorizontal() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section id="services" className="relative min-h-screen py-20 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-electric uppercase font-heading">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            Comprehensive SAP solutions tailored to your business needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyData.services.map((service, index) => {
            const Icon = iconMap[service.icon];

            // Different colors for each service title
            const titleColors = [
              'text-electric',      // Card 1: Cyan (#0ea5e9)
              'text-emerald-400',   // Card 2: Green (#34d399)
              'text-violet-400',    // Card 3: Purple (#a78bfa)
              'text-amber-400',     // Card 4: Orange/Amber (#fbbf24)
            ];

            const iconColors = [
              'text-electric',      // Card 1: Cyan
              'text-emerald-400',   // Card 2: Green
              'text-violet-400',    // Card 3: Purple
              'text-amber-400',     // Card 4: Orange
            ];

            const buttonStyles = [
              { bg: 'bg-electric/10', border: 'border-electric/30', text: 'text-electric', hover: 'hover:bg-electric hover:text-slate-950' },
              { bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', text: 'text-emerald-400', hover: 'hover:bg-emerald-400 hover:text-slate-950' },
              { bg: 'bg-violet-400/10', border: 'border-violet-400/30', text: 'text-violet-400', hover: 'hover:bg-violet-400 hover:text-slate-950' },
              { bg: 'bg-amber-400/10', border: 'border-amber-400/30', text: 'text-amber-400', hover: 'hover:bg-amber-400 hover:text-slate-950' },
            ];

            const cardBorderColors = [
              'border-electric/30 hover:border-electric/60',
              'border-emerald-400/30 hover:border-emerald-400/60',
              'border-violet-400/30 hover:border-violet-400/60',
              'border-amber-400/30 hover:border-amber-400/60',
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative h-full rounded-2xl overflow-hidden border-2 ${cardBorderColors[index]} transition-all duration-300 hover:scale-[1.02]`}
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
                  }}
                >

                  {/* Gradient Bar */}
                  <div className="h-1.5 bg-gradient-to-r from-electric via-neon-blue to-neon-purple relative z-10"></div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8">

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className={`absolute inset-0 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl`}
                          style={{
                            background: index === 0 ? 'rgba(14, 165, 233, 0.3)' :
                                       index === 1 ? 'rgba(52, 211, 153, 0.3)' :
                                       index === 2 ? 'rgba(167, 139, 250, 0.3)' :
                                       'rgba(251, 191, 36, 0.3)'
                          }}
                        ></div>
                        <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110`}
                          style={{
                            background: index === 0 ? 'rgba(14, 165, 233, 0.1)' :
                                       index === 1 ? 'rgba(52, 211, 153, 0.1)' :
                                       index === 2 ? 'rgba(167, 139, 250, 0.1)' :
                                       'rgba(251, 191, 36, 0.1)',
                            borderColor: index === 0 ? 'rgba(14, 165, 233, 0.4)' :
                                        index === 1 ? 'rgba(52, 211, 153, 0.4)' :
                                        index === 2 ? 'rgba(167, 139, 250, 0.4)' :
                                        'rgba(251, 191, 36, 0.4)'
                          }}
                        >
                          <Icon className={`w-8 h-8 ${iconColors[index]}`} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Title - Different color for each card */}
                    <h3 className={`text-2xl md:text-3xl font-extrabold ${titleColors[index]} mb-3 font-heading tracking-tight`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-200">
                          <CheckCircle2 size={18} className={`${iconColors[index]} flex-shrink-0 mt-0.5`} strokeWidth={2.5} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button - Different color for each card */}
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${buttonStyles[index].bg} border ${buttonStyles[index].border} rounded-xl ${buttonStyles[index].text} font-heading font-bold ${buttonStyles[index].hover} transition-all duration-300`}
                    >
                      <Calendar size={18} />
                      Book a Demo
                    </button>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Book Demo Choice Modal */}
      <BookDemoChoice isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}
