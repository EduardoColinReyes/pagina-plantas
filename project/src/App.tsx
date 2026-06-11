import { useState, useRef } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyPlants from './components/WhyPlants';
import Catalog from './components/Catalog';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<any>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleQuizComplete = (result: any) => {
    setQuizResult(result);
  };

  const handleScrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (target: string) => {
    // Ensure main view is visible
    setQuizResult(null);
    setShowQuiz(false);
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (target === 'catalog') catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  // navigation handler passed to Navbar

  const handleReturnToCatalog = () => {
    setQuizResult(null);
    setShowQuiz(false);
    setTimeout(() => catalogRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="bg-[#080e08] text-white overflow-x-hidden">
      <Cursor />
      <Navbar onQuizOpen={() => setShowQuiz(true)} onNavigate={handleNavigate} />

      {!showQuiz && !quizResult ? (
        <>
          <Hero onQuizOpen={() => setShowQuiz(true)} onCatalogScroll={handleScrollToCatalog} />
          <WhyPlants />
          <div ref={catalogRef}>
            <Catalog />
          </div>
          <Stats />
          <Footer />
        </>
      ) : quizResult ? (
        <>
          <QuizResult
            result={quizResult}
            onNewQuiz={() => { setQuizResult(null); setShowQuiz(true); }}
            onReturnToCatalog={handleReturnToCatalog}
          />
          <Footer />
        </>
      ) : (
        <Quiz onComplete={handleQuizComplete} onBack={() => setShowQuiz(false)} />
      )}
    </div>
  );
}
