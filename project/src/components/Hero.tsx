import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import hero1 from '../assets/pothos.jpg';
import hero2 from '../assets/sansevieria.jpg';
import hero3 from '../assets/chlorophytum.webp';

interface HeroProps {
  onQuizOpen: () => void;
  onCatalogScroll: () => void;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 8,
  opacity: Math.random() * 0.4 + 0.1,
}));

export default function Hero({ onQuizOpen, onCatalogScroll }: HeroProps) {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const phrases = ['concentración.', 'bienestar.', 'creatividad.', 'calma.'];
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const type = () => {
      const phrase = phrases[phraseIdx.current];
      if (!deleting.current) {
        if (charIdx.current < phrase.length) {
          setTypedText(phrase.slice(0, charIdx.current + 1));
          charIdx.current++;
        } else {
          deleting.current = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        if (charIdx.current > 0) {
          setTypedText(phrase.slice(0, charIdx.current - 1));
          charIdx.current--;
        } else {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting.current ? 90 : 130);
    };
    const timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="animated-bg relative min-h-screen flex items-center justify-center overflow-hidden pb-10"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-700/5 blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-emerald-400 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `floatAnim ${p.duration}s ease-in-out infinite`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}

      {/* Decorative plant elements */}
      <div className="absolute top-20 right-16 pointer-events-none float-1 hidden lg:block">
        <div className="w-64 h-64 rounded-2xl glass border border-emerald-500/10 overflow-hidden">
          <img
            src={hero1}
            alt="Decoración verde"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080e08]/80" />
        </div>
      </div>

      <div className="absolute bottom-32 left-12 pointer-events-none float-2 hidden lg:block">
        <div className="w-48 h-48 rounded-2xl glass border border-emerald-500/10 overflow-hidden">
          <img
            src={hero2}
            alt="Decoración verde"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080e08]/80" />
        </div>
      </div>

      <div className="absolute top-1/3 left-8 pointer-events-none float-3 hidden xl:block">
        <div className="w-36 h-36 rounded-full glass border border-emerald-500/10 overflow-hidden">
          <img
            src={hero3}
            alt="Decoración verde"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 glass border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8 transition-all duration-700 ${false ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
        </div>

        {/* Heading */}
        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Transforma tu
          <br />
          <span className="gradient-text font-semibold italic">cubículo</span>
          <br />
          en un espacio de
          <br />
          <span className="text-emerald-300/90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {typedText}
            <span className="blink text-emerald-400">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Plantas inteligentes para mejorar concentración, bienestar y creatividad
          dentro de la universidad. Cada planta, seleccionada para tu espacio.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <button
            onClick={onCatalogScroll}
            className="btn-primary flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-medium"
          >
            <Leaf className="w-4 h-4" />
            Explorar Plantas
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onQuizOpen}
            className="btn-secondary flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Descubrir mi Planta Ideal
          </button>
        </div>

      </div>
    </section>
  );
}
