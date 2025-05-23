import { CheckCircle, Circle } from 'lucide-react';

type BookingStep = 'vehicle' | 'dates' | 'info' | 'summary';

interface BookingStepsProps {
  currentStep: BookingStep;
  onStepClick: (step: BookingStep) => void;
}

const BookingSteps = ({ currentStep, onStepClick }: BookingStepsProps) => {
  const steps: { key: BookingStep; label: string }[] = [
    { key: 'vehicle', label: 'Выбор автомобиля' },
    { key: 'dates', label: 'Даты аренды' },
    { key: 'info', label: 'Информация о клиенте' },
    { key: 'summary', label: 'Подтверждение' },
  ];
  
  const getStepStatus = (step: BookingStep) => {
    const stepIndex = steps.findIndex((s) => s.key === step);
    const currentIndex = steps.findIndex((s) => s.key === currentStep);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => (
          <div 
            key={step.key}
            className="flex flex-col items-center relative z-10"
          >
            <button
              onClick={() => {
                const status = getStepStatus(step.key);
                if (status === 'completed' || status === 'current') {
                  onStepClick(step.key);
                }
              }}
              className={`flex items-center justify-center h-10 w-10 rounded-full border-2 ${
                getStepStatus(step.key) === 'current'
                  ? 'border-[#C6A052] bg-[#C6A052]/10 text-[#C6A052]'
                  : getStepStatus(step.key) === 'completed'
                  ? 'border-[#C6A052] bg-[#C6A052] text-black'
                  : 'border-gray-600 bg-transparent text-gray-600'
              } ${
                getStepStatus(step.key) !== 'upcoming'
                  ? 'cursor-pointer hover:opacity-80'
                  : 'cursor-not-allowed'
              }`}
              disabled={getStepStatus(step.key) === 'upcoming'}
            >
              {getStepStatus(step.key) === 'completed' ? (
                <CheckCircle className="h-6 w-6" />
              ) : (
                <Circle className="h-6 w-6" />
              )}
            </button>
            
            <span 
              className={`mt-2 text-sm font-medium ${
                getStepStatus(step.key) === 'current'
                  ? 'text-[#C6A052]'
                  : getStepStatus(step.key) === 'completed'
                  ? 'text-white'
                  : 'text-gray-600'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
        
        {/* Progress line */}
        <div 
          className="absolute top-5 left-0 right-0 h-0.5 bg-gray-700"
          style={{ transform: 'translateY(-50%)' }}
        />
        
        {/* Completed progress */}
        <div 
          className="absolute top-5 left-0 h-0.5 bg-[#C6A052] transition-all duration-300"
          style={{ 
            transform: 'translateY(-50%)',
            width: (() => {
              const currentIndex = steps.findIndex((s) => s.key === currentStep);
              if (currentIndex === 0) return '0%';
              if (currentIndex === 1) return '33.3%';
              if (currentIndex === 2) return '66.6%';
              return '100%';
            })(),
          }}
        />
      </div>
    </div>
  );
};

export default BookingSteps;