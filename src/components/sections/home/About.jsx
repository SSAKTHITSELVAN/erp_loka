import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { companyData } from '../../../data/content';

// Import slide background images
import slide1Img from '../../../assets/images/about/about-slide-1-who-we-are.jpg';
import slide2Img from '../../../assets/images/about/about-slide-2-expertise.jpg';
import slide3Img from '../../../assets/images/about/about-slide-3-services.jpg';
import slide4Img from '../../../assets/images/about/about-slide-4-approach.jpg';
import slide5Img from '../../../assets/images/about/about-slide-5-mission.jpg';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = companyData.about.slides;

  // Map slide images
  const slideImages = [
    slide1Img,
    slide2Img,
    slide3Img,
    slide4Img,
    slide5Img
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Static Title */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase font-heading text-electric">
                WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-150 mt-3 font-heading tracking-tighter">
                About <span className="gradient-text">ERP LOKA</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-electric to-neon-blue mt-4 rounded-full" />
            </div>

            {/* Slideshow Progress Indicators */}
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1 h-1 rounded-full overflow-hidden bg-slate-700/50">
                    <div
                      className={`h-full bg-gradient-to-r from-electric to-neon-blue transition-all ease-linear ${
                        index === currentSlide ? 'animate-progress' : index < currentSlide ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        transitionDuration: index === currentSlide ? '5000ms' : '300ms'
                      }}
                    ></div>
                  </div>
                  <span className={`text-xs font-medium transition-colors ${
                    index === currentSlide ? 'text-electric' : 'text-slate-500'
                  }`}>
                    {slide.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Slideshow Content */}
          <div className="relative min-h-[450px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Glass Card with Background Image */}
                <div className="h-full rounded-2xl overflow-hidden relative">
                  {/* Background Image */}
                  {slideImages[currentSlide] && (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slideImages[currentSlide]})`,
                        filter: 'brightness(0.8)'
                      }}
                    />
                  )}

                  {/* Glass Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: slideImages[currentSlide]
                        ? 'rgba(0, 0, 0, 0.25)'
                        : 'rgba(15, 23, 42, 0.6)',
                      backdropFilter: 'blur(3px)',
                      border: '1px solid rgba(14, 165, 233, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}
                  />

                  {/* Gradient Top Bar */}
                  <div className="h-1 bg-gradient-to-r from-electric to-neon-blue relative z-10"></div>

                  {/* Content */}
                  <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                    {/* Slide Header */}
                    <div className="mb-6 bg-slate-900/60 backdrop-blur-sm px-5 py-4 rounded-xl border border-electric/30">
                      <div className="text-cyan-300 text-sm font-bold tracking-widest mb-2">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-electric font-heading" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.8), 0 2px 8px rgba(0, 0, 0, 0.9)' }}>
                        {slides[currentSlide].title}
                      </h3>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-4 flex-1">
                      {slides[currentSlide].points.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <CheckCircle2
                            className="w-5 h-5 text-electric flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                          />
                          <p className="text-slate-200 leading-relaxed text-base md:text-lg" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.7)' }}>
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Auto-play indicator */}
                    <div className="mt-6 pt-6 border-t border-slate-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
                        <span>Auto-playing (5s each)</span>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex gap-2">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? 'bg-electric w-8'
                                : 'bg-slate-600 hover:bg-slate-500 w-2'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}