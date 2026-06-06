import { Question, FAQItem } from './types';

export const BACKGROUND_GRADIENTS = [
  'bg-gradient-to-br from-emerald-50 to-green-50',
  'bg-gradient-to-br from-green-50 to-emerald-50',
  'bg-gradient-to-br from-emerald-50 to-slate-100',
];

export const INSTAGRAM_URL = "https://www.instagram.com";
export const WHATSAPP_URL = "https://pay.hoopay.com.br/?productId[]=313034586501248&qty[]=1";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Como você avalia sua alimentação atualmente?",
    options: [
      { id: 'A', text: "Muito saudável", value: 'a', points: 0 },
      { id: 'B', text: "Mais ou menos", value: 'b', points: 1 },
      { id: 'C', text: "Poderia melhorar bastante", value: 'c', points: 2 },
      { id: 'D', text: "Não faço ideia do que estou fazendo", value: 'd', points: 3 },
    ]
  },
  {
    id: 2,
    question: "Você sente algum destes problemas?",
    options: [
      { id: 'A', text: "Falta de energia", value: 'a', points: 0 },
      { id: 'B', text: "Vontade frequente de doces", value: 'b', points: 1 },
      { id: 'C', text: "Inchaço", value: 'c', points: 2 },
      { id: 'D', text: "Nenhum dos anteriores", value: 'd', points: 3 },
    ]
  },
  {
    id: 3,
    question: "Você já tentou melhorar sua alimentação antes?",
    options: [
      { id: 'A', text: "Nunca tentei", value: 'a', points: 0 },
      { id: 'B', text: "Tentei e desisti", value: 'b', points: 1 },
      { id: 'C', text: "Tentei várias vezes sem sucesso", value: 'c', points: 2 },
      { id: 'D', text: "Estou conseguindo sozinho", value: 'd', points: 3 },
    ]
  },
  {
    id: 4,
    question: "Qual sua maior dificuldade hoje?",
    options: [
      { id: 'A', text: "Falta de conhecimento", value: 'a', points: 0 },
      { id: 'B', text: "Falta de tempo", value: 'b', points: 1 },
      { id: 'C', text: "Falta de organização", value: 'c', points: 2 },
      { id: 'D', text: "Não tenho dificuldades", value: 'd', points: 3 },
    ]
  },
  {
    id: 5,
    question: "Você acredita que alimentação influencia diretamente:",
    options: [
      { id: 'A', text: "Peso corporal", value: 'a', points: 1 },
      { id: 'B', text: "Energia diária", value: 'b', points: 1 },
      { id: 'C', text: "Saúde geral", value: 'c', points: 1 },
      { id: 'D', text: "Todas as opções acima", value: 'd', points: 3 },
    ]
  },
  {
    id: 6,
    question: "Se existisse um material simples mostrando exatamente por onde começar, você teria interesse?",
    options: [
      { id: 'A', text: "Sim, imediatamente", value: 'a', points: 0 },
      { id: 'B', text: "Talvez", value: 'b', points: 1 },
      { id: 'C', text: "Dependendo do preço", value: 'c', points: 2 },
      { id: 'D', text: "Não tenho interesse", value: 'd', points: 3 },
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "O que é o E-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses?",
    answer: "É um e-book prático desenvolvido para ajudar você a melhorar seus hábitos alimentares passo a passo, baseando-se no método real que me permitiu vencer a obesidade mórbida perdendo 158 kg em 9 meses."
  },
  {
    question: "Para quem é indicado este guia?",
    answer: "Para quem quer ter mais disposição, manter o peso sob controle ou desenvolver hábitos saudáveis, mesmo que tenha pouco tempo e não saiba por onde começar."
  },
  {
    question: "Preciso comprar ingredientes caros ou raros?",
    answer: "Absolutamente não! O guia foca em alimentos acessíveis que você encontra em qualquer supermercado ou feira local, valorizando a simplicidade e a economia."
  },
  {
    question: "Vou precisar passar horas cozinhando?",
    answer: "O guia traz estratégias de organização simples para que você prepare de forma rápida e prática suas refeições diárias."
  },
  {
    question: "Como recebo o acesso ao Guia?",
    answer: "Após a aprovação do pagamento, você receberá instantaneamente os dados de acesso em seu e-mail de compra para ler e aplicar em qualquer dispositivo."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim! O pagamento é realizado através de uma plataforma integrada criptografada, 100% segura que aceita Cartão de Crédito, Pix e boleto."
  }
];
