import React, { useState, useMemo } from 'react';
import { AppState, UserData, PopupConfig, SelectedAnswers } from './types';
import { QUESTIONS } from './constants';
import LandingPage from './components/LandingPage';
import WelcomeScreen from './components/WelcomeScreen';
import ResultScreen from './components/ResultScreen';
import CountdownScreen from './components/CountdownScreen';
import { IntroScreen, QuestionCard, ToastFeedback } from './components/QuizComponents';
import { Heart, ClipboardList } from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING);
  const [userData, setUserData] = useState<UserData>({ name: '', age: '' });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<SelectedAnswers>({});
  const [popupConfig, setPopupConfig] = useState<PopupConfig>({ isVisible: false, title: '', message: '' });

  const handleLandingStart = () => setAppState(AppState.WELCOME);
  
  const handleWelcomeComplete = (name: string, age: string) => {
    setUserData({ name, age });
    setAppState(AppState.INTRO);
  };

  const handleStartAnalysis = () => setAppState(AppState.COUNTDOWN);
  const handleCountdownComplete = () => setAppState(AppState.QUIZ);

  const handleSelectAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: value }));
  };

  const triggerToast = (config: Partial<PopupConfig>) => {
    setPopupConfig({ ...config, isVisible: true } as PopupConfig);
    setTimeout(() => setPopupConfig(prev => ({ ...prev, isVisible: false })), 5000);
  };

  const handleNext = () => {
    const selectedValue = answers[currentQuestionIndex];

    if (currentQuestionIndex === 2) {
      triggerToast({ message: "Seus hábitos alimentares estão ficando claros para nós. Uma nutrição equilibrada é saúde!" });
    }
    
    if (currentQuestionIndex === 4) {
      triggerToast({ message: "Sua visão sobre saúde está excelente. Quase lá!" });
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < QUESTIONS.length) {
      setCurrentQuestionIndex(nextIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setAppState(AppState.CALCULATING);
      setTimeout(() => {
        setAppState(AppState.RESULT);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 3000); // 3s para quiz rápido
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
  };

  if (appState === AppState.CALCULATING) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950 opacity-50"></div>
        <div className="relative z-10">
            <div className="mb-10 relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <ClipboardList className="w-16 h-16 text-emerald-500 mx-auto relative z-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6 tracking-tight">Analisando Hábitos Alimentares...</h2>
            <div className="max-w-xs mx-auto space-y-6">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-full animate-shine"></div>
                </div>
                <p className="text-slate-400 text-sm font-light italic leading-relaxed">
                  "Sincronizando suas respostas com as diretrizes do e-book Alimentação Inteligente: Como eu perdi 158 kg em 9 meses."
                </p>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-white relative overflow-x-hidden">
      {/* Degradê Global Suave */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"></div>
      
      <div className="relative z-10">
        <ToastFeedback config={popupConfig} />
        {appState === AppState.LANDING && <LandingPage onStart={handleLandingStart} />}
        {appState === AppState.WELCOME && <WelcomeScreen onComplete={handleWelcomeComplete} />}
        {appState === AppState.INTRO && <IntroScreen name={userData.name} onStart={handleStartAnalysis} />}
        {appState === AppState.COUNTDOWN && <CountdownScreen onComplete={handleCountdownComplete} />}
        {appState === AppState.QUIZ && (
          <div className="min-h-screen py-10 px-6 flex items-center justify-center relative">
            <QuestionCard
              question={QUESTIONS[currentQuestionIndex].question}
              options={QUESTIONS[currentQuestionIndex].options}
              currentStep={currentQuestionIndex}
              totalSteps={QUESTIONS.length}
              selectedAnswer={answers[currentQuestionIndex]}
              onSelect={handleSelectAnswer}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>
        )}
        {appState === AppState.RESULT && <ResultScreen userData={userData} answers={answers} />}
      </div>
    </div>
  );
};

export default App;