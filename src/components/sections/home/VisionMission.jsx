import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Target } from 'lucide-react';
import Card from '../../common/Card';
import { companyData } from '../../../data/content';

export default function VisionMission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-primary to-primary-dark text-white" hover={false}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{companyData.vision.title}</h2>
                  <p className="text-white/80">{companyData.vision.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                {companyData.vision.description}
              </p>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-secondary to-purple-600 text-white" hover={false}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{companyData.mission.title}</h2>
                  <p className="text-white/80">{companyData.mission.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                {companyData.mission.description}
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
