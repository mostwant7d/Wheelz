"use client"

import { motion } from 'framer-motion';
import { Shield, Clock, Star, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-[#C6A052]" />,
    title: 'Безопасность',
    description: 'Все наши автомобили проходят регулярное техническое обслуживание и соответствуют самым высоким стандартам безопасности.',
  },
  {
    icon: <Clock className="h-8 w-8 text-[#C6A052]" />,
    title: 'Пунктуальность',
    description: 'Мы ценим ваше время и гарантируем своевременное прибытие водителя в указанное место.',
  },
  {
    icon: <Star className="h-8 w-8 text-[#C6A052]" />,
    title: 'Качество',
    description: 'Премиальный сервис и индивидуальный подход к каждому клиенту.',
  },
  {
    icon: <Users className="h-8 w-8 text-[#C6A052]" />,
    title: 'Опыт',
    description: 'Наши водители имеют многолетний опыт работы и отличное знание города.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
    },
  },
};

export default function AboutPage() {
  return (
    <motion.section
      className="pt-24 pb-16"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            О нас
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-400 text-lg"
          >
            Мы предоставляем премиальные услуги по аренде автомобилей с водителем в Москве
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.035,
                boxShadow: '0 8px 32px 0 rgba(198,160,82,0.15)',
                zIndex: 2,
              }}
              className="bg-black/70 border border-[#C6A052]/30 rounded-lg p-6 flex items-start gap-4 cursor-pointer transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="text-xl font-bold mb-2 text-[#C6A052]"
                >
                  {feature.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-gray-300"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 