import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, User, Calendar, Heart, Lock } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: (name: string, age: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !age.trim()) {
      setError('Por favor, nos conte seu nome e idade para continuarmos.');
      return;
    }
    onComplete(name, age);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 relative overflow-hidden font-sans">
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-emerald-50/50 rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-50/40 rounded-full blur-[100px]"></div>
      </div>

      <div className={`relative z-10 w-full max-w-xl transition-all duration-1000 transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 shadow-premium border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
            
            <div className="text-center mb-12 relative z-10">
                <div className="inline-flex p-5 bg-emerald-600 rounded-3xl mb-8 shadow-lg shadow-emerald-200 animate-float">
                    <Heart className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6 leading-tight tracking-tight">
                    Queremos te conhecer <br/>
                    <span className="text-emerald-600 italic font-light">um pouco melhor.</span>
                </h1>
                <p className="text-slate-500 text-lg font-light max-w-sm mx-auto leading-relaxed">
                    Seu nome e idade nos ajudam a entender seus hábitos e demandas de bem-estar.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="group">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4 ml-2 transition-colors group-focus-within:text-emerald-600">
                      Seu Nome
                    </label>
                    <div className="relative">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 transition-colors group-focus-within:text-emerald-500">
                          <User className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <input
                             type="text" 
                             value={name} 
                             onChange={(e) => setName(e.target.value)}
                             className="w-full pl-14 pr-6 py-6 bg-slate-50/50 border border-slate-200/60 rounded-[1.5rem] text-slate-900 outline-none focus:border-emerald-400 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/5 transition-all text-lg placeholder:text-slate-300 font-light"
                             placeholder="Como podemos te chamar?"
                        />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4 ml-2 transition-colors group-focus-within:text-emerald-600">
                      Sua Idade
                    </label>
                    <div className="relative">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 transition-colors group-focus-within:text-emerald-500">
                          <Calendar className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <input
                             type="number" 
                             value={age} 
                             onChange={(e) => setAge(e.target.value)}
                             className="w-full pl-14 pr-6 py-6 bg-slate-50/50 border border-slate-200/60 rounded-[1.5rem] text-slate-900 outline-none focus:border-emerald-400 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/5 transition-all text-lg placeholder:text-slate-300 font-light"
                             placeholder="Sua idade"
                        />
                    </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Lock size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        Seus dados são protegidos e usados apenas para personalizar sua experiência. Valorizamos sua privacidade.
                    </p>
                </div>

                {error && (
                  <div className="text-rose-500 text-xs font-bold text-center animate-shake uppercase tracking-widest bg-rose-50 py-3 rounded-xl border border-rose-100">
                    {error}
                  </div>
                )}

                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="group relative w-full overflow-hidden bg-slate-950 text-white font-bold py-7 rounded-[1.5rem] shadow-xl hover:bg-emerald-600 transition-all duration-500 flex items-center justify-center gap-5 active:scale-95"
                  >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
                      <span className="text-lg tracking-wide uppercase">CONTINUAR PARA O QUIZ</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
