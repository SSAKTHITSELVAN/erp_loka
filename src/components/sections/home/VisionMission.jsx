import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Target } from 'lucide-react';
import { companyData } from '../../../data/content';
import missionVisionBg from '../../../assets/mission_vision.jpg';

export default function VisionMission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative section py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${missionVisionBg})`,
            filter: 'brightness(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-900/20 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container-custom relative z-10">

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
            className="relative rounded-2xl overflow-hidden border-2 border-electric/30 hover:border-electric/60 transition-all duration-400 group"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-electric/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-electric/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border border-electric/40 flex-shrink-0">
                  <Eye className="w-7 h-7 text-electric" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-electric tracking-tight font-heading">
                    {companyData.vision.title}
                  </h2>
                  <p className="text-cyan-300 text-sm mt-0.5 font-bold">{companyData.vision.subtitle}</p>
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
            className="relative rounded-2xl overflow-hidden border-2 border-violet-400/30 hover:border-violet-400/60 transition-all duration-400 group"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-400/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-violet-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border border-violet-400/40 flex-shrink-0">
                  <Target className="w-7 h-7 text-violet-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-violet-400 tracking-tight font-heading">
                    {companyData.mission.title}
                  </h2>
                  <p className="text-purple-300 text-sm mt-0.5 font-bold">{companyData.mission.subtitle}</p>
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