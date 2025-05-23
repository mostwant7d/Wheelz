"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { vehicles } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { ChevronLeft, ChevronRight, CalendarDays, Clock } from 'lucide-react';
import { ru } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';

interface DateSelectionProps {
  selectedDate: { from: Date | undefined; to: Date | undefined };
  onDateSelect: (range: { from: Date | undefined; to: Date | undefined }) => void;
  onBack: () => void;
  vehicleId: string | null;
}

const DateSelection = ({
  selectedDate,
  onDateSelect,
  onBack,
  vehicleId,
}: DateSelectionProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: selectedDate.from,
    to: selectedDate.to,
  });
  const [pickupTime, setPickupTime] = useState('12:00');
  const [returnTime, setReturnTime] = useState('12:00');
  
  const vehicle = vehicleId ? vehicles.find((v) => v.id === vehicleId) : null;
  
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    if (date?.from && date?.to) {
      const days = Math.round((date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      setTotalDays(days);
      
      if (vehicle) {
        setTotalPrice(days * vehicle.price);
      }
    } else {
      setTotalDays(0);
      setTotalPrice(0);
    }
  }, [date, vehicle]);
  
  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    onDateSelect({
      from: range?.from,
      to: range?.to,
    });
  };

  const handleNext = () => {
    if (date?.from && date?.to) {
      onDateSelect({
        from: date.from,
        to: date.to,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="mb-6">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-[#C6A052] mb-4"
            onClick={onBack}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Назад к выбору автомобиля
          </Button>
          
          <h2 className="text-xl font-bold mb-2">Выберите даты аренды</h2>
          <p className="text-gray-400">
            Укажите даты получения и возврата автомобиля
          </p>
        </div>
        
        <div className="bg-black/50 border border-white/10 rounded-lg p-6 mb-6">
          <Calendar
            mode="range"
            selected={date}
            onSelect={handleDateSelect}
            locale={ru}
            disabled={{ before: new Date() }}
            className="bg-black"
            classNames={{
              day_selected: "bg-[#C6A052] text-black hover:bg-[#C6A052]/80 focus:bg-[#C6A052]/80",
              day_today: "bg-black text-[#C6A052]",
              day_range_middle: "bg-[#C6A052]/20 text-white aria-selected:bg-[#C6A052]/20 aria-selected:text-white",
              day_range_end: "bg-[#C6A052] text-black",
              day_range_start: "bg-[#C6A052] text-black",
            }}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1 text-[#C6A052]" />
                Дата получения
              </div>
            </label>
            <div className="bg-black/50 border border-white/10 rounded-lg p-4">
              {date.from ? (
                <div className="text-lg">
                  {date.from.toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
              ) : (
                <div className="text-gray-500">Выберите дату</div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-[#C6A052]" />
                Время получения
              </div>
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-lg"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {i.toString().padStart(2, '0')}:00
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1 text-[#C6A052]" />
                Дата возврата
              </div>
            </label>
            <div className="bg-black/50 border border-white/10 rounded-lg p-4">
              {date.to ? (
                <div className="text-lg">
                  {date.to.toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
              ) : (
                <div className="text-gray-500">Выберите дату</div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-[#C6A052]" />
                Время возврата
              </div>
            </label>
            <select
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-lg"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                  {i.toString().padStart(2, '0')}:00
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <Button
          className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black"
          onClick={handleNext}
          disabled={!date.from || !date.to}
        >
          Продолжить <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div>
        {vehicle && (
          <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {vehicle.brand} {vehicle.model}
              </h3>
              
              <div className="border-t border-white/10 my-4 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Стоимость в день:</span>
                    <span>{vehicle.price.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Количество дней:</span>
                    <span>{totalDays}</span>
                  </div>
                  
                  <div className="border-t border-white/10 my-2 pt-2 flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span className="text-[#C6A052]">{totalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>* В стоимость включено:</p>
                <ul className="list-disc list-inside mt-1 ml-2">
                  <li>Страховка</li>
                  <li>Техническое обслуживание</li>
                  <li>Круглосуточная поддержка</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelection;