"use client"

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import BookingSteps from '@/components/booking/booking-steps';
import VehicleSelection from '@/components/booking/vehicle-selection';
import DateSelection from '@/components/booking/date-selection';
import CustomerInfo from '@/components/booking/customer-info';
import BookingSummary from '@/components/booking/booking-summary';
import { Calendar, Clock, User, Phone, Mail, Car, Send } from 'lucide-react';

type BookingStep = 'vehicle' | 'dates' | 'info' | 'summary';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const stepVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const formFields = [
  {
    icon: <User className="h-5 w-5 text-[#C6A052]" />,
    label: 'Ваше имя',
    type: 'text',
    required: true,
  },
  {
    icon: <Phone className="h-5 w-5 text-[#C6A052]" />,
    label: 'Телефон',
    type: 'tel',
    required: true,
  },
  {
    icon: <Mail className="h-5 w-5 text-[#C6A052]" />,
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    icon: <Car className="h-5 w-5 text-[#C6A052]" />,
    label: 'Модель автомобиля',
    type: 'text',
    required: true,
  },
  {
    icon: <Calendar className="h-5 w-5 text-[#C6A052]" />,
    label: 'Дата',
    type: 'date',
    required: true,
  },
  {
    icon: <Clock className="h-5 w-5 text-[#C6A052]" />,
    label: 'Время',
    type: 'time',
    required: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function BookingPage() {
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('vehicleId');
  
  const [currentStep, setCurrentStep] = useState<BookingStep>(vehicleId ? 'dates' : 'vehicle');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(vehicleId);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    drivingLicense: '',
  });
  
  const goToStep = (step: BookingStep) => {
    setCurrentStep(step);
  };
  
  const handleVehicleSelect = (id: string) => {
    setSelectedVehicleId(id);
    goToStep('dates');
  };
  
  const handleDateSelect = (range: { from: Date | undefined; to: Date | undefined }) => {
    setDateRange(range);
    if (range.from && range.to) {
      goToStep('info');
    }
  };
  
  const handleCustomerInfoSubmit = (data: typeof customerData) => {
    setCustomerData(data);
    goToStep('summary');
  };
  
  const handleBookingSubmit = () => {
    // Here you would handle the actual booking submission
    // console.log('Booking submitted', {
    //   vehicleId: selectedVehicleId,
    //   dateRange,
    //   customerData,
    // });
    
    // Redirect to confirmation page or show success message
    alert('Бронирование успешно оформлено!');
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold mb-2">Бронирование автомобиля</h1>
          <p className="text-gray-400">
            Заполните форму ниже, чтобы забронировать выбранный автомобиль
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <BookingSteps currentStep={currentStep} onStepClick={goToStep} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            {currentStep === 'vehicle' && (
              <motion.div
                key="vehicle"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <VehicleSelection onVehicleSelect={handleVehicleSelect} />
              </motion.div>
            )}
            
            {currentStep === 'dates' && (
              <motion.div
                key="dates"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <DateSelection 
                  selectedDate={dateRange} 
                  onDateSelect={handleDateSelect} 
                  onBack={() => goToStep('vehicle')}
                  vehicleId={selectedVehicleId}
                />
              </motion.div>
            )}
            
            {currentStep === 'info' && (
              <motion.div
                key="info"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <CustomerInfo 
                  onSubmit={handleCustomerInfoSubmit} 
                  onBack={() => goToStep('dates')}
                />
              </motion.div>
            )}
            
            {currentStep === 'summary' && (
              <motion.div
                key="summary"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <BookingSummary 
                  vehicleId={selectedVehicleId!}
                  dateRange={dateRange}
                  customerData={customerData}
                  onSubmit={handleBookingSubmit}
                  onBack={() => goToStep('info')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}