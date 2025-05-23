import React from 'react';
import { services } from '@/lib/data';
import { 
  Users, CalendarClock, Star, Plane,
  ShieldCheck, MapPin, Phone, Sparkles
} from 'lucide-react';

const ServiceSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'chauffeur':
        return <Users className="h-10 w-10 text-[#C6A052]" />;
      case 'calendar':
        return <CalendarClock className="h-10 w-10 text-[#C6A052]" />;
      case 'star':
        return <Star className="h-10 w-10 text-[#C6A052]" />;
      case 'plane':
        return <Plane className="h-10 w-10 text-[#C6A052]" />;
      default:
        return <Sparkles className="h-10 w-10 text-[#C6A052]" />;
    }
  };

  return (
    <div className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Наши услуги</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          Мы предлагаем полный спектр услуг для обеспечения вашего комфорта и безопасности
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-black/50 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-[#C6A052]/30 hover:bg-black/70"
          >
            <div className="mb-4">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-black via-black/95 to-black/90 border border-white/10 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">Почему выбирают нас</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <ShieldCheck className="h-6 w-6 text-[#C6A052]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Безопасность и надежность</h4>
                  <p className="text-gray-400">
                    Все наши автомобили проходят регулярное техническое обслуживание и проверку безопасности.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1">
                  <Star className="h-6 w-6 text-[#C6A052]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Премиальное обслуживание</h4>
                  <p className="text-gray-400">
                    Индивидуальный подход к каждому клиенту и внимание к деталям - наш приоритет.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1">
                  <MapPin className="h-6 w-6 text-[#C6A052]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Удобное расположение</h4>
                  <p className="text-gray-400">
                    Наши офисы расположены в центре города, также доступна доставка автомобиля.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1">
                  <Phone className="h-6 w-6 text-[#C6A052]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Круглосуточная поддержка</h4>
                  <p className="text-gray-400">
                    Наша команда готова помочь вам 24/7 с любыми вопросами или проблемами.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] lg:min-h-0 bg-[url('https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-[#C6A052]/30 max-w-md">
                <h3 className="text-xl font-bold mb-2 text-[#C6A052]">Начните свое премиальное путешествие</h3>
                <p className="text-gray-300 mb-4">
                  Свяжитесь с нами сегодня, чтобы узнать больше о наших автомобилях и услугах. Наши консультанты помогут вам выбрать идеальный автомобиль.
                </p>
                <div className="flex flex-col items-center mt-6">
                  <a href="tel:+79349993377" className="inline-flex items-center gap-3 text-2xl font-bold text-[#C6A052] hover:text-white transition-colors duration-200">
                    <Phone className="h-7 w-7" />
                    +7 934 999 33 77
                  </a>
                  <span className="text-gray-400 text-sm mt-1">Позвонить нам</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;