import React, { useMemo, useEffect, useState } from 'react';
import { Option, PopupConfig } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle2, Heart, Sparkles, ClipboardList } from 'lucide-react';

const highlightText = (text: string, isDark: boolean) => {
  const keywords = [
    'alimentação', 'hábitos', 'energia', 'vontade', 'doces', 'inchaço', 'dificuldade', 
    'conhecimento', 'tempo', 'organização', 'saúde', 'peso', 'digital', 'resultado', 
    'sucesso', 'Guia', 'Inteligente'
  ];
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => 
    keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? 
      <span key={i} className={`${isDark ? 'text-emerald-300 border-emerald-400/20' : 'text-emerald-600 border-emerald-100'} font-semibold border-b-2 transition-colors duration-1000`}>{part}</span> : 
      part
  );
};

export const IntroScreen: React.FC<{ name: string, onStart: () => void }> = ({ name, onStart }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8 text-center relative overflow-hidden font-sans">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[90%] bg-emerald-50/60 rounded-full blur-[120px]"></div>
    </div>
    <div className="max-w-lg w-full relative z-10 flex flex-col items-center">
      <div className="mb-10">
         <div className="inline-flex items-center justify-center p-6 bg-emerald-600 rounded-[2.5rem] mb-10 shadow-xl shadow-emerald-200 animate-float">
            <ClipboardList className="w-10 h-10 text-white" />
         </div>
         <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-8">
            {name ? name.split(' ')[0] : 'Seja bem-vindo(a)'}
         </h1>
         <p className="text-slate-600 text-xl leading-relaxed font-medium mb-4">
            Responda 6 perguntas rápidas para descobrir se o e-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses é o ideal para você.
         </p>
         <p className="text-slate-400 text-sm font-light mb-12 italic">
            É simples, prático e leva menos de 1 minuto.
         </p>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-slate-950 text-white font-bold py-7 rounded-[2rem] shadow-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-5 group"
      >
        <span className="text-lg tracking-wide uppercase">INICIAR AGORA</span>
        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
      </button>

      <div className="mt-16 flex items-center gap-6 opacity-20">
        <span className="text-[10px] text-slate-900 font-bold uppercase tracking-[0.4em]">Análise Express</span>
        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        <span className="text-[10px] text-slate-900 font-bold uppercase tracking-[0.4em]">Hábitos</span>
      </div>
    </div>
  </div>
);

interface QuestionCardProps {
  question: string;
  options: Option[];
  currentStep: number;
  totalSteps: number;
  selectedAnswer: string | undefined;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  currentStep,
  totalSteps,
  selectedAnswer,
  onNext,
  onBack,
  onSelect
}) => {
  const [pulse, setPulse] = useState(false);
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const isDark = false; 

  useEffect(() => {
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 800);
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="w-full max-w-2xl mx-auto z-20 relative px-4">
      <div className="mb-14">
        <div className="flex justify-between items-end mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
            Diagnóstico • Passo {currentStep + 1} de {totalSteps}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-emerald-600">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-emerald-600 transition-all duration-1000 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none"></div>
          </div>
        </div>
        <p className="text-center text-[11px] text-emerald-600 uppercase tracking-widest mt-4 font-black">
            Estamos quase lá! Suas respostas nos ajudam a entender seus hábitos alimentares.
        </p>
      </div>

      <div 
        key={currentStep}
        className="transition-all duration-1000 border rounded-[3.5rem] p-10 md:p-16 shadow-premium relative overflow-hidden animate-scale-in bg-white border-slate-50"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none bg-emerald-50/60"></div>

        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 leading-tight tracking-tight text-slate-950">
          {highlightText(question, isDark)}
        </h2>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onSelect(option.value)}
              className={`w-full group flex items-center gap-6 p-6 rounded-[1.8rem] text-left transition-all duration-500 border outline-none ${
                selectedAnswer === option.value
                  ? 'bg-emerald-50 border-emerald-200 translate-x-1 shadow-md'
                  : 'bg-slate-50/50 border-slate-200/40 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5'
              }`}
            >
              <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 ${
                selectedAnswer === option.value
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white border-slate-200 text-slate-300'
              }`}>
                {selectedAnswer === option.value ? (
                  <CheckCircle2 className="w-5 h-5 animate-scale-in" />
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-tighter">{option.id}</span>
                )}
              </div>
              <span className={`text-lg transition-colors duration-500 font-light ${
                selectedAnswer === option.value 
                  ? 'text-slate-950 font-medium' 
                  : 'text-slate-600'
              }`}>
                {option.text}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-14 flex gap-5">
          {currentStep > 0 && (
            <button
              onClick={onBack}
              className="w-16 h-16 rounded-[1.5rem] border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all duration-500 flex items-center justify-center shrink-0"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}
          <button
            onClick={onNext}
            disabled={!selectedAnswer}
            className={`flex-1 py-5 rounded-[1.8rem] font-bold text-lg transition-all duration-500 flex items-center justify-center gap-4 relative overflow-hidden group/next ${
              selectedAnswer 
                ? 'bg-slate-950 text-white shadow-xl hover:bg-emerald-600' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            {selectedAnswer && <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/next:animate-shine pointer-events-none"></div>}
            <span>{currentStep === totalSteps - 1 ? 'FINALIZAR QUIZ' : 'PRÓXIMO'}</span>
            <ChevronRight className={`w-6 h-6 transition-transform ${selectedAnswer ? 'group-hover/next:translate-x-2' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ToastFeedback: React.FC<{ config: PopupConfig }> = ({ config }) => {
  if (!config.isVisible) return null;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-3rem)] max-w-sm">
      <div className="bg-white text-slate-900 rounded-[2.5rem] p-6 shadow-2xl flex items-center gap-5 animate-fade-in-down border border-emerald-50/50">
        <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg shadow-emerald-100 shrink-0">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <p className="text-sm font-medium leading-relaxed italic text-slate-700">"{config.message}"</p>
      </div>
    </div>
  );
};
