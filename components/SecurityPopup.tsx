
import React from 'react';
import { Heart, Lock, Fingerprint, CheckCircle2, UserCog, Sparkles, GraduationCap } from 'lucide-react';

interface SecurityPopupProps {
  onConfirm: () => void;
}

const SecurityPopup: React.FC<SecurityPopupProps> = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-in p-8 md:p-12 text-center">
        
        <div className="mb-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-slate-950 mb-4">
            Nosso compromisso com você
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            Valorizamos muito sua confiança. Tudo o que você nos contar será usado apenas para entendermos melhor como ajudar seu filho(a).
          </p>
        </div>
        
        <div className="space-y-4 mb-10 text-left">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <UserCog className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
             <p className="text-slate-600 text-sm">Usaremos suas respostas para criar um olhar carinhoso e único para sua família.</p>
          </div>
          <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
             <p className="text-slate-600 text-sm">Seus dados e opiniões estão seguros e serão tratados com total respeito e sigilo.</p>
          </div>
        </div>

        <button
          onClick={onConfirm}
          className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-blue-700 transition-all"
        >
          CONCORDO E VAMOS LÁ
        </button>

        <p className="mt-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
           Respeito e transparência sempre
        </p>
      </div>
    </div>
  );
};

export default SecurityPopup;
