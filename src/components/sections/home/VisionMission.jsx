import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Target } from 'lucide-react';
import { companyData } from '../../../data/content';

export default function VisionMission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section section-alt">
      <div className="container-custom">

        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold tracking-widest text-electric uppercase font-heading">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
            Vision &amp; <span className="gradient-text">Mission</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-neon-blue mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Vision ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-electric/20 hover:border-electric/40 transition-all duration-400 group"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-dark" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/20 flex-shrink-0">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight font-heading">
                    {companyData.vision.title}
                  </h2>
                  <p className="text-white/70 text-sm mt-0.5">{companyData.vision.subtitle}</p>
                </div>
              </div>
              <p className="text-white/85 leading-relaxed text-base">
                {companyData.vision.description}
              </p>
            </div>
          </motion.div>

          {/* ── Mission ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-400 group"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-dark to-purple-600" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/20 flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight font-heading">
                    {companyData.mission.title}
                  </h2>
                  <p className="text-white/70 text-sm mt-0.5">{companyData.mission.subtitle}</p>
                </div>
              </div>
              <p className="text-white/85 leading-relaxed text-base">
                {companyData.mission.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}