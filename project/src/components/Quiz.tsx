import { useRef, useState } from 'react';
import { quizQuestions, plants } from '../data/plants';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (result: any) => void;
  onBack: () => void;
}

export default function Quiz({ onComplete, onBack }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnimating(true);
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ < quizQuestions.length - 1) {
        setCurrentQ(currentQ + 1);
        setAnimating(false);
      } else {
        const result = calculateResult(newAnswers);
        onComplete(result);
      }
    }, 600);
  };

  const shuffle = <T,>(array: T[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const calculateResult = (answers: string[]) => {
    const scores = plants.map((plant) => {
      let score = 0;

      // Time in cubicle
      if (answers[0] === 'very_high') score += 20;
      else if (answers[0] === 'high') score += 15;
      else if (answers[0] === 'medium') score += 10;

      // Stress level
      if (answers[1] === 'very_high' && ['sansevieria', 'pothos'].includes(plant.id)) score += 15;
      if (answers[1] === 'high' && plant.stressRelief > 80) score += 10;

      // Light conditions
      if (answers[2] === 'full_sun' && plant.light.includes('Directa')) score += 15;
      if (answers[2] === 'artificial' && (plant.light.includes('Artificial') || plant.light.includes('baja'))) score += 15;
      if (answers[2] === 'low_light' && plant.careLevel === 'Fácil') score += 10;

      // Care frequency
      if (answers[3] === 'minimal' && parseInt(plant.waterDays) > 10) score += 15;
      if (answers[3] === 'weekly' && plant.careLevel !== 'Avanzado') score += 10;

      // Mood (moved to index 4 after removing one question)
      if (answers[4] === 'calming' && plant.stressRelief > 80) score += 10;
      if (answers[4] === 'energizing' && plant.mood === 'Energizante') score += 15;

      // Style (moved to index 5)
      if (answers[5] === 'modern' && plant.tags.includes('Minimalista')) score += 8;
      if (answers[5] === 'natural' && plant.tags.includes('Decorativa')) score += 5;

      // Experience (moved to index 6)
      if (answers[6] === 'none' && plant.careLevel === 'Fácil') score += 12;
      if (answers[6] === 'expert' && plant.careLevel !== 'Fácil') score += 8;

      return { plant, score };
    });

    const sorted = [...scores].sort((a, b) => b.score - a.score);
    const mainPlant = sorted[0].plant;

    const secondaryCandidates = sorted.slice(1, 5).map((item) => item.plant);
    const secondary = shuffle(secondaryCandidates).slice(0, 2);

    const remainingPlants = shuffle(
      sorted
        .slice(1)
        .map((item) => item.plant)
        .filter((plant) => !secondary.some((secondaryPlant) => secondaryPlant.id === plant.id))
    );

    return {
      mainPlant,
      secondary,
      otherPlants: remainingPlants,
    };
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-6 pt-24">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-white/40 font-medium">
              Pregunta {currentQ + 1} de {quizQuestions.length}
            </span>
            <span className="text-xs text-emerald-400 font-medium tracking-wide">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div ref={containerRef} className="mb-12">
          <div
            className={`transition-all duration-500 ${animating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-2">
              {question.question}
            </h2>
            <div className="section-divider mt-6 mb-8" />
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {question.options.map((option, idx) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              disabled={animating}
              className={`quiz-option glass-card p-6 rounded-2xl text-left border border-white/10 transition-all duration-300 disabled:opacity-50 ${
                animating ? 'pointer-events-none' : ''
              }`}
              style={{
                animation: animating ? `none` : `slideInUp 0.5s cubic-bezier(0.4,0,0.2,1) forwards`,
                animationDelay: animating ? '0' : `${idx * 0.1}s`,
              }}
            >
              <div className="text-2xl mb-3">{option.icon}</div>
              <div className="text-sm font-medium text-white">{option.label}</div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => {
              if (currentQ > 0) {
                setCurrentQ(currentQ - 1);
                setAnswers(answers.slice(0, -1));
              } else {
                onBack();
              }
            }}
            className="btn-secondary flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Atrás
          </button>

          <div className="text-xs text-white/40">
            {currentQ + 1} / {quizQuestions.length}
          </div>

          {currentQ === quizQuestions.length - 1 && (
            <button
              onClick={() => {
                const result = calculateResult(answers);
                onComplete(result);
              }}
              className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm"
            >
              Ver Resultado
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
