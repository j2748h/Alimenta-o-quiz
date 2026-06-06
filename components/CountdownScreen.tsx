import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface CountdownScreenProps {
  onComplete: () => void;
}

const CountdownScreen: React.FC<CountdownScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-600 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div 
            key={count}
            className="text-8xl md:text-9xl font-serif font-bold text-white leading-none animate-fade-in-up"
        >
          {count > 0 ? count : "Pronto!"}
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
            <Heart className="w-8 h-8 text-emerald-200 animate-pulse" />
            <p className="text-emerald-100 text-[10px] font-bold tracking-[0.4em] uppercase">
                Preparando seu teste...
            </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownScreen;
