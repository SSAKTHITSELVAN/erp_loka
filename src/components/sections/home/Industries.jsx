import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Factory, ShoppingCart, Heart, Car, Truck, Landmark, Flame, Wifi, Monitor, Package, Zap, UtensilsCrossed } from 'lucide-react';
import { industriesData } from '../../../data/content';

const iconMap = {
  Factory,
  ShoppingCart,
  Heart,
  Car,
  Truck,
  Landmark,
  Flame,
  Wifi,
  Monitor,
  Package,
  Zap,
  UtensilsCrossed,
};

export default function Industries() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="industries" className="relative py-20 overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,178,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,178,76,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="px-6 relative z-10" style={{ maxWidth: "min(1700px, 92vw)", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
            INDUSTRIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Industries We <span style={{ color: '#D9B24C' }}>Serve</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }} />
          <p className="text-lg max-w-3xl mx-auto mt-6 leading-relaxed" style={{ color: '#CFCFCF' }}>
            {industriesData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industriesData.industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-xl overflow-hidden border text-center p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
                  style={{
                    background: 'rgba(26, 26, 26, 0.95)',
                    borderColor: 'rgba(217, 178, 76, 0.15)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.5)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(217, 178, 76, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.15)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
                  }}
                >
                  <div className="mb-4 flex justify-center">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'rgba(217, 178, 76, 0.1)',
                        border: '1px solid rgba(217, 178, 76, 0.25)',
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#D9B24C' }} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h4 className="text-sm font-semibold text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {industry.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
