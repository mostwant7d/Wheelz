"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, type: 'spring' },
  }),
};

const FeaturedSection = () => {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, type: 'spring' }}
      >
        <h2 className="text-3xl font-bold mb-2">Особые предложения</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          Эксклюзивные предложения для наших клиентов на премиальные автомобили
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[{
          img: "https://optim.tildacdn.com/tild3635-6165-4630-b466-346430613036/-/format/webp/91658712.jpg.webp",
          alt: "Porsche Panamera GTS Special Offer",
          label: "Специальное предложение",
          title: "Porsche Panamera GTS",
          desc: "Скидка 15% на аренду от 3-х дней. Элегантный спорткар для тех, кто ценит комфорт и динамику бизнес-класса.",
          link: "/booking?vehicleId=porsche-panamera-gts",
          btn: "Забронировать"
        }, {
          img: "https://optim.tildacdn.com/tild6334-3462-4539-b864-626261306332/-/format/webp/IMG_2512-min.JPG.webp",
          alt: "Dodge Challenger Grey Special Offer",
          label: "Премиальное предложение",
          title: "Dodge Challenger Grey",
          desc: "Яркий американский маслкар с мощным двигателем и харизматичным дизайном. Особые условия на аренду для ценителей драйва и стиля.",
          link: null,
          btn: "Подробнее"
        }].map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.025,
              boxShadow: '0 8px 32px 0 rgba(198,160,82,0.15)',
              zIndex: 2,
            }}
            className="relative h-96 overflow-hidden rounded-lg group cursor-pointer transition-all duration-300"
          >
            <Image
              src={card.img}
              alt={card.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#C6A052] font-medium mb-2 block">{card.label}</span>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.desc}</p>
                {card.link ? (
                  <Link href={card.link}>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      className="bg-[#C6A052] hover:bg-[#C6A052]/80 text-black rounded-md px-4 py-2 font-medium flex items-center gap-2 transition-colors"
                    >
                      {card.btn} <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    className="bg-[#C6A052] hover:bg-[#C6A052]/80 text-black rounded-md px-4 py-2 font-medium flex items-center gap-2 transition-colors"
                  >
                    {card.btn} <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedSection;