import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-[#C6A052]" />
              <span className="text-lg font-bold tracking-tight">ПРЕМИУМ АВТО</span>
            </div>
            <p className="text-gray-400 mb-6">
              Сервис аренды премиальных и люксовых автомобилей. Мы предлагаем лучшие автомобили для самых требовательных клиентов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Автомобили
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Автомобили</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vehicles/luxury" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Люксовые
                </Link>
              </li>
              <li>
                <Link href="/vehicles/sport" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Спортивные
                </Link>
              </li>
              <li>
                <Link href="/vehicles/suv" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Внедорожники
                </Link>
              </li>
              <li>
                <Link href="/vehicles/sedan" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Седаны
                </Link>
              </li>
              <li>
                <Link href="/vehicles/cabriolet" className="text-gray-400 hover:text-[#C6A052] transition-colors">
                  Кабриолеты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                <span className="text-gray-400">+7 934 999 33 77</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                <span className="text-gray-400">info@premium-auto.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#C6A052] mr-2 mt-0.5" />
                <span className="text-gray-400">г. Москва, ул. Тверская, 1</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Премиум Авто. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-[#C6A052] transition-colors text-sm">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#C6A052] transition-colors text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;