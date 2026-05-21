import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, BadgeCheck, Users } from 'lucide-react';
import Card from '../../common/Card';
import { companyData } from '../../../data/content';

const iconMap = {
  Target,
  Award,
  BadgeCheck,
  Users,
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">ERP LOKA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At ERPLOKA IT consulting, we are dedicated to delivering reliable and efficient SAP
              support and Application Management Services (AMS) that help businesses optimize their
              operations and achieve long-term success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a team of experienced SAP professionals, we provide comprehensive support
              solutions tailored to meet the unique requirements of organizations across various
              industries. Our expertise covers multiple SAP modules, enabling us to support critical
              business functions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Customer satisfaction, service quality, and quick response time are at the core of our
              approach. We believe in building strong long-term partnerships by providing dependable
              support and continuous improvement services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-primary to-secondary p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  {[
                    'Seamless SAP Operations',
                    'Innovative Solutions',
                    'Trusted Support',
                    'Drive Productivity & Efficiency',
                    'Business Growth Focus',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">ERP LOKA</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
