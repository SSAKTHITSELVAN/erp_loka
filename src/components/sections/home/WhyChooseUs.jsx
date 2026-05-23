import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, BadgeCheck, Users, TrendingUp, Clock, Shield } from 'lucide-react';
import { companyData } from '../../../data/content';
import whyChooseBackground from '../../../assets/why_choose_background.jpg';

const iconMap = { Target, Award, BadgeCheck, Users };

// Counter animation component
function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const endValue = parseInt(value);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const stats = [
    {
      value: '100',
      suffix: '+',
      label: 'Happy Clients',
      icon: Users,
      color: 'text-electric',
      bgColor: 'from-electric/20 to-electric/5',
    },
    {
      value: '250',
      suffix: '+',
      label: 'Man Years SAP Experience',
      icon: Award,
      color: 'text-emerald-400',
      bgColor: 'from-emerald-400/20 to-emerald-400/5',
    },
    {
      value: '6',
      suffix: '+',
      label: 'Years ERP Expertise',
      icon: TrendingUp,
      color: 'text-violet-400',
      bgColor: 'from-violet-400/20 to-violet-400/5',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'Enterprise Support',
      icon: Clock,
      color: 'text-amber-400',
      bgColor: 'from-amber-400/20 to-amber-400/5',
    },
    {
      value: '1',
      suffix: 'st',
      label: 'Certified SAP VAR Partner',
      icon: BadgeCheck,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-400/20 to-cyan-400/5',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${whyChooseBackground})`,
            filter: 'brightness(0.65)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/40"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-sm md:text-base font-bold tracking-widest text-electric uppercase font-heading">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 font-heading tracking-tighter leading-tight">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">ERP LOKA</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-electric via-neon-blue to-neon-purple mx-auto mt-6 rounded-full" />
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Industry-Focused SAP Solutions with Proven Excellence
          </p>
        </motion.div>

        {/* Animated Stats Section - HIGHLIGHTED */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 h-full"
                    style={{
                      background: 'rgba(15, 23, 42, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderColor: stat.color.replace('text-', 'rgba(') + ', 0.3)',
                      boxShadow: `0 10px 40px rgba(0, 0, 0, 0.5)`,
                    }}
                  >
                    {/* Gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${stat.bgColor}`}></div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-xl blur-xl"
                            style={{
                              background: stat.color.replace('text-', '') + '40',
                            }}
                          ></div>
                          <div
                            className={`relative w-14 h-14 rounded-xl flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300`}
                            style={{
                              background: stat.color.replace('text-', 'rgba(') + ', 0.1)',
                              borderColor: stat.color.replace('text-', 'rgba(') + ', 0.4)',
                            }}
                          >
                            <Icon className={`w-7 h-7 ${stat.color}`} strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>

                      {/* Animated Number */}
                      <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2 font-heading`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2500} />
                      </div>

                      {/* Label */}
                      <p className="text-slate-300 text-sm font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Original Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];

            // Different colors for each card title
            const titleColors = [
              'text-electric', // Cyan
              'text-neon-blue', // Blue
              'text-emerald-400', // Green
              'text-neon-purple', // Purple
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden border border-electric/20 hover:border-electric/50 transition-all duration-500 hover:scale-105"
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Gradient top bar */}
                  <div className="h-1.5 bg-gradient-to-r from-electric via-neon-blue to-neon-purple"></div>

                  {/* Card Content */}
                  <div className="p-8 text-center">

                    {/* Icon with glow effect */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-electric/40 to-neon-blue/40 rounded-2xl blur-xl"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-electric/20 to-neon-blue/20 rounded-2xl flex items-center justify-center border-2 border-electric/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <Icon className="w-10 h-10 text-electric" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Title with different colors */}
                    <h4 className={`text-xl md:text-2xl font-extrabold mb-4 font-heading tracking-tight ${titleColors[index]}`}>
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-300 text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom badge with Shield icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 border-electric/40 bg-slate-900/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Shield className="w-8 h-8 text-electric" strokeWidth={2.5} />
            <p className="text-slate-200 text-base font-bold font-heading">
              <span className="text-electric">Reliable</span> • Trusted by Leading Enterprises
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
