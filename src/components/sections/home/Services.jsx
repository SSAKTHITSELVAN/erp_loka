import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, Settings, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';
import Card from '../../common/Card';
import Button from '../../common/Button';
import { companyData } from '../../../data/content';

const iconMap = {
  Headphones,
  Settings,
  TrendingUp,
  Lightbulb,
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive SAP solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle size={18} className="text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
