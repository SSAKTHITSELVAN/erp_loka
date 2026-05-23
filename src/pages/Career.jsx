import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, Heart, Lightbulb, CheckCircle, Mail, Briefcase, AlertCircle } from 'lucide-react';
import { careerData } from '../data/content';

const iconMap = {
  'Collaborative Culture': Users,
  'Growth Opportunities': TrendingUp,
  'Work-Life Balance': Heart,
  'Innovative Projects': Lightbulb,
};

export default function Career() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-secondary text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Briefcase size={20} />
              <span className="text-sm font-bold tracking-widest uppercase">Careers at ERP LOKA</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {careerData.title}
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {careerData.description}
            </p>

            <a
              href="mailto:careers@erploka.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Mail size={20} />
              Send Your Resume
            </a>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 50%, #f97316 100%)'
          }}
        ></div>
      </section>

      {/* Work Environment Section */}
      <section ref={ref} className="section section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest text-electric uppercase font-heading">
              WORK WITH US
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
              {careerData.workEnvironment.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerData.workEnvironment.features.map((feature, index) => {
              const Icon = iconMap[feature.title];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bento-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric/20 to-neon-blue/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-electric/25 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-150 font-heading">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-slate-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-150 font-heading">
              Employee <span className="gradient-text">Benefits</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-electric/20 hover:border-electric/40 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-electric/10 border border-electric/25 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors">
                    <CheckCircle size={16} className="text-electric" strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="section section-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-150 font-heading">
              Current <span className="gradient-text">Openings</span>
            </h2>

            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-electric/20 p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-electric/30">
                <AlertCircle className="w-8 h-8 text-electric" />
              </div>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {careerData.currentOpenings.message}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@erploka.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-energetic to-energetic-light text-white font-bold rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_50px_rgba(249,115,22,0.55)] hover:scale-105 transition-all duration-300"
                >
                  <Mail size={20} />
                  Email Your Resume
                </a>

                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-electric text-electric font-bold rounded-xl hover:bg-electric/10 transition-all duration-300"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
