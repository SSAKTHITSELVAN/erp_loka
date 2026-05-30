import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';
import { industriesDetailData } from '../data/industries';
import BookDemoChoice from '../components/common/BookDemoChoice';
import { useState } from 'react';

export default function IndustryDetail() {
  const { slug } = useParams();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const industry = industriesDetailData.find(i => i.slug === slug);

  if (!industry) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
          <Link to="/" className="text-[#D9B24C] hover:underline">Go back home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16" style={{ background: '#0A0A0A' }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.3)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.9))' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/#industries" className="inline-flex items-center gap-2 text-sm mb-6 hover:gap-3 transition-all" style={{ color: '#D9B24C' }}>
              <ArrowLeft size={16} /> Back to Industries
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {industry.title}
            </h1>
            <div className="w-20 h-1 mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl" style={{ color: '#E5E5E5', fontFamily: 'IBM Plex Sans, sans-serif' }}>
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Support Areas */}
      <section className="py-16" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-10 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Key Support <span style={{ color: '#D9B24C' }}>Areas</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.keyAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'rgba(26, 26, 26, 0.9)', borderColor: 'rgba(217, 178, 76, 0.15)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(217, 178, 76, 0.15)'; }}
              >
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#D9B24C' }} />
                <span className="text-base font-medium text-white" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              SAP Solutions for <span style={{ color: '#D9B24C' }}>{industry.title}</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: '#CFCFCF' }}>
              Let our experts help you optimize your operations with tailored SAP solutions.
            </p>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#D9B24C', color: '#0A0A0A', boxShadow: '0 4px 20px rgba(217,178,76,0.3)', fontFamily: 'Rajdhani, sans-serif' }}
            >
              <Calendar size={22} />
              Book a Demo
            </button>
          </motion.div>
        </div>
      </section>

      <BookDemoChoice isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
