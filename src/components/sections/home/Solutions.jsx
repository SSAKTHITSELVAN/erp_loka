import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Settings, ArrowRightLeft, Headphones } from 'lucide-react';
import { solutionsData } from '../../../data/content';

const iconMap = {
  Lightbulb,
  Settings,
  ArrowRightLeft,
  Headphones,
};

export default function Solutions() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="solutions" className="relative py-20 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,178,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,178,76,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="px-6 relative z-10" style={{ maxWidth: "min(1700px, 92vw)", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {solutionsData.title}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }} />
          <p className="text-lg max-w-3xl mx-auto mt-6 leading-relaxed" style={{ color: '#CFCFCF' }}>
            {solutionsData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionsData.categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(17, 17, 17, 0.95)',
                    borderColor: 'rgba(217, 178, 76, 0.2)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.2)'; }}
                >
                  <div className="h-1" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F, #D9B24C)' }}></div>

                  <div className="p-6">
                    <div className="mb-5">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: 'rgba(217, 178, 76, 0.1)',
                          borderColor: 'rgba(217, 178, 76, 0.3)',
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: '#D9B24C' }} strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 tracking-tight" style={{ color: '#D9B24C', fontFamily: 'Rajdhani, sans-serif' }}>
                      {category.title}
                    </h3>

                    <div className="relative pl-4">
                      <div className="absolute left-1 top-0 bottom-0 w-px" style={{ background: 'rgba(217, 178, 76, 0.3)' }}></div>

                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 relative">
                            <div className="absolute -left-4 top-2.5 w-3 h-px" style={{ background: 'rgba(217, 178, 76, 0.4)' }}></div>
                            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#D9B24C' }}></div>
                            <span className="text-sm leading-relaxed" style={{ color: '#E5E5E5' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
