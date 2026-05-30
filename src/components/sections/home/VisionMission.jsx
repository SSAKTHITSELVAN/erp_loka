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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(17,17,17,0.3), rgba(10,10,10,0.4))' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,178,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,178,76,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
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
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tighter" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Vision &amp; <span style={{ color: '#D9B24C' }}>Mission</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Vision ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border-2 transition-all duration-400 group"
            style={{ borderColor: 'rgba(217, 178, 76, 0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.3)'; }}
          >
            <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(17, 17, 17, 0.9)' }} />
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl" style={{ background: 'rgba(217, 178, 76, 0.08)' }} />

            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border flex-shrink-0"
                  style={{ background: 'rgba(217, 178, 76, 0.15)', borderColor: 'rgba(217, 178, 76, 0.4)' }}
                >
                  <Eye className="w-7 h-7" style={{ color: '#D9B24C' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
                    {companyData.vision.title}
                  </h2>
                  <p className="text-sm mt-0.5 font-bold" style={{ color: '#E0B84F' }}>{companyData.vision.subtitle}</p>
                </div>
              </div>
              <p className="leading-relaxed text-base" style={{ color: '#E5E5E5' }}>
                {companyData.vision.description}
              </p>
            </div>
          </motion.div>

          {/* ── Mission ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border-2 transition-all duration-400 group"
            style={{ borderColor: 'rgba(217, 178, 76, 0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.3)'; }}
          >
            <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(17, 17, 17, 0.9)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl" style={{ background: 'rgba(217, 178, 76, 0.08)' }} />

            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg border flex-shrink-0"
                  style={{ background: 'rgba(217, 178, 76, 0.15)', borderColor: 'rgba(217, 178, 76, 0.4)' }}
                >
                  <Target className="w-7 h-7" style={{ color: '#D9B24C' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
                    {companyData.mission.title}
                  </h2>
                  <p className="text-sm mt-0.5 font-bold" style={{ color: '#E0B84F' }}>{companyData.mission.subtitle}</p>
                </div>
              </div>
              <p className="leading-relaxed text-base" style={{ color: '#E5E5E5' }}>
                {companyData.mission.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}