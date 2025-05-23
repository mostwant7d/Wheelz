"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sliderImages = [
  'https://optim.tildacdn.com/tild3435-3932-4365-b064-306336306539/-/format/webp/DSC01490--_.jpg.webp',
  'https://optim.tildacdn.com/tild3866-6266-4561-a632-346236376562/-/format/webp/IMG_0890-min.JPG.webp',
  'https://optim.tildacdn.com/tild6639-6634-4632-a265-303037633564/-/format/webp/IMG_7517-min.JPG.webp',
  'https://optim.tildacdn.com/tild3132-6663-4431-b138-303939306438/-/format/webp/IMG_1687-min.JPG.webp',
];

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.7, type: 'spring' },
  }),
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative h-[400px] md:h-[600px] w-full overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      {sliderImages.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={`Слайд ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          sizes="100vw"
          priority={idx === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 z-20" />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Аренда премиальных автомобилей в России
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Откройте для себя непревзойденную роскошь и комфорт с нашей коллекцией элитных автомобилей
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Link href="/booking">
                <Button size="lg" className="bg-[#C6A052] hover:bg-[#C6A052]/80 text-black">
                  Забронировать сейчас
                </Button>
              </Link>
              <Link href="/vehicles">
                <Button size="lg" variant="outline" className="border-[#C6A052] text-[#C6A052] hover:bg-[#C6A052]/10">
                  Просмотреть автопарк <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator с анимацией через Framer Motion */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, type: 'spring' }}
      >
        <span className="text-sm text-gray-300 mb-2">Прокрутите вниз</span>
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, type: 'spring' }}
        >
          <motion.span
            className="mt-1 w-1 h-2 bg-white/80 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>
        {/* Комментарий: scroll-indicator теперь плавно появляется и "прыгает" через Framer Motion, а не через animate-bounce */}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;