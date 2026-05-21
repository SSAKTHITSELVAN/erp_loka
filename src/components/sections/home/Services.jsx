import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, Settings, TrendingUp, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { companyData } from '../../../data/content';

const iconMap = {
  Headphones,
  Settings,
  TrendingUp,
  Lightbulb,
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="services" className="section section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-widest text-electric uppercase">WHAT WE OFFER</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-150 font-heading tracking-tighter">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive SAP solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {companyData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLarge = index === 0; // First card is larger

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className={`bento-card group cursor-pointer ${isLarge ? 'lg:row-span-2' : ''}`}
              >
                {/* Icon Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/30 to-neon-blue/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-electric/20 to-neon-blue/20 rounded-2xl flex items-center justify-center border border-electric/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-electric" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-slate-800/50 border border-electric/20 flex items-center justify-center group-hover:bg-electric/10 group-hover:border-electric/50 transition-all">
                    <ArrowRight size={20} className="text-electric group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-150 font-heading tracking-tight group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-300 group/item"
                      >
                        <div className="w-5 h-5 rounded-md bg-electric/10 border border-electric/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-electric/20 group-hover/item:border-electric/50 transition-all">
                          <CheckCircle size={14} className="text-electric" strokeWidth={3} />
                        </div>
                        <span className="leading-relaxed text-sm font-medium group-hover/item:text-gray-150 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/40 border border-electric/30 rounded-xl text-electric font-heading font-bold hover:bg-electric/10 hover:border-electric/60 transition-all duration-300 group"
          >
            Explore All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
