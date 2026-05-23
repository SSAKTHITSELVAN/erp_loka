import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, BadgeCheck, Users } from 'lucide-react';
import { companyData } from '../../../data/content';

const iconMap = { Target, Award, BadgeCheck, Users };

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" className="section section-alt">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-electric uppercase font-heading">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
            Why Choose <span className="gradient-text">ERP LOKA</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bento-card text-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-electric/20 to-neon-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-electric/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-electric" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-150 font-heading">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
