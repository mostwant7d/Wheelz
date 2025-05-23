"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Отзывы клиентов</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          Что говорят наши клиенты о нашем сервисе и автомобилях
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute -top-10 -left-10 opacity-20">
          <Quote className="h-24 w-24 text-[#C6A052]" />
        </div>
        
        <div className="bg-black/40 border border-white/10 rounded-lg p-8 md:p-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#C6A052]/30 flex-shrink-0">
              <Image
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonials[currentIndex].rating
                        ? 'text-[#C6A052] fill-[#C6A052]'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl italic mb-4">
                &quot;{testimonials[currentIndex].comment}&quot;
              </blockquote>
              
              <div>
                <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400">{testimonials[currentIndex].position}</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="border-white/20 text-white hover:bg-[#C6A052]/10 hover:text-[#C6A052] hover:border-[#C6A052]/50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="border-white/20 text-white hover:bg-[#C6A052]/10 hover:text-[#C6A052] hover:border-[#C6A052]/50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/30 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-[#C6A052]/30">
          <div className="flex items-center mb-4">
            <div className="bg-[#C6A052]/10 rounded-full p-3 mr-4">
              <Star className="h-6 w-6 text-[#C6A052]" />
            </div>
            <div>
              <h3 className="font-bold">4.9/5</h3>
              <p className="text-sm text-gray-400">Средний рейтинг</p>
            </div>
          </div>
          <p className="text-gray-400">
            На основе более 500 отзывов наших клиентов на различных платформах
          </p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-[#C6A052]/30">
          <div className="flex items-center mb-4">
            <div className="bg-[#C6A052]/10 rounded-full p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#C6A052]"
              >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">98%</h3>
              <p className="text-sm text-gray-400">Рекомендуют нас</p>
            </div>
          </div>
          <p className="text-gray-400">
            Подавляющее большинство наших клиентов рекомендуют наш сервис друзьям и коллегам
          </p>
        </div>
        
        <div className="bg-black/30 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-[#C6A052]/30">
          <div className="flex items-center mb-4">
            <div className="bg-[#C6A052]/10 rounded-full p-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#C6A052]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">80%</h3>
              <p className="text-sm text-gray-400">Постоянных клиентов</p>
            </div>
          </div>
          <p className="text-gray-400">
            Более 80% наших клиентов возвращаются к нам снова для аренды автомобилей
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;