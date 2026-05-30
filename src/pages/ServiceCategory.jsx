import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Calendar, ChevronRight } from 'lucide-react';
import { serviceCategories } from '../data/services';
import BookDemoChoice from '../components/common/BookDemoChoice';
import { useState } from 'react';

export default function ServiceCategory() {
  const { slug } = useParams();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const category = serviceCategories.find(c => c.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#D9B24C] hover:underline">Go back home</Link>
        </div>
      </main>
    );
  }

  const item = category.items[activeItem];

  return (
    <main className="pt-16" style={{ background: '#0A0A0A' }}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.55)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.2), rgba(10,10,10,0.65))' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/#solutions" className="inline-flex items-center gap-2 text-sm mb-6 hover:gap-3 transition-all" style={{ color: '#D9B24C' }}>
              <ArrowLeft size={16} /> Back to Solutions
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {category.title}
            </h1>
            <div className="w-20 h-1 mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed max-w-4xl"
            style={{ color: '#E5E5E5', fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Tab Navigator + Content */}
      <section className="py-16" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left — Item selector tabs */}
            <div className="lg:w-[280px] flex-shrink-0">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#888888' }}>
                Service Areas
              </h3>
              <div className="flex flex-col gap-2">
                {category.items.map((it, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveItem(idx)}
                    className="flex items-center justify-between w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group"
                    style={
                      activeItem === idx
                        ? { background: 'rgba(217,178,76,0.12)', borderColor: '#D9B24C', color: '#F5D76E' }
                        : { background: 'rgba(26,26,26,0.8)', borderColor: 'rgba(217,178,76,0.12)', color: '#CFCFCF' }
                    }
                  >
                    <span className="font-semibold text-sm" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                      {it.title}
                    </span>
                    <ChevronRight
                      size={16}
                      className="transition-transform duration-200"
                      style={{ color: activeItem === idx ? '#D9B24C' : 'transparent' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Detail panel */}
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 rounded-2xl border p-8"
              style={{ background: 'rgba(16,16,16,0.9)', borderColor: 'rgba(217,178,76,0.2)' }}
            >
              <div className="h-1 w-16 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F)' }}></div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {item.title}
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#CFCFCF', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {item.description}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#888888' }}>
                What We Deliver
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.keyServices.map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                    style={{ background: 'rgba(217,178,76,0.05)', borderColor: 'rgba(217,178,76,0.15)' }}
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: '#D9B24C' }} />
                    <span className="text-sm font-medium text-white" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{svc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Ready for <span style={{ color: '#D9B24C' }}>{category.shortTitle}?</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: '#CFCFCF' }}>
              Talk to our SAP specialists and get a solution tailored for your business.
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
