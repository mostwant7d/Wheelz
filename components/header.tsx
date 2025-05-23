"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Car, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { supabase } from '@/lib/supabaseClient';
import LoginModal from '@/components/login-modal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-[#C6A052]" />
            <span className="text-xl font-bold tracking-tight">AZAMDJANCARS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#C6A052] transition-colors">
              Главная
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-[#C6A052] transition-colors flex items-center gap-1">
                Автомобили <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 backdrop-blur-md border border-[#C6A052]/30">
                <DropdownMenuItem className="text-white hover:text-[#C6A052] focus:text-[#C6A052] cursor-pointer">
                  <Link href="/vehicles/luxury" className="w-full">Люксовые</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-[#C6A052] focus:text-[#C6A052] cursor-pointer">
                  <Link href="/vehicles/sport" className="w-full">Спортивные</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:text-[#C6A052] focus:text-[#C6A052] cursor-pointer">
                  <Link href="/vehicles/suv" className="w-full">Внедорожники</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/services" className="text-white hover:text-[#C6A052] transition-colors">
              Услуги
            </Link>
            <Link href="/about" className="text-white hover:text-[#C6A052] transition-colors">
              О нас
            </Link>
            <Link href="/contact" className="text-white hover:text-[#C6A052] transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-white font-medium mr-2">{user.email}</span>
                <Button variant="ghost" className="text-white hover:text-[#C6A052]" onClick={handleLogout}>
                  Выйти
                </Button>
              </>
            ) : (
              <Button variant="ghost" className="text-white hover:text-[#C6A052]" onClick={() => setShowLoginModal(true)}>
                <User className="h-5 w-5 mr-2" />
                Войти
              </Button>
            )}
            <Link href="/booking">
              <Button className="bg-[#C6A052] hover:bg-[#C6A052]/80 text-black">
                Забронировать
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Off-canvas Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Затемнение фона */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Боковое меню */}
              <motion.aside
                key="sidebar"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                className="fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-black/95 border-l border-[#C6A052]/30 shadow-2xl flex flex-col p-6"
              >
                {/* Кнопка закрытия */}
                <button
                  className="absolute top-4 right-4 text-white hover:text-[#C6A052] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Закрыть меню"
                >
                  <X className="h-7 w-7" />
                </button>
                {/* Навигация */}
                <nav className="flex flex-col space-y-6 mt-12">
                  <Link href="/" className="text-white text-lg font-medium hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Главная
                  </Link>
                  <details className="group">
                    <summary className="text-white text-lg font-medium hover:text-[#C6A052] transition-colors flex items-center justify-between cursor-pointer select-none">
                      Автомобили
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                      <Link href="/vehicles/luxury" className="text-white/80 hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Люксовые
                      </Link>
                      <Link href="/vehicles/sport" className="text-white/80 hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Спортивные
                      </Link>
                      <Link href="/vehicles/suv" className="text-white/80 hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Внедорожники
                      </Link>
                    </div>
                  </details>
                  <Link href="/services" className="text-white text-lg font-medium hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Услуги
                  </Link>
                  <Link href="/about" className="text-white text-lg font-medium hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                    О нас
                  </Link>
                  <Link href="/contact" className="text-white text-lg font-medium hover:text-[#C6A052] transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Контакты
                  </Link>
                  <div className="pt-2 flex flex-col space-y-2">
                    {user ? (
                      <>
                        <span className="text-white font-medium mb-2">{user.email}</span>
                        <Button variant="ghost" className="justify-start text-white hover:text-[#C6A052]" onClick={handleLogout}>
                          Выйти
                        </Button>
                      </>
                    ) : (
                      <Button variant="ghost" className="justify-start text-white hover:text-[#C6A052]" onClick={() => setShowLoginModal(true)}>
                        <User className="h-5 w-5 mr-2" />
                        Войти
                      </Button>
                    )}
                    <Link href="/booking">
                      <Button className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black mt-2">
                        Забронировать
                      </Button>
                    </Link>
                  </div>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;