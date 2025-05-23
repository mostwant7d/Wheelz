import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#C6A052]">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-2">Страница не найдена</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-[#C6A052] hover:bg-[#C6A052]/80 text-black">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              На главную
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="border-white/20 text-white hover:bg-[#C6A052]/10 hover:text-[#C6A052] hover:border-[#C6A052]/50"
          >
            <Link href="/vehicles">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Посмотреть автомобили
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}