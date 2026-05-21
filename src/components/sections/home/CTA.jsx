import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../../common/Button';

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10"
      >
        <div className="bg-gradient-to-r from-primary via-primary-dark to-secondary rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how our SAP solutions can drive your business growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule a Consultation
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline">
              <MessageCircle size={20} />
              Chat with Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available 24/7</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div>Free Initial Consultation</div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div>Response within 2 hours</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
