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
      color: '#D9B24C',
    },
    {
      value: '250',
      suffix: '+',
      label: 'Man Years SAP Experience',
      icon: Award,
      color: '#E0B84F',
    },
    {
      value: '6',
      suffix: '+',
      label: 'Years ERP Expertise',
      icon: TrendingUp,
      color: '#D9B24C',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'Enterprise Support',
      icon: Clock,
      color: '#E0B84F',
    },
    {
      value: '1',
      suffix: 'st',
      label: 'Certified SAP VAR Partner',
      icon: BadgeCheck,
      color: '#D9B24C',
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
            filter: 'brightness(0.5)',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.6), rgba(10,10,10,0.5))' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,178,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,178,76,0.03)_1px,transparent_1px)] bg-[size:100px_100px] z-0"></div>

      <div className="w-full px-6 relative z-10" style={{ maxWidth: "min(1700px, 92vw)", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-sm md:text-base font-bold tracking-widest uppercase" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 tracking-tighter leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <span className="text-white">Why Choose </span>
            <span style={{ color: '#D9B24C' }}>ERP LOKA</span>
          </h2>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }} />
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed" style={{ color: '#CFCFCF' }}>
            Industry-Focused SAP Solutions with Proven Excellence
          </p>
        </motion.div>

        {/* Animated Stats Section */}
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
                      background: 'rgba(17, 17, 17, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderColor: 'rgba(217, 178, 76, 0.2)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.2)'; }}
                  >
                    <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }}></div>

                    <div className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: 'rgba(217, 178, 76, 0.1)',
                            borderColor: 'rgba(217, 178, 76, 0.3)',
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: stat.color }} strokeWidth={2.5} />
                        </div>
                      </div>

                      <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: stat.color, fontFamily: 'Rajdhani, sans-serif' }}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2500} />
                      </div>

                      <p className="text-sm font-medium leading-tight" style={{ color: '#CFCFCF' }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-105"
                  style={{
                    background: 'rgba(17, 17, 17, 0.85)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    borderColor: 'rgba(217, 178, 76, 0.2)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.2)'; }}
                >
                  <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }}></div>

                  <div className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                        style={{
                          background: 'rgba(217, 178, 76, 0.1)',
                          borderColor: 'rgba(217, 178, 76, 0.3)',
                        }}
                      >
                        <Icon className="w-10 h-10" style={{ color: '#D9B24C' }} strokeWidth={2.5} />
                      </div>
                    </div>

                    <h4 className="text-xl md:text-2xl font-extrabold mb-4 tracking-tight" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
                      {item.title}
                    </h4>

                    <p className="text-base leading-relaxed" style={{ color: '#CFCFCF' }}>
                      {item.description}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            style={{ borderColor: 'rgba(217, 178, 76, 0.4)', background: 'rgba(17, 17, 17, 0.6)' }}
          >
            <Shield className="w-8 h-8" style={{ color: '#D9B24C' }} strokeWidth={2.5} />
            <p className="text-white text-base font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <span style={{ color: '#D9B24C' }}>Reliable</span> • Trusted by Leading Enterprises
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
