import Image from 'next/image';
import { vehicles } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, Clock, CreditCard, Check } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface BookingSummaryProps {
  vehicleId: string;
  dateRange: { from: Date | undefined; to: Date | undefined };
  customerData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    drivingLicense: string;
  };
  onSubmit: () => void;
  onBack: () => void;
}

const BookingSummary = ({
  vehicleId,
  dateRange,
  customerData,
  onSubmit,
  onBack,
}: BookingSummaryProps) => {
  const vehicle = vehicles.find((v) => v.id === vehicleId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  let vehicleData = vehicle;
  // Если выбрана машина Dodge Challenger Grey, подменяем данные
  if (vehicle && (vehicle.brand === 'Dodge' && vehicle.model === 'Challenger Grey')) {
    vehicleData = {
      ...vehicle,
      brand: 'Dodge',
      model: 'Challenger Grey',
      image: 'https://optim.tildacdn.com/tild6334-3462-4539-b864-626261306332/-/format/webp/IMG_2512-min.JPG.webp',
    };
  }
  
  if (!vehicleData || !dateRange.from || !dateRange.to) {
    return <div>Ошибка: недостаточно данных для бронирования</div>;
  }
  
  const days = Math.round((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const totalPrice = days * vehicleData.price;
  
  const deposit = Math.round(vehicleData.price * 0.3);
  const insurance = 5000;
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleBooking = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    if (!dateRange.from || !dateRange.to) {
      setError('Ошибка: не выбраны даты бронирования.');
      setLoading(false);
      return;
    }
    const { error } = await supabase.from('bookings').insert([
      {
        vehicle_id: vehicleId,
        vehicle_brand: vehicleData.brand,
        vehicle_model: vehicleData.model,
        vehicle_image: vehicleData.image,
        customer_first_name: customerData.firstName,
        customer_last_name: customerData.lastName,
        customer_email: customerData.email,
        customer_phone: customerData.phone,
        customer_address: customerData.address,
        customer_city: customerData.city,
        customer_zip_code: customerData.zipCode,
        customer_driving_license: customerData.drivingLicense,
        date_from: dateRange.from.toISOString(),
        date_to: dateRange.to.toISOString(),
        days,
        total_price: totalPrice + insurance,
        deposit,
        insurance,
        status: 'pending',
        created_at: new Date().toISOString(),
      },
    ]);
    setLoading(false);
    if (error) {
      setError('Ошибка при сохранении бронирования: ' + error.message);
    } else {
      setSuccess(true);
      onSubmit();
    }
  };

  return (
    <div>
      <div className="mb-6">
        <Button
          variant="ghost"
          className="text-gray-400 hover:text-[#C6A052] mb-4"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Назад к информации о клиенте
        </Button>
        
        <h2 className="text-xl font-bold mb-2">Подтверждение бронирования</h2>
        <p className="text-gray-400">
          Пожалуйста, проверьте данные и подтвердите бронирование
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-black/50 border border-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-[#C6A052]" />
              Детали бронирования
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-400">Автомобиль</p>
                  <p className="font-medium">{vehicleData.brand} {vehicleData.model}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Дата получения</p>
                  <p className="font-medium">{formatDate(dateRange.from)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Дата возврата</p>
                  <p className="font-medium">{formatDate(dateRange.to)}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-400">Количество дней</p>
                  <p className="font-medium">{days} дн.</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Статус</p>
                  <p className="font-medium flex items-center">
                    <span className="flex h-2 w-2 rounded-full bg-[#C6A052] mr-2"></span>
                    Ожидает подтверждения
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Время получения</p>
                  <p className="font-medium">12:00</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Время возврата</p>
                  <p className="font-medium">12:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 border border-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-[#C6A052]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Информация о клиенте
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-400">ФИО</p>
                  <p className="font-medium">{customerData.firstName} {customerData.lastName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{customerData.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Телефон</p>
                  <p className="font-medium">{customerData.phone}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-400">Адрес</p>
                  <p className="font-medium">
                    {customerData.address && `${customerData.address}, `}
                    {customerData.city && `${customerData.city}, `}
                    {customerData.zipCode}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Водительское удостоверение</p>
                  <p className="font-medium">{customerData.drivingLicense}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 border border-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-[#C6A052]" />
              Способ оплаты
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="payment-card"
                  name="payment-method"
                  className="h-4 w-4 text-[#C6A052] focus:ring-[#C6A052]"
                  defaultChecked
                />
                <label htmlFor="payment-card" className="flex items-center">
                  <span className="mr-2">Банковская карта</span>
                  <div className="flex space-x-1">
                    <div className="h-6 w-10 bg-gray-700 rounded-sm"></div>
                    <div className="h-6 w-10 bg-gray-700 rounded-sm"></div>
                    <div className="h-6 w-10 bg-gray-700 rounded-sm"></div>
                  </div>
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="payment-cash"
                  name="payment-method"
                  className="h-4 w-4 text-[#C6A052] focus:ring-[#C6A052]"
                />
                <label htmlFor="payment-cash">Наличные при получении</label>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-400">
              <p>* Депозит в размере 30% будет списан сразу, остаток при получении автомобиля</p>
            </div>
          </div>
          
          <div className="bg-black/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Условия аренды</h3>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <Check className="h-4 w-4 text-[#C6A052] mr-2 mt-0.5" />
                <p>Возраст водителя должен быть не менее 21 года, стаж вождения - не менее 2 лет.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-4 w-4 text-[#C6A052] mr-2 mt-0.5" />
                <p>Для получения автомобиля необходимо предъявить паспорт и водительское удостоверение.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-4 w-4 text-[#C6A052] mr-2 mt-0.5" />
                <p>Депозит возвращается после проверки автомобиля при возврате.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-4 w-4 text-[#C6A052] mr-2 mt-0.5" />
                <p>В случае отмены бронирования менее чем за 48 часов, депозит не возвращается.</p>
              </div>
              
              <div className="flex items-start">
                <Check className="h-4 w-4 text-[#C6A052] mr-2 mt-0.5" />
                <p>Автомобиль предоставляется с полным баком топлива и должен быть возвращен с полным баком.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden sticky top-24">
            <div className="relative h-48">
              <Image
                src={vehicleData.image}
                alt={`${vehicleData.brand} ${vehicleData.model}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {vehicleData.brand} {vehicleData.model}
              </h3>
              
              <div className="border-t border-white/10 my-4 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Стоимость аренды:</span>
                    <span>{vehicleData.price.toLocaleString()} ₽ × {days} дн.</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Страховка:</span>
                    <span>{insurance.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Депозит (возвратный):</span>
                    <span>{deposit.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="border-t border-white/10 my-2 pt-2 flex justify-between font-bold text-lg">
                    <span>Итого к оплате:</span>
                    <span className="text-[#C6A052]">{(totalPrice + insurance).toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Сейчас (30%):</span>
                    <span>{Math.round(totalPrice * 0.3).toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">При получении:</span>
                    <span>{Math.round(totalPrice * 0.7 + insurance + deposit).toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <Button
                  className="w-full bg-[#C6A052] hover:bg-[#C6A052]/80 text-black"
                  onClick={handleBooking}
                  disabled={loading || success}
                >
                  {loading ? 'Сохраняем...' : success ? 'Бронирование сохранено!' : 'Подтвердить бронирование'}
                </Button>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-[#C6A052]/10 hover:text-[#C6A052] hover:border-[#C6A052]/50"
                  onClick={onBack}
                  disabled={loading}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Назад
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;