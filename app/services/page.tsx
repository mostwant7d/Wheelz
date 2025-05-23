"use client"

import { services } from '@/lib/data';
import { Car, Calendar, Star, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, JSX.Element> = {
  chauffeur: <Car className="h-8 w-8 text-[#C6A052]" />,
  calendar: <Calendar className="h-8 w-8 text-[#C6A052]" />,
  star: <Star className="h-8 w-8 text-[#C6A052]" />,
  plane: <Plane className="h-8 w-8 text-[#C6A052]" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, type: 'spring' },
  }),
};

export default function ServicesPage() {
  return (
    <motion.section
      className="pt-24 pb-16"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, type: 'spring' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Наши услуги
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-400 mb-10 text-lg"
        >
          Мы предлагаем полный спектр премиальных услуг для вашего комфорта и уверенности на дороге. Выберите подходящий сервис и наслаждайтесь поездкой без забот!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.035,
                boxShadow: '0 8px 32px 0 rgba(198,160,82,0.15)',
                zIndex: 2,
              }}
              className="bg-black/70 border border-[#C6A052]/30 rounded-lg p-6 flex items-start gap-4 cursor-pointer transition-all duration-300"
            >
              <div>{iconMap[service.icon]}</div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-[#C6A052]">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
} 