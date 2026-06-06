
export interface Option {
  id: string;
  text: string;
  value: string;
  points: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface UserData {
  name: string;
  age: string;
}

export enum AppState {
  LANDING = 'LANDING',
  WELCOME = 'WELCOME',
  SECURITY = 'SECURITY',
  INTRO = 'INTRO',
  COUNTDOWN = 'COUNTDOWN',
  QUIZ = 'QUIZ',
  CALCULATING = 'CALCULATING',
  RESULT = 'RESULT',
}

export interface PopupConfig {
  isVisible: boolean;
  title: string;
  message: string;
  icon?: 'chart' | 'heart' | 'clock';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type SelectedAnswers = Record<number, string>;
