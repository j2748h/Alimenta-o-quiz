import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  Heart, 
  Clock, 
  ChevronDown, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Target, 
  ClipboardList, 
  Brain, 
  Shield, 
  Zap,
  Utensils,
  BookOpen,
  Info,
  Apple,
  Lock,
  Check,
  X,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FAQS } from '../constants';

const TypewriterText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 8 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {isTyping && (
        <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-emerald-500 animate-pulse align-middle" />
      )}
    </span>
  );
};

const checkoutItems = [
  {
    tag: "Guia Principal",
    icon: "📖",
    title: "E-book Completo \"Alimentação Inteligente: Como eu perdi 158 kg em 9 meses\"",
    description: "O manual detalhado do método real que me permitiu perder 158 kg em 9 meses. Escrito de forma simples, direta e focado inteiramente na economia doméstica."
  },
  {
    tag: "Constância",
    icon: "📅",
    title: "Plano Completo de 30 Dias",
    description: "Um passo a passo diário para ajudar você a criar hábitos saudáveis, melhorar sua rotina e manter a consistência sem complicação."
  },
  {
    tag: "Nutrição Econômica",
    icon: "🥗",
    title: "Guia de Alimentação Econômica",
    description: "Descubra como montar refeições equilibradas, nutritivas e econômicas utilizando ingredientes fáceis de encontrar e muito baratos."
  },
  {
    tag: "Atividade Física",
    icon: "🏃",
    title: "10 Exercícios Simples Para Fazer em Casa",
    description: "Treinos rápidos, práticos e fáceis guiados detalhadamente para quem tem pouco tempo ou não deseja pagar mensalidade de academia."
  },
  {
    tag: "Foco & Energia",
    icon: "😴",
    title: "Método para Dormir Melhor e Recuperar Energia",
    description: "Aprenda técnicas práticas testadas para melhorar a qualidade do sono profundo, acordar com mais disposição e regular seus hormônios."
  },
  {
    tag: "Mercado Inteligente",
    icon: "🛒",
    title: "Lista Inteligente de Compras Econômicas",
    description: "Saiba exatamente quais alimentos comprar nas safras certas para economizar muito sem abrir mão do valor e da qualidade nutricional."
  },
  {
    tag: "Mente Saudável",
    icon: "🧠",
    title: "Estratégias Para Controlar a Fome Emocional",
    description: "Aprenda a diferenciar com clareza a fome física da ansiedade alimentar, evitando decisões impulsivas e descontroles na rotina."
  },
  {
    tag: "Saciedade Prolongada",
    icon: "🍎",
    title: "Tabela de Alimentos de Alta Saciedade",
    description: "Conheça alimentos simples e super baratos do dia a dia brasileiro que ajudam você a se sentir saciado por muito mais tempo."
  },
  {
    tag: "Produtividade",
    icon: "💡",
    title: "Dicas Práticas de Organização Alimentar",
    description: "Métodos simples para planejar refeições da semana, armazenar alimentos de forma ideal, reduzir o desperdício doméstico e economizar tempo."
  },
  {
    tag: "Acesso Seguro",
    icon: "♻️",
    title: "Acesso Vitalício Para Sempre",
    description: "Adquira uma única vez e consulte o material completo quando e onde quiser, diretamente pelo seu celular, tablet ou computador."
  },
  {
    tag: "Evolução Contínua",
    icon: "🔄",
    title: "Atualizações Futuras Gratuitas",
    description: "Sempre que novas melhorias, tabelas de safras orçamentárias ou bônus forem adicionados, você receberá tudo gratuitamente sem taxas extras."
  },
  {
    tag: "Super Dinheiro de Volta",
    icon: "🎁",
    title: "Bônus Extra: Guia de Cashback & Economia",
    description: "Descubra segredos práticos do nosso e-book para economizar ainda mais na feira aplicando o cashback Méliuz de forma inteligente."
  }
];

