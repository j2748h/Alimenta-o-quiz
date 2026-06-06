import React, { useEffect, useState } from 'react';
import { UserData, SelectedAnswers } from '../types';
import { QUESTIONS } from '../constants';
import { 
  Heart, 
  ShieldCheck, 
  Star, 
  Clock, 
  ArrowRight,
  Calculator,
  Apple,
  Sparkles,
  Zap,
  BookOpen,
  Lock,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface ResultScreenProps {
  userData: UserData;
  answers: SelectedAnswers;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ userData, answers }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer for urgency

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate score strictly based on the options defined in constants.ts
  const totalScore = QUESTIONS.reduce((acc, q, idx) => {
    const selectedValue = answers[idx];
    const option = q.options.find(o => o.value === selectedValue);
    return acc + (option?.points || 0);
  }, 0);

  let badgeColor = "";
  let badgeText = "";
  let descriptionText = "";
  let feedbackText = "";
  let textColorClass = "";

  if (totalScore <= 4) {
    badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
    textColorClass = "text-emerald-600";
    badgeText = "Sua Alimentação é Saudável";
    descriptionText = "Parabéns! Você já demonstra bons hábitos e provavelmente não precisa deste material neste momento. O e-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses talvez não seja a melhor opção para você.";
    feedbackText = "Mesmo assim, no dia a dia, organizar e aprimorar hábitos é sempre útil. Se você deseja conhecer novas dicas pragmáticas, deixamos abaixo nosso acesso promocional:";
  } else if (totalScore <= 10) {
    badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
    textColorClass = "text-amber-600";
    badgeText = "Hábitos que Podem ser Melhorados";
    descriptionText = "Você possui alguns hábitos que podem ser melhorados. O e-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses pode ajudar você a evitar erros comuns e acelerar seus resultados.";
    feedbackText = "Seu perfil indica pequenas falhas em momentos estratégicos (como a falta de organização ou de tempo). O nosso material foi desenhado sob medida para corrigir exatamente esses pontos.";
  } else {
    badgeColor = "bg-rose-100 text-rose-800 border-rose-200";
    textColorClass = "text-rose-600";
    badgeText = "Dificuldades com a Alimentação";
    descriptionText = "Seu resultado mostra que você provavelmente enfrenta dificuldades relacionadas à alimentação, organização alimentar ou criação de hábitos saudáveis. O e-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses foi desenvolvido exatamente para pessoas nessa situação.";
    feedbackText = "Sabemos que o excesso de teorias ou a rotina corrida dificultam se alimentar bem espontaneamente. Nosso guia vai direto ao ponto, ensinando como reverter esse quadro com facilidade.";
  }

  const userName = userData.name ? userData.name.split(' ')[0] : 'Parceiro(a)';

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-24 overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-emerald-100/40 via-emerald-50/20 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <header className="relative z-10 pt-24 pb-40 px-6 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="relative inline-flex items-center gap-4 bg-white px-8 py-3.5 rounded-full shadow-premium border border-emerald-50 mb-12">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-700 font-mono">Relatório Personalizado • Diagnóstico Rápido</span>
          </div>
          <h1 className="text-4xl md:text-[4.5rem] font-serif font-bold text-slate-950 mb-8 leading-[1.05] tracking-tighter">
            {userName}, o seu resultado <br/>
            <span className="italic font-light text-emerald-600">está pronto.</span>
          </h1>
        </div>
      </header>

      <main className="relative z-20 max-w-4xl mx-auto px-6 -mt-24">
        <div className="space-y-12">
          
          {/* RESULTADO PERSONALIZADO */}
          <div className="bg-white rounded-[4rem] shadow-premium p-8 md:p-16 border border-white/50 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/40 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.5em] mb-4">Pontuação Obtida:</h2>
              <div className="text-5xl md:text-6xl font-serif font-bold text-slate-950 mb-4">{totalScore} <span className="text-xl text-slate-400 font-sans font-light">/ 18 pontos</span></div>
              <div className={`inline-block px-6 py-2.5 rounded-full border text-sm font-bold uppercase tracking-wider ${badgeColor}`}>
                {badgeText}
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-serif italic text-center max-w-2xl mx-auto">
                "{descriptionText}"
              </p>
              
              <div className="p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 max-w-3xl mx-auto">
                <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-2">
                  <ShieldCheck size={14} /> Compreendendo seu Diagnóstico
                </h4>
                <p className="text-base text-slate-600 leading-relaxed text-center italic font-light">
                  {feedbackText}
                </p>
              </div>
            </div>
          </div>

          {/* O QUE O GUIA OFERECE CARD */}
          <div className="bg-slate-950 rounded-[3.5rem] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Star size={12} className="fill-current" /> Conteúdo do Guia
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                  Como o E-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses vai transformar sua saúde:
                </h3>
                <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                  Sem contar calorias exaustivamente, você irá reprogramar seu paladar e otimizar suas escolhas por meio de estratégias de fácil absorção e aplicação prática.
                </p>
              </div>
              
              <div className="lg:col-span-5 space-y-4">
                {[
                  { text: "Lista de escolhas alimentares melhores", desc: "Substituições inteligentes e saborosas." },
                  { text: "Estratégia de organização rápida", desc: "Prepare marmitas ou jantares sem estresse." },
                  { text: "Erros comuns mapeados", desc: "Pare de sabotar sua própria energia." },
                  { text: "Método de fixação de hábitos", desc: "Mantenha a constância em longo prazo." }
                ].map((item, id) => (
                  <div key={id} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">✔</div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.text}</p>
                      <p className="text-xs text-slate-400 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OFERTA ESPECIAL COMPONENT */}
          <div className="bg-white rounded-[4rem] p-8 md:p-16 border-2 border-emerald-500/30 shadow-premium relative overflow-hidden max-w-3xl mx-auto text-center space-y-10">
            {/* Urgency Badge */}
            <div className="absolute top-0 left-0 right-0 bg-emerald-600 text-white py-2 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 animate-pulse" /> Oferta única de liberação por: {formatTime(timeLeft)} minutos!
            </div>
            
            <div className="pt-6 space-y-4">
              <div className="inline-flex items-center gap-2 p-1.5 bg-emerald-50 rounded-full text-emerald-600 font-bold uppercase text-[10px] tracking-widest">
                <Sparkles size={12} /> Presente Exclusivo para Diagnosticados
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-950">🎁 Oferta Especial</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-lg mx-auto">
                Adquira hoje o e-book <strong>Alimentação Inteligente: Como eu perdi 158 kg em 9 meses</strong> com desconto de lançamento e garanta acesso digital instantâneo!
              </p>
            </div>

            {/* Price Box */}
            <div className="p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100/80 max-w-md mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-500 text-white font-bold py-1 px-4 text-[10px] uppercase tracking-wider rounded-bl-xl">
                Mais de 50% OFF
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm line-through">De R$ 47,99</p>
                <div className="flex justify-center items-baseline gap-1.5">
                  <span className="text-slate-400 text-lg uppercase font-light">Por Apenas</span>
                  <span className="text-4xl md:text-5xl font-black text-emerald-700">R$ 22,89</span>
                </div>
                <p className="text-emerald-600 font-semibold text-xs uppercase tracking-wider mt-2">Você economiza mais de R$ 25,00 hoje!</p>
              </div>
            </div>

            <div className="space-y-6 max-w-xl mx-auto">
              <div className="text-slate-500 text-sm font-light space-y-1">
                <p>✓ Acesso digital liberado imediatamente em seu e-mail.</p>
                <p>✓ Compatível com Celulares, Tablets, PC e Leitores Digitais.</p>
                <p>✓ Garantia de satisfação de pagamento seguro.</p>
              </div>

              {/* Call to action button */}
              <a 
                href="https://pay.cakto.com.br/v34zarp_916600"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full overflow-hidden bg-emerald-600 text-white font-bold py-8 px-8 rounded-[2.5rem] shadow-2xl shadow-emerald-200 hover:bg-emerald-700 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-4 text-xl tracking-wide uppercase"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
                <Award className="w-6 h-6 shrink-0" />
                <span>GARANTIR MEU ACESSO AGORA</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>

              <p className="text-[10px] text-slate-400 italic font-light">
                 ⚠️ O valor promocional pode ser alterado futuramente conforme novas atualizações forem adicionadas ao material.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ResultScreen;
