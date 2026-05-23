import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, Heart, Lightbulb, CheckCircle, Mail, Briefcase, AlertCircle } from 'lucide-react';
import { careerData } from '../data/content';
import careerBg from '../assets/carrer_page_bg.jpg';

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
      <section className="relative min-h-[70vh] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${careerBg})`,
              filter: 'brightness(0.4)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/60"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric/20 backdrop-blur-md border-2 border-electric/40 rounded-full mb-8 shadow-lg"
            >
              <Briefcase size={20} className="text-electric" />
              <span className="text-sm font-bold tracking-widest uppercase text-electric">Careers at ERP LOKA</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading tracking-tighter leading-tight">
              {careerData.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-10 max-w-3xl mx-auto">
              {careerData.description}
            </p>

            <motion.a
              href="mailto:careers@erploka.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric to-neon-blue text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
            >
              <Mail size={22} />
              Send Your Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-electric via-neon-blue to-neon-purple"></div>
      </section>

      {/* Work Environment Section */}
      <section ref={ref} className="relative py-20 bg-slate-950 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest text-electric uppercase font-heading">
              WORK WITH US
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
              {careerData.workEnvironment.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerData.workEnvironment.features.map((feature, index) => {
              const Icon = iconMap[feature.title];
              const colors = [
                { icon: 'text-electric', bg: 'from-electric/20 to-electric/10', border: 'border-electric/30', hover: 'hover:border-electric/60' },
                { icon: 'text-emerald-400', bg: 'from-emerald-400/20 to-emerald-400/10', border: 'border-emerald-400/30', hover: 'hover:border-emerald-400/60' },
                { icon: 'text-violet-400', bg: 'from-violet-400/20 to-violet-400/10', border: 'border-violet-400/30', hover: 'hover:border-violet-400/60' },
                { icon: 'text-amber-400', bg: 'from-amber-400/20 to-amber-400/10', border: 'border-amber-400/30', hover: 'hover:border-amber-400/60' },
              ];
              const color = colors[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className={`group relative rounded-2xl overflow-hidden border-2 ${color.border} ${color.hover} transition-all duration-300 hover:scale-[1.02]`}
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${color.bg}`}></div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${color.bg} rounded-xl flex items-center justify-center flex-shrink-0 border-2 ${color.border} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${color.icon}`} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-extrabold mb-3 ${color.icon} font-heading tracking-tight`}>
                          {feature.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 text-gray-150 font-heading tracking-tighter">
              Employee <span className="gradient-text">Benefits</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {careerData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                  className="flex items-center gap-4 p-5 bg-slate-950/80 backdrop-blur-md rounded-xl border-2 border-electric/30 hover:border-electric/60 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric/20 border-2 border-electric/40 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/30 transition-colors">
                    <CheckCircle size={20} className="text-electric" strokeWidth={3} />
                  </div>
                  <span className="text-slate-200 font-semibold text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 text-gray-150 font-heading tracking-tighter">
              Current <span className="gradient-text">Openings</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden border-2 border-electric/30 hover:border-electric/50 transition-all duration-300"
              style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              }}
            >
              <div className="h-2 bg-gradient-to-r from-electric via-neon-blue to-neon-purple"></div>

              <div className="p-10 md:p-14 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-electric/30 to-neon-blue/30 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-electric/50 shadow-lg">
                  <AlertCircle className="w-10 h-10 text-electric" strokeWidth={2.5} />
                </div>

                <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
                  {careerData.currentOpenings.message}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.a
                    href="mailto:careers@erploka.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric to-neon-blue text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    <Mail size={22} />
                    Email Your Resume
                  </motion.a>

                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-electric text-electric font-bold rounded-xl hover:bg-electric/10 transition-all duration-300 text-lg"
                  >
                    Back to Home
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
