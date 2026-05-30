import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Calendar, Star, TrendingUp, Zap } from 'lucide-react';
import { companyData } from '../../../data/content';

export default function Timeline() {
  const containerRef = useRef(null);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Track scroll progress through timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Different colors for each milestone
  const milestoneColors = [
    {
      year: '#D9B24C',
      title: '#D9B24C',
      icon: '#D9B24C',
      border: 'rgba(217, 178, 76, 0.4)',
      glow: 'rgba(217, 178, 76, 0.15)',
      dot: '#D9B24C',
    },
    {
      year: '#E0B84F',
      title: '#E0B84F',
      icon: '#E0B84F',
      border: 'rgba(224, 184, 79, 0.4)',
      glow: 'rgba(224, 184, 79, 0.15)',
      dot: '#E0B84F',
    },
    {
      year: '#F5D675',
      title: '#F5D675',
      icon: '#F5D675',
      border: 'rgba(245, 214, 117, 0.4)',
      glow: 'rgba(245, 214, 117, 0.15)',
      dot: '#F5D675',
    },
  ];

  const icons = [Star, TrendingUp, Zap];

  return (
    <section id="timeline" className="relative py-16 md:py-20 overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A0A0A, #111111, #0A0A0A)' }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,178,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,178,76,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="px-6 relative z-10" style={{ maxWidth: 'min(1700px, 92vw)', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm md:text-base font-bold tracking-widest uppercase" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
            OUR JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 tracking-tighter leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <span className="text-white">Milestones &amp; </span>
            <span style={{ color: '#D9B24C' }}>Achievements</span>
          </h2>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }} />
        </motion.div>

        {/* Timeline Tree Structure */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">

          {/* Animated central vertical line - draws on scroll */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full rounded-full origin-top"
              style={{ height: lineHeight, background: 'linear-gradient(to bottom, #D9B24C, #E0B84F, #F5D675)' }}
            />
          </div>

          {companyData.milestones.map((milestone, index) => {
            const colors = milestoneColors[index];
            const Icon = icons[index];
            const isLeft = index % 2 === 0;

            return (
              <TimelineItem
                key={index}
                milestone={milestone}
                index={index}
                colors={colors}
                Icon={Icon}
                isLeft={isLeft}
                isLast={index === companyData.milestones.length - 1}
              />
            );
          })}

        </div>

      </div>
    </section>
  );
}

// Individual Timeline Item Component
function TimelineItem({ milestone, index, colors, Icon, isLeft, isLast }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: 0 }}
      className={`relative ${isLast ? 'mb-0' : 'mb-8 md:mb-10'}`}
    >
      <div className={`flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

        <div className="flex-1 hidden md:block"></div>

        <div className="flex-shrink-0 flex flex-col items-center" style={{ width: '120px' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="absolute inset-0 rounded-full blur-xl animate-pulse" style={{ background: colors.glow }}></div>
            <div
              className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: colors.dot, borderColor: '#0A0A0A' }}
            >
              <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: '#0A0A0A' }} strokeWidth={2.5} fill={index === 0 ? "currentColor" : "none"} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-3 px-3 py-1.5 rounded-full border-2 backdrop-blur-sm whitespace-nowrap"
            style={{ background: 'rgba(17, 17, 17, 0.9)', borderColor: colors.border }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} style={{ color: colors.year }} />
              <span className="text-base md:text-lg font-bold" style={{ color: colors.year, fontFamily: 'Rajdhani, sans-serif' }}>
                {milestone.year}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden border-2 hover:scale-[1.02] transition-all duration-300 group"
              style={{
                background: 'rgba(17, 17, 17, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
                borderColor: colors.border,
              }}
            >
              <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${colors.dot}, ${colors.dot}80)` }}></div>

              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 tracking-tight" style={{ color: colors.title, fontFamily: 'Rajdhani, sans-serif' }}>
                  {milestone.title}
                </h3>

                <ul className="space-y-2.5">
                  {milestone.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform"
                        style={{ borderColor: colors.border, background: `${colors.dot}20` }}
                      >
                        <CheckCircle size={12} style={{ color: colors.icon }} strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed text-sm md:text-base group-hover/item:text-white transition-colors" style={{ color: '#E5E5E5' }}>
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `linear-gradient(135deg, ${colors.glow}, transparent)` }}></div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