const testimonialsList = [
  {
    name: "Mariana Souza",
    age: 34,
    city: "São Paulo",
    state: "SP",
    stars: 3,
    text: "Comprei porque o preço era acessível e gostei bastante da linguagem. Não parece aqueles materiais cheios de termos difíceis. Consegui aplicar várias dicas já na primeira semana e até comecei a organizar melhor minhas refeições. Se pudesse sugerir algo para uma próxima versão, eu adicionaria mais exemplos de pratos prontos para café da manhã, almoço e jantar. Acho que ajudaria quem não tem muita criatividade na cozinha. No geral, valeu muito a pena pelo valor."
  },
  {
    name: "Jorge Mendes",
    age: 52,
    city: "Belo Horizonte",
    state: "MG",
    stars: 4,
    text: "O que mais gostei foi a parte sobre hábitos e sono. Eu procurava algo apenas sobre emagrecimento, mas percebi que dormir melhor e me organizar ajudou muito mais do que eu imaginava. Uma ideia para melhorar ainda mais seria incluir alguns vídeos ou links para demonstrações dos exercícios. Às vezes eu ficava na dúvida se estava executando o movimento corretamente. Mesmo assim, achei o conteúdo muito útil e fácil de seguir."
  },
  {
    name: "Carla Pinheiro",
    age: 41,
    city: "Curitiba",
    state: "PR",
    stars: 2,
    text: "Gostei porque o guia é realista. Ele não manda comprar alimentos caros nem seguir dietas impossíveis. As dicas cabem no orçamento da minha família. A única sugestão que eu daria seria adicionar uma tabela de substituições. Por exemplo: se a pessoa não tiver aveia, banana ou batata-doce em casa, quais alimentos parecidos ela pode usar no lugar. Também seria interessante ter um WhatsApp ou canal para tirar dúvidas rápidas dos leitores. Achei um excelente começo e espero ver futuras atualizações."
  },
  {
    name: "Lucas Ferreira",
    age: 28,
    city: "Recife",
    state: "PE",
    stars: 5,
    text: "Cara, eu não esperava que um material tão barato fosse tão completo. A parte do plano de 30 dias foi o que me fisgou de vez — ter o dia a dia organizado fez toda a diferença pra mim. Recomendo muito."
  },
  {
    name: "Patrícia Alves",
    age: 45,
    city: "Salvador",
    state: "BA",
    stars: 3,
    text: "Gostei do conteúdo no geral, mas senti falta de receitas mais detalhadas. Fala pra montar o prato mas não ensina muito como temperar ou preparar. Mesmo assim ajudou na organização das minhas compras semanais."
  },
  {
    name: "Renato Costa",
    age: 37,
    city: "Porto Alegre",
    state: "RS",
    stars: 4,
    text: "Fui cético no começo porque já comprei material assim antes e não adiantou nada. Esse aqui é diferente — linguagem simples, sem enrolação. O capítulo sobre sono me surpreendeu, não esperava encontrar isso num guia de alimentação. Boa compra."
  },
  {
    name: "Simone Rocha",
    age: 52,
    city: "Manaus",
    state: "AM",
    stars: 2,
    text: "Achei muito básico pra quem já tem um pouco de conhecimento sobre nutrição. Parece mais voltado pra iniciante mesmo. Não me acrescentou muita coisa nova não."
  },
  {
    name: "Fernanda Lima",
    age: 31,
    city: "Fortaleza",
    state: "CE",
    stars: 5,
    text: "Comprei sem expectativa e me surpreendi. O que mais gostei foi a lista de compras econômica — segui certinho na primeira semana e gastei menos do que de costume. A escrita é leve, parece que uma pessoa tá conversando contigo. Recomendo pra qualquer um que quer começar a se cuidar sem complicar a vida."
  },
  {
    name: "Marcos Souza",
    age: 19,
    city: "Goiânia",
    state: "GO",
    stars: 3,
    text: "Tá bom. Aprendi bastante sobre fome emocional, que era algo que eu nem sabia que existia. Só achei que podia ter mais coisa voltada pra quem mora sozinho e cozinha pra uma pessoa só."
  },
  {
    name: "Rosangela Teixeira",
    age: 58,
    city: "Natal",
    state: "RN",
    stars: 4,
    text: "Minha filha me mandou esse guia e no começo fiquei com receio porque não sou muito acostumada com esse tipo de material. Mas a leitura é muito fácil, consegui entender tudo. Me ajudou bastante com a questão do sono que eu nem sabia que afetava o peso. Só senti falta de algo mais voltado pra minha faixa de idade."
  },
  {
    name: "Diego Martins",
    age: 24,
    city: "São Luís",
    state: "MA",
    stars: 1,
    text: "Não gostei. Esperava algo mais aprofundado com cálculo de calorias e macros. É muito superficial pra quem quer resultado sério na academia."
  },
  {
    name: "Aline Barbosa",
    age: 33,
    city: "Campinas",
    state: "SP",
    stars: 4,
    text: "A parte dos exercícios em casa foi muito útil. Simples de entender e dá pra fazer mesmo sem espaço grande. Minha única crítica é que alguns exercícios eu tive dificuldade de visualizar só pela descrição escrita — um desenho ou foto ajudaria muito."
  },
  {
    name: "Paulo Henrique",
    age: 41,
    city: "Belém",
    state: "PA",
    stars: 5,
    text: "Recomendei pra minha esposa e ela também amou. A gente tá seguindo o plano de 30 dias junto e tem sido muito mais fácil do que a gente imaginava. O fato de ser barato e acessível já vale muito. Conteúdo honesto, sem enganação."
  },
  {
    name: "Tatiane Moura",
    age: 27,
    city: "Maceió",
    state: "AL",
    stars: 3,
    text: "Gostei da parte de organização e hábitos. Mas senti que o capítulo de exercícios podia ser mais detalhado. Faz falta uma tabela de quanto tempo fazer cada um por semana de forma mais visual."
  },
  {
    name: "Roberto Nascimento",
    age: 46,
    city: "Cuiabá",
    state: "MT",
    stars: 4,
    text: "Comprei pra tentar mudar minha rotina alimentar e valeu o investimento. O guia é direto ao ponto, sem enrolação. O que faltou pra ser 5 estrelas foi uma parte específica sobre como lidar com as recaídas, porque isso acontece e o material não aborda muito."
  },
  {
    name: "Juliana Castro",
    age: 38,
    city: "João Pessoa",
    state: "PB",
    stars: 2,
    text: "Achei o conteúdo ok mas esperava mais receitas prontas. Tem muita teoria e pouca prática pra quem não sabe cozinhar. A lista de compras foi a parte que mais aproveitei."
  },
  {
    name: "Cláudia Reis",
    age: 49,
    city: "Florianópolis",
    state: "SC",
    stars: 5,
    text: "Esse guia chegou num momento em que eu já estava desanimada de tanto tentar e não conseguir. A linguagem acolhedora fez diferença — não me senti julgada em nenhum momento. O plano de 30 dias me deu estrutura que eu nunca tive antes. Já indiquei pra três amigas."
  },
  {
    name: "Thiago Oliveira",
    age: 22,
    city: "Vitória",
    state: "ES",
    stars: 3,
    text: "É um bom começo. Me ajudou a entender que não precisa gastar muito pra comer bem. Mas sinto que falta conteúdo sobre como montar treino mais completo além dos 10 exercícios básicos."
  },
  {
    name: "Marisete Gonçalves",
    age: 55,
    city: "Campo Grande",
    state: "MS",
    stars: 4,
    text: "Muito bom pra quem tá começando do zero como eu. Linguagem simples, fácil de seguir. Só tive dificuldade na parte dos exercícios porque tenho problema no joelho e não tem adaptações pra quem tem limitação física. Mas no geral valeu muito."
  },
  {
    name: "André Peixoto",
    age: 35,
    city: "Teresina",
    state: "PI",
    stars: 3,
    text: "Conteúdo razoável. O que mais gostei foi a tabela de fome física e fome emocional, achei bem esclarecedora. Mas o guia é curto demais pra o que promete. Esperava mais profundidade nos capítulos."
  },
  {
    name: "Ana Carla Silveira",
    age: 19,
    city: "Aracaju",
    state: "SE",
    stars: 3,
    text: "Achei o livro bem prático e com leitura fácil. Como tenho 19 anos, ainda moro com meus pais e tenho a rotina corrida por conta dos estudos, o e-book me ajudou bastante a entender como economizar na feira. Apenas senti falta de mais opções rápidas de lanches saudáveis para levar para a faculdade."
  }
];

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [isSubmittingTestimonial, setIsSubmittingTestimonial] = useState(false);
  const [isTestimonialSubmitted, setIsTestimonialSubmitted] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState(6);
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    age: '',
    city: '',
    state: '',
    stars: 0,
    likes: '',
    suggestions: ''
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselTimerKey, setCarouselTimerKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % checkoutItems.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [carouselTimerKey]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % checkoutItems.length);
    setCarouselTimerKey((key) => key + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + checkoutItems.length) % checkoutItems.length);
    setCarouselTimerKey((key) => key + 1);
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingTestimonial(true);
    setTimeout(() => {
      setIsSubmittingTestimonial(false);
      setIsTestimonialSubmitted(true);
    }, 1800);
  };

  const handleResetTestimonial = () => {
    setShowTestimonialModal(false);
    setIsTestimonialSubmitted(false);
    setTestimonialForm({
      name: '',
      age: '',
      city: '',
      state: '',
      stars: 0,
      likes: '',
      suggestions: ''
    });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-emerald-600/10">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex items-center pt-20 pb-24 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[90%] bg-emerald-50/60 rounded-full blur-[120px] animate-pulse-soft"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[70%] bg-green-50/40 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <div className={`space-y-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-slate-100 animate-fade-in-down">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <ClipboardList className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600">
                  Teste Rápido de 1 Minuto
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm border border-slate-100 animate-fade-in-down select-none">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <div className="relative w-3.5 h-3.5 text-slate-200 fill-slate-100">
                    <Star className="absolute inset-0 w-3.5 h-3.5 text-slate-200" />
                    <div className="absolute inset-0 w-[55%] overflow-hidden">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-slate-900">3,9</span>
                  <span className="text-slate-300 font-light">|</span>
                  <span className="text-slate-500 font-light">(21+ avaliações)</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-[4.5rem] font-serif font-bold text-slate-950 leading-[1.05] tracking-tighter">
              Sua alimentação está <br/>
              <span className="italic font-light text-emerald-600 relative inline-block">
                ajudando ou atrapalhando
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <br/> a sua saúde?
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed">
                Descubra em menos de 1 minuto como o método que me permitiu <strong>vencer a obesidade mórbida de 158 kg em apenas 9 meses</strong> pode revolucionar sua saúde, melhorar seus hábitos e proteger seu bolso.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 pt-6">
              <button
                onClick={onStart}
                className="group relative w-full sm:w-auto overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-8 px-20 rounded-[2.5rem] text-lg shadow-2xl shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-4"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
                <div className="flex flex-col items-start leading-tight text-left">
                    <span className="text-sm opacity-80 font-normal uppercase tracking-widest">Iniciar Questionário</span>
                    <span className="text-2xl">FAZER TESTE RÁPIDO</span>
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">Prático • 100% Gratuito • Leva menos de 1 minuto</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE O GUIA SECTION --- */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-emerald-600 rounded-full">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">CONTEÚDO EXCLUSIVO</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-tight tracking-tight">
                Sobre o Guia <br/>
                <span className="text-emerald-600">Alimentação Inteligente: Como eu perdi 158 kg em 9 meses</span>
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                Desenvolvi este material especialmente para provar que você não precisa de métodos caros ou inacessíveis para ter resultados espetaculares. Este é o método prático que me permitiu <strong>perder 158 kg em apenas 9 meses</strong> e salvou a saúde da minha família inteira, reduzindo drasticamente nossos gastos com alimentação no supermercado.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-emerald-600">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Foco na Realidade</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Técnicas acessíveis, adaptadas à rotina de quem tem pouquíssimo tempo.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-emerald-600">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Sem Restrições Severas</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Aprenda a focar no equilíbrio, sem o sofrimento das dietas tradicionais.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-600/5 rounded-[4rem] -rotate-3 -z-10"></div>
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-premium border border-slate-100 relative overflow-hidden">
              <h3 className="text-2xl font-serif font-bold text-slate-950 mb-8 self-start">O que você vai dominar com este Guia:</h3>
              <ul className="space-y-6">
                {[
                  "As exatas substituições baratas que sustentaram meu emagrecimento de 158 kg em 9 meses",
                  "Como gastar até 3x menos no supermercado comendo de forma muito mais nutritiva",
                  "O plano prático para resgatar exames ótimos de colesterol, glicose e pressão",
                  "Como vencer a fome emocional e o vício alimentar com alimentos simples de feira",
                  "Cronogramas práticos de preparo adaptados para quem tem uma rotina corrida"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-slate-700 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <button
                  onClick={onStart}
                  className="w-full bg-slate-950 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-all shadow-md active:scale-95"
                >
                  Fazer Diagnóstico Grátis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO HISTÓRIA DE SUPERAÇÃO REAL --- */}
      <section className="py-24 px-6 bg-white relative overflow-hidden border-t border-slate-100" id="historia-superacao">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-emerald-50/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-50/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full">
              <Heart className="w-4 h-4 fill-emerald-500 text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">História de Superação Real</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
              Por trás deste guia existe uma história que eu nunca pensei que contaria publicamente
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-100/80 rounded-[3.5rem] p-8 md:p-14 space-y-8 shadow-sm">
            
            {/* Highlighted banner */}
            <div className="p-6 bg-emerald-600 text-white rounded-[2rem] text-center space-y-2 shadow-lg shadow-emerald-950/15">
              <span className="text-xs uppercase tracking-widest font-black opacity-80">A Jornada do Autor</span>
              <p className="text-xl md:text-3xl font-serif font-black">
                Há pouco mais de 9 meses, eu pesava 158 kg.
              </p>
            </div>

            <div className="space-y-6 text-slate-700 font-light text-base md:text-lg leading-relaxed">
              <p>
                Não era só o peso na balança que pesava — era a culpa, o cansaço, a falta de disposição para fazer coisas simples. Subir uma escada era difícil. Me olhar no espelho era difícil. E o pior: eu via minha família passando pelo mesmo.
              </p>
              
              <p>
                Meus pais estavam com a saúde fragilizada. Colesterol alto, pressão descontrolada, cansaço constante. O médico foi direto: precisam mudar a alimentação urgentemente. Mas quando fomos ao supermercado procurar os tais alimentos "saudáveis", "integrais" e "fit" que as embalagens prometiam — o preço derrubou qualquer esperança. Não fechava no orçamento. Simples assim.
              </p>

              <p>
                Foi aí que eu decidi que a situação não podia continuar. Não por força de vontade sobrenatural. Foi por necessidade mesmo. Eu não tinha dinheiro para academia, nem para nutricionista particular, nem para comprar produto importado. Tinha ovos, feijão, frango, verdura de feira e muito tempo de pesquisa nas madrugadas.
              </p>

              <p>
                Passei semanas estudando, testando, errando e ajustando. Muita coisa não funcionou de primeira. Teve semana que eu achei que estava indo bem e a balança não se mexeu. Teve dia que eu comi errado e me senti um fracasso. Mas continuei. Aos poucos, a alimentação da casa foi mudando. Não de uma vez — devagar, uma refeição por vez, uma semana por vez.
              </p>
            </div>

            {/* Results Callout */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 space-y-6">
              <h3 className="text-lg md:text-xl font-bold font-serif text-slate-950">
                Em 9 meses aconteceu algo que eu não esperava tão rápido:
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-slate-600 font-light text-sm md:text-base">
                    Emagreci de forma consistente saindo de 158 kg para um peso que me permite viver com mais disposição e saúde.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-slate-600 font-light text-sm md:text-base">
                    Meus pais melhoraram os exames de colesterol, glicose e pressão arterial de forma espetacular.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-slate-600 font-light text-sm md:text-base">
                    A família inteira passou a comer melhor, gastando o mesmo ou até menos do que antes no supermercado.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-50 text-center italic text-emerald-700 font-semibold text-sm">
                "Não foi mágica. Foi método. E foi lento. Mas foi real."
              </div>
            </div>

            <div className="space-y-6 text-slate-700 font-light text-base md:text-lg leading-relaxed">
              <p>
                Esse guia é exatamente o que eu gostaria de ter tido quando comecei. Tudo que aprendi nesse processo — os acertos, os erros, as combinações de alimentos baratos que funcionam de verdade — está aqui, organizado de forma simples para qualquer pessoa conseguir aplicar.
              </p>
              
              <p>
                Se eu, com 158 kg, sem dinheiro para academia e com uma família inteira para ajudar, consegui — acredito que você também consegue.
              </p>
            </div>

            {/* Author sign off */}
            <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-slate-500 font-light text-sm italic">
                  Escrito com a honestidade de quem viveu essa história na cozinha de casa.
                </p>
                <p className="text-slate-950 font-serif font-bold text-lg mt-1">
                  Com carinho — O Autor 💙
                </p>
              </div>

              {/* Badges part of requested text */}
              <div className="flex flex-col gap-3 shrink-0">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold bg-emerald-50 px-4 py-2 rounded-xl">
                  <span className="text-lg">💚</span>
                  <div>
                    <span className="block font-bold">Comunidade Viva</span>
                    <span className="block font-light text-[10px] text-slate-500">Não te vendemos um livro e sumimos. Você faz parte de um ideal de saúde real.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold bg-slate-100 px-4 py-2 rounded-xl">
                  <span className="text-lg">✍️</span>
                  <div>
                    <span className="block font-bold">Independência Editorial</span>
                    <span className="block font-light text-[10px] text-slate-500">Escrito com a honestidade de quem viveu a dor na cozinha de casa.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Dynamic Banner block requesting to purchase or take action */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200/80 shadow-xl max-w-3xl mx-auto space-y-6 text-center transform hover:scale-[1.01] transition-transform duration-300">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center rounded-2xl mx-auto mb-4 text-xl shadow-inner shadow-amber-100/50">
              💡
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-bold font-serif text-slate-950">
                Uma escolha honesta para a sua vida:
              </h4>
              <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Adquirir este e-book por apenas <strong className="text-emerald-600 font-bold">R$ 22,89</strong> é investir em informação que vai economizar muito mais do que isso nas suas feiras ao longo do ano — e ainda apoiar uma família real, não uma grande corporação.
              </p>
              <p className="text-emerald-700 font-medium text-sm">
                Sua saúde e a da sua família merecem esse cuidado.
              </p>
              <p className="text-slate-400 text-xs tracking-wider uppercase font-semibold">
                Acesso imediato e seguro via e-mail.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onStart}
                className="group relative inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 px-10 rounded-[2rem] shadow-lg shadow-emerald-100 transition-all active:scale-95 border-none outline-none overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
                <span>Garantir Guia & Começar Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO O QUE VOCÊ RECEBE COM SEGURANÇA --- */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-emerald-50/50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-green-50/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Acesso Seguro & Imediato</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              O que você recebe imediatamente após a compra
            </h2>
            <p className="text-slate-600 font-light max-w-3xl mx-auto text-lg leading-relaxed">
              Tenha acesso imediato em seu e-mail ao material didático mais prático do mercado, desenhado para caber na sua rotina e no bolso.
            </p>
          </div>

          {/* --- NOVO CARROUSSEL DE ITENS COM DIGITAÇÃO & AUTO-PASS DE 20S --- */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes progress-bar {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            .animate-progress {
              animation: progress-bar 20s linear forwards;
            }
          `}} />

          <div className="max-w-2xl mx-auto mb-16">
            {/* Carousel Control Buttons (On Top) */}
            <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-full border border-slate-100 shadow-sm mb-6">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-slate-600 hover:text-emerald-700 transition-all flex items-center justify-center shrink-0 active:scale-95 cursor-pointer shadow-sm outline-none"
                title="Item Anterior"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              
              <div className="flex flex-col items-center select-none text-center">
                <span className="text-[9px] font-black tracking-[0.25em] uppercase text-slate-400">Você Receberá</span>
                <span className="text-xs font-black text-slate-700 font-mono mt-0.5">
                  Item {currentSlide + 1} de {checkoutItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-slate-600 hover:text-emerald-700 transition-all flex items-center justify-center shrink-0 active:scale-95 cursor-pointer shadow-sm outline-none"
                title="Próximo Item"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Main Carousel Card with Typewriter Effect */}
            <div 
              key={currentSlide}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-premium flex flex-col justify-between min-h-[360px] sm:min-h-[300px] md:min-h-[280px] transition-all duration-350 hover:shadow-xl relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full select-none">
                    {checkoutItems[currentSlide].tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium select-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Baixar Imediato
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold font-serif text-slate-950 leading-snug flex items-center gap-3">
                    <span className="text-2xl shrink-0 select-none leading-none">{checkoutItems[currentSlide].icon}</span>
                    <TypewriterText text={checkoutItems[currentSlide].title} speed={12} />
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
                    <TypewriterText text={checkoutItems[currentSlide].description} speed={6} />
                  </p>
                </div>
              </div>

              {/* Automatic Progress Bar Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="flex items-center justify-between mb-2 text-[10px] uppercase font-black tracking-wider text-slate-400 select-none">
                  <span>Carregando próximo recurso...</span>
                  <span className="font-mono text-emerald-600 font-bold">20s</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    key={currentSlide}
                    className="h-full bg-emerald-500 rounded-full origin-left animate-progress"
                    style={{ animationDuration: '20s', animationTimingFunction: 'linear', animationFillMode: 'forwards' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Highlight Box */}
          <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-slate-200/60 max-w-3xl mx-auto shadow-premium text-center space-y-8 relative overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-emerald-600">
                💚 Tudo isso por apenas R$ 22,89
              </h3>
              <p className="text-slate-600 font-light text-base leading-relaxed max-w-xl mx-auto">
                Um investimento menor do que muitos pedidos de delivery e que pode ajudar você e sua família a economizar de verdade durante anos!
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl max-w-sm mx-auto flex items-center justify-center gap-3 border border-slate-100">
              <Lock className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider leading-relaxed">
                🔒 Garantia Incondicional de 7 Dias:<br/>
                <span className="font-light text-[11px] capitalize text-slate-400">Experimente com total tranquilidade.</span>
              </p>
            </div>

            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 px-12 rounded-[2rem] shadow-xl shadow-emerald-100 transition-all active:scale-95 border-none outline-none overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
              <span>Quero Garantir Tudo Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO DEPOIMENTOS --- */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-emerald-50/40 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[50%] bg-green-50/40 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full">
              <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Avaliações Sinceras</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              O que dizem os leitores
            </h2>
            <p className="text-slate-600 font-light max-w-2xl mx-auto text-base">
              Depoimentos reais de pessoas que adquiriram e aplicaram o material.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonialsList.slice(0, visibleTestimonials).map((t, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="flex gap-1 select-none">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < t.stars ? 'key-star fill-emerald-500 text-emerald-500' : 'text-slate-200 fill-slate-150'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200/50">
                  <h4 className="font-serif font-bold text-slate-950">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {t.age} anos • {t.city} - {t.state}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Button Bar (Load More + Submit Testimonial) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            {visibleTestimonials < testimonialsList.length && (
              <button 
                type="button"
                onClick={() => setVisibleTestimonials(prev => Math.min(prev + 6, testimonialsList.length))}
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-850 rounded-full text-sm font-bold transition-all active:scale-95 shadow-sm border border-emerald-150"
              >
                <span>Ver Mais Depoimentos ({testimonialsList.length - visibleTestimonials} restantes)</span>
              </button>
            )}

            <button 
              onClick={() => setShowTestimonialModal(true)}
              className="inline-flex items-center gap-3 px-8 py-4 lg:px-9 border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:bg-slate-50 hover:text-slate-950 transition-all active:scale-95 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Dar Depoimento ou Sugestão</span>
            </button>
          </div>

          {/* Metrics Grid with Price Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Metric 1 */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">100%</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Seguro & Digital</h4>
                  <p className="text-slate-400 text-xs mt-1">Acesso imediato e criptografia de ponta.</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">21+</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Famílias Impactadas</h4>
                  <p className="text-slate-400 text-xs mt-1">Resultados consistentes no prato de casa.</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">7 dias</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Garantia Total</h4>
                  <p className="text-slate-400 text-xs mt-1">Sem letras miúdas, riscar riscos de vez.</p>
                </div>
              </div>
            </div>

            {/* Price block */}
            <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] font-bold px-4 py-1.5 uppercase tracking-wider rounded-bl-2xl">
                Oportunidade
              </div>
              <p className="text-slate-400 text-sm line-through mb-1">R$ 47,99</p>
              <div className="flex items-baseline gap-1">
                <span className="text-slate-400 text-base font-light">Por apenas</span>
                <span className="text-3xl md:text-4xl font-black text-emerald-600">R$ 22,89</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 font-semibold uppercase tracking-wider">Sem Taxas Ocultas</p>
              <button 
                onClick={onStart}
                className="w-full mt-6 bg-slate-950 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-all shadow-md active:scale-95 text-xs tracking-wider uppercase"
              >
                Garantir Meu Acesso
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO DECISÃO INTELIGENTE E TRANSPARENTE --- */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100" id="decisao-transparente">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] right-[-10%] w-[55%] h-[55%] bg-slate-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] bg-emerald-50/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200/50 text-slate-800 rounded-full">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Decisão Inteligente & Transparente</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Este Guia Prático é para você?
            </h2>
            <p className="text-slate-600 font-light max-w-3xl mx-auto text-lg leading-relaxed">
              Quero que sua compra seja 100% consciente. Veja com honestidade se o seu objetivo se alinha com o método real que testei na minha casa.
            </p>
          </div>

          {/* Comparativo de duas colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            
            {/* Esse guia É perfeito para... */}
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-emerald-500/10 shadow-sm hover:shadow-md transition-all duration-300 space-y-10">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full">
                  <ThumbsUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider">Esse guia É perfeito para...</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-slate-950">
                  Pessoas que buscam saúde real e economia no prato de casa
                </h3>
              </div>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Quem quer economizar de verdade no supermercado</h4>
                    <p className="text-slate-500 font-light text-sm mt-1 leading-relaxed">
                      Para quem percebeu que as compras estão caras e deseja aprender a substituir mercadorias superfaturadas por refeições simples de feira que alimentam com o triplo de nutrientes gastando muito menos.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Quem não consegue (ou não quer) seguir dietas caras e complexas</h4>
                    <p className="text-slate-500 font-light text-sm mt-1 leading-relaxed">
                      Chega de receitas complicadas com ingredientes de nomes esquisitos. Nosso cronograma foca em alimentos básicos nacionais (ovos, saladas, legumes locais, carnes comuns) que você encontra em qualquer mercadinho de bairro. No mercado comum, você vai fazer milagres.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Quem deseja melhorar a alimentação de toda a família</h4>
                    <p className="text-slate-500 font-light text-sm mt-1 leading-relaxed">
                      Seus pais ou as pessoas na sua casa andam sem energia, enfrentando colesterol, gordura no fígado ou pressão desregulada? Esse método foi criado no colo da cozinha familiar exatamente para resgatar exames normais com amor e comida limpa.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Quem tem pouco tempo e uma rotina corrida</h4>
                    <p className="text-slate-500 font-light text-sm mt-1 leading-relaxed">
                      Não exigimos que você vire refém do fogão. As substituições e preparos práticos são organizados para durar poucos minutos, garantindo que você coma de forma inteligente mesmo se tiver uma rotina exaustiva de trabalho ou estudos.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">Quem quer reatar a saúde sem custos de academia</h4>
                    <p className="text-slate-500 font-light text-sm mt-1 leading-relaxed">
                      Comece exatamente onde você está hoje, sem ser forçado a comprar mensalidades absurdamente caras. Mostramos como a alteração certa de pratos e hábitos diários elementares é responsável por 80% do resultado do nosso bem-estar físico.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Esse guia NÃO é para... */}
            <div className="bg-slate-100/50 p-8 md:p-12 rounded-[3.5rem] border border-rose-500/10 shadow-sm space-y-8">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-700 rounded-full">
                  <ThumbsDown className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-wider">Esse guia NÃO é para...</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-slate-950">
                  Seja honesto consigo mesmo antes de comprar
                </h3>
              </div>

              {/* Bloco de Não Adequação */}
              <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-rose-100 space-y-4 shadow-sm">
                <div className="flex gap-3 items-center text-rose-600">
                  <AlertTriangle className="w-6 h-6 shrink-0" />
                  <h4 className="font-extrabold text-slate-950 uppercase text-xs tracking-wider">
                    NÃO É PARA QUEM PROCURA SOLUÇÕES MILAGROSAS
                  </h4>
                </div>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Se você acredita em pílulas mágicas que derretem gordura dormindo, shakes industriais milagrosos que prometem emagrecer 10 kg em uma semana sem esforço, ou se está em busca de chás "seca-barriga" misteriosos, <strong className="text-rose-600 font-semibold">por favor, não adquira este guia.</strong>
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <p className="text-slate-700 font-medium text-sm leading-relaxed relative pl-4 border-l-2 border-slate-300">
                  Comer saudável de forma barata exige mudar as escolhas certas no mercado e preparar sua comida simples com inteligência nutritiva.
                </p>

                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  O método que me permitiu sair dos 158 kg e mudou os exames dos meus pais é sustentável, extremamente econômico e comprovado por quem viveu a dor na sola do sapato — mas exige atitude honesta de aplicar o passo a passo.
                </p>

                {/* Quote Box */}
                <div className="bg-rose-50/30 p-6 md:p-8 rounded-[2rem] border border-dashed border-rose-200/50 text-center relative">
                  <span className="absolute -top-4 left-6 text-5xl font-serif text-rose-200 select-none">“</span>
                  <p className="text-rose-700 font-serif italic text-base relative z-10 leading-relaxed font-semibold">
                    "Prefiro perder uma venda do que decepcionar alguém que busca atalhos mentirosos."
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Compromisso de Valor (Base) */}
          <div className="bg-emerald-600 rounded-[3.5rem] p-10 md:p-14 text-white text-center space-y-8 relative overflow-hidden shadow-2xl shadow-emerald-900/10">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-white rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[120%] bg-teal-200 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700/50 backdrop-blur-sm rounded-full">
                <ShieldCheck className="w-4 h-4 text-emerald-350" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-250">Garantia Integridade Comercial</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-black">
                Compromisso de Valor
              </h3>
              <p className="text-emerald-50 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                Pelo custo irrisório de <strong className="font-bold underline decoration-emerald-300">R$ 22,89</strong>, você obtém um segredo prático que protege seu bolso das falsas promessas e economiza ao longo do tempo
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <button
                onClick={onStart}
                className="group relative inline-flex items-center gap-4 bg-white hover:bg-slate-50 text-slate-950 font-bold py-6 px-12 rounded-[2rem] shadow-xl shadow-emerald-850/20 transition-all active:scale-95 border-none outline-none overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
                <span>Começar Diagnóstico Grátis</span>
                <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO FAQ --- */}
      <section className="py-24 px-6 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/5 rounded-full">
              <Info className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em]">Tire Suas Dúvidas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-950 tracking-tight">Perguntas Frequentes</h2>
            <p className="text-slate-500 font-light max-w-xl mx-auto">Entenda melhor como o material e este quiz funcionam para você.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center outline-none focus:bg-slate-100/50"
                >
                  <span className="font-serif font-bold text-slate-950 text-lg md:text-xl">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${openFaq === index ? 'rotate-180 text-emerald-600' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 animate-fade-in-down">
                    <p className="text-slate-600 leading-relaxed text-sm font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 px-12 rounded-[2rem] shadow-xl shadow-emerald-100 transition-all active:scale-95"
            >
              Começar Teste Rápido
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-center px-6">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-sm">© {new Date().getFullYear()} Alimentação Inteligente: Como eu perdi 158 kg em 9 meses. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-500">Este questionário é um teste de hábitos básicos para fins de sugestão informativa e não substitui uma consulta médica ou nutricional personalizada.</p>
        </div>
      </footer>

      {/* --- MODAL DE DEPOIMENTOS / MINI QUESTIONÁRIO --- */}
      {showTestimonialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
            onClick={isSubmittingTestimonial ? undefined : handleResetTestimonial}
          ></div>

          {/* Modal Card */}
          <div className="bg-white rounded-[3rem] w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 animate-scale-up max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h3 className="font-serif font-black text-lg md:text-xl text-slate-950">Dar Depoimento ou Sugestão</h3>
              </div>
              <button 
                type="button"
                onClick={handleResetTestimonial}
                disabled={isSubmittingTestimonial}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors flex items-center justify-center border-none outline-none disabled:opacity-50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-8">
              {!isTestimonialSubmitted ? (
                <form onSubmit={handleTestimonialSubmit} className="space-y-6">
                  
                  {/* Nome */}
                  <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                      Meu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={testimonialForm.name}
                      onChange={(e) => setTestimonialForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ex: Mariana Souza"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-slate-800 text-sm placeholder-slate-400 font-light"
                    />
                  </div>

                  {/* Informações Pessoais Grelha */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Idade */}
                    <div className="space-y-2">
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                        Minha Idade
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="120"
                        value={testimonialForm.age}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, age: e.target.value }))}
                        placeholder="Ex: 34"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-slate-800 text-sm placeholder-slate-400 font-light"
                      />
                    </div>

                    {/* Cidade */}
                    <div className="space-y-2">
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                        Cidade
                      </label>
                      <input
                        type="text"
                        required
                        value={testimonialForm.city}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="Ex: Santos"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-slate-800 text-sm placeholder-slate-400 font-light"
                      />
                    </div>

                    {/* Estado */}
                    <div className="space-y-2">
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                        Estado (UF)
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={2}
                        value={testimonialForm.state}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, state: e.target.value.toUpperCase() }))}
                        placeholder="Ex: SP"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-slate-800 text-sm placeholder-slate-400 font-light"
                      />
                    </div>
                  </div>

                  {/* Estrelas */}
                  <div className="space-y-2 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                      Quantas estrelas você dá para o e-book? (5 de 5)
                    </label>
                    <div className="mt-2 flex items-center gap-3">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setTestimonialForm(prev => ({ ...prev, stars: starValue }))}
                          className="focus:outline-none transition-transform active:scale-95 group-hover:scale-105"
                        >
                          <Star
                            className={`w-8 h-8 cursor-pointer transition-all ${
                              starValue <= testimonialForm.stars
                                ? 'fill-emerald-500 text-emerald-500 drop-shadow'
                                : 'text-slate-350 hover:text-emerald-400'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-black text-slate-600 bg-white shadow-sm px-4 py-1.5 rounded-full border border-slate-100 ml-2">
                        {testimonialForm.stars === 0 ? '0 Estrelas' : `${testimonialForm.stars} ${testimonialForm.stars === 1 ? 'Estrela' : 'Estrelas'}`}
                      </span>
                    </div>
                  </div>

                  {/* O que mais gostou */}
                  <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                      O que você mais gostou no material?
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={testimonialForm.likes}
                      onChange={(e) => setTestimonialForm(prev => ({ ...prev, likes: e.target.value }))}
                      placeholder="Ex: Gostei muito das dicas realistas que não sugerem ingredientes caros e que ajudam a economizar..."
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-slate-800 text-sm placeholder-slate-400 font-light h-24 resize-none"
                    />
                  </div>

                  {/* Melhorias */}
                  <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                      O que você criaria ou adicionaria para melhorar?
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={testimonialForm.suggestions}
                      onChange={(e) => setTestimonialForm(prev => ({ ...prev, suggestions: e.target.value }))}
                      placeholder="Ex: Sugiro criarem uma tabela simples de substituições rápidas no próximo volume..."
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-slate-800 text-sm placeholder-slate-400 font-light h-24 resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmittingTestimonial}
                      className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/80 text-white font-bold rounded-[2rem] shadow-xl shadow-emerald-900/10 transition-all active:scale-[0.98] flex items-center justify-center gap-3 border-none outline-none"
                    >
                      {isSubmittingTestimonial ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span className="font-extrabold text-[13px] tracking-wider uppercase">Enviando depoimentos para análise...</span>
                        </>
                      ) : (
                        <span className="font-extrabold text-[13px] tracking-wider uppercase">Enviar Depoimento para Análise</span>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* Tela de Sucesso */
                <div className="py-10 text-center space-y-8 animate-[fadeIn_0.5s_ease_out]">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-10 h-10 stroke-[3.5]" />
                  </div>
                  
                  <div className="space-y-4 max-w-md mx-auto">
                    <h4 className="text-2xl font-serif font-black text-slate-950">
                      Agradecemos o seu envio!
                    </h4>
                    <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                      O depoimento do cliente está sendo carregado e passará por uma análise até ser adicionado ao site.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={handleResetTestimonial}
                      className="flex-1 px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-xs uppercase tracking-wider transition-all active:scale-95 border-none outline-none"
                    >
                      Voltar para a página principal
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleResetTestimonial();
                        onStart();
                      }}
                      className="flex-1 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10 transition-all active:scale-95 border-none outline-none"
                    >
                      Fazer quiz agora
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default LandingPage;
