import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Calendar } from 'lucide-react';
import { companyData } from '../../../data/content';

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="section bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-purple-200">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Building excellence since 2020
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {companyData.milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < companyData.milestones.length - 1 && (
                <div className="absolute left-1/2 top-24 w-0.5 h-full bg-white/20 hidden md:block"></div>
              )}

              <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year Badge */}
                <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
                    <Calendar size={20} />
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl group">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-purple-200 transition-colors">{milestone.title}</h3>
                    <ul className="space-y-3">
                      {milestone.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/90 hover:text-white transition-colors">
                          <CheckCircle size={18} className="flex-shrink-0 mt-1 text-purple-200" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
