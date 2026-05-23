import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, BadgeCheck, Users } from 'lucide-react';
import { companyData } from '../../../data/content';

const iconMap = { Target, Award, BadgeCheck, Users };

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section section-alt">
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
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
            About <span className="gradient-text">ERP LOKA</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Two-col intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              'At ERPLOKA IT consulting, we are dedicated to delivering reliable and efficient SAP support and Application Management Services (AMS) that help businesses optimize their operations and achieve long-term success.',
              'With a team of experienced SAP professionals, we provide comprehensive support solutions tailored to meet the unique requirements of organizations across various industries. Our expertise covers multiple SAP modules, enabling us to support critical business functions.',
              'Customer satisfaction, service quality, and quick response time are at the core of our approach. We believe in building strong long-term partnerships by providing dependable support and continuous improvement services.',
            ].map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right — commitment card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/30">
              <div className="bg-gradient-to-br from-primary via-primary-dark to-secondary p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 tracking-tight font-heading">Our Commitment</h3>
                  <ul className="space-y-4">
                    {[
                      'Seamless SAP Operations',
                      'Innovative Solutions',
                      'Trusted Support',
                      'Drive Productivity & Efficiency',
                      'Business Growth Focus',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 font-heading tracking-tight text-gray-150">
            Why Choose <span className="gradient-text">ERP LOKA</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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
        </motion.div>

      </div>
    </section>
  );
}