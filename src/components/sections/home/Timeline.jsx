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
      year: 'text-amber-400',
      title: 'text-amber-400',
      icon: 'text-amber-400',
      border: 'border-amber-400/40',
      glow: 'from-amber-400/30 to-amber-400/10',
      dot: 'bg-amber-400',
    },
    {
      year: 'text-emerald-400',
      title: 'text-emerald-400',
      icon: 'text-emerald-400',
      border: 'border-emerald-400/40',
      glow: 'from-emerald-400/30 to-emerald-400/10',
      dot: 'bg-emerald-400',
    },
    {
      year: 'text-violet-400',
      title: 'text-violet-400',
      icon: 'text-violet-400',
      border: 'border-violet-400/40',
      glow: 'from-violet-400/30 to-violet-400/10',
      dot: 'bg-violet-400',
    },
  ];

  const icons = [Star, TrendingUp, Zap];

  return (
    <section id="timeline" className="relative py-16 md:py-20 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm md:text-base font-bold tracking-widest text-electric uppercase font-heading">
            OUR JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 font-heading tracking-tighter leading-tight">
            <span className="text-white">Milestones &amp; </span>
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-electric via-neon-blue to-neon-purple mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Timeline Tree Structure */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">

          {/* Animated central vertical line - draws on scroll */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-amber-400 via-emerald-400 to-violet-400 rounded-full origin-top"
              style={{ height: lineHeight }}
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
    triggerOnce: false, // Allow re-triggering for fast scroll
    threshold: 0.3, // Trigger earlier
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: 0 }} // Fast, no delay
      className={`relative ${isLast ? 'mb-0' : 'mb-8 md:mb-10'}`}
    >
      <div className={`flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

        {/* Left/Right spacing */}
        <div className={`flex-1 hidden md:block`}>
          {/* Empty space for alternating layout */}
        </div>

        {/* Center dot and year */}
        <div className="flex-shrink-0 flex flex-col items-center" style={{ width: '120px' }}>
          {/* Animated dot/circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.glow} blur-xl animate-pulse`}></div>

            {/* Main dot */}
            <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full ${colors.dot} border-4 border-slate-950 flex items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-slate-950" strokeWidth={2.5} fill={index === 0 ? "currentColor" : "none"} />
            </div>
          </motion.div>

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`mt-3 px-3 py-1.5 rounded-full border-2 ${colors.border} backdrop-blur-sm whitespace-nowrap`}
            style={{
              background: 'rgba(15, 23, 42, 0.9)',
            }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} className={colors.year} />
              <span className={`text-base md:text-lg font-bold font-heading ${colors.year}`}>
                {milestone.year}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content card */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div
              className={`relative rounded-2xl overflow-hidden border-2 ${colors.border} hover:scale-[1.02] transition-all duration-300 group`}
              style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${colors.glow}`}></div>

              {/* Card content */}
              <div className="p-5 md:p-6">

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-extrabold mb-4 font-heading tracking-tight ${colors.title}`}>
                  {milestone.title}
                </h3>

                {/* Achievements list */}
                <ul className="space-y-2.5">
                  {milestone.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.dot}/20 border-2 ${colors.border} flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                        <CheckCircle size={12} className={colors.icon} strokeWidth={3} />
                      </div>
                      <span className="text-slate-200 leading-relaxed text-sm md:text-base group-hover/item:text-white transition-colors">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>

              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
