"use client"

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="h-8 w-8 text-[#C6A052]" />,
    title: 'Телефон',
    content: '+7 (999) 123-45-67',
    link: 'tel:+79991234567',
  },
  {
    icon: <Mail className="h-8 w-8 text-[#C6A052]" />,
    title: 'Email',
    content: 'info@wheelz.ru',
    link: 'mailto:info@wheelz.ru',
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#C6A052]" />,
    title: 'Адрес',
    content: 'г. Москва, ул. Примерная, д. 123',
    link: 'https://maps.google.com',
  },
  {
    icon: <Clock className="h-8 w-8 text-[#C6A052]" />,
    title: 'Режим работы',
    content: '24/7',
    link: null,
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

export default function ContactPage() {
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
            Контакты
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-400 text-lg"
          >
            Свяжитесь с нами любым удобным способом
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.link || '#'}
              target={info.link?.startsWith('http') ? '_blank' : undefined}
              rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                {info.icon}
              </motion.div>
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="text-xl font-bold mb-2 text-[#C6A052]"
                >
                  {info.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-gray-300"
                >
                  {info.content}
                </motion.p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 