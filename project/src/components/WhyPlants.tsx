import { useEffect, useRef } from 'react';
import { Brain, Zap, Wind, Eye, Heart } from 'lucide-react';

export default function WhyPlants() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 reveal">
          <div className="section-divider" />
          <p className="text-xs text-emerald-400 tracking-widest uppercase mb-3 font-medium">
            Por qué importa
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Ciencia detrás de cada{' '}
            <span className="gradient-text italic">hoja verde</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl leading-relaxed">
            No es decoración. Es bienestar medible. Las plantas transforman espacios de trabajo en entornos que potencian el rendimiento humano.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 reveal">
            <div className="glass-card h-full p-8 relative overflow-hidden group hover:border-emerald-500/20 transition-colors">
              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Brain className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex items-end gap-3 mb-3">
                <span className="font-display text-6xl font-semibold text-white">37%</span>
                <span className="text-emerald-400 text-sm mb-2">menos estrés</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Reduce el Estrés Académico</h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                Estudios de la Universidad de Exeter demuestran que las plantas reducen el cortisol hasta un 37% en espacios de trabajo cerrados, mejorando el estado emocional y la claridad mental.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="tag-pill">Neurociencia</span>
                <span className="tag-pill">Bienestar</span>
              </div>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="glass-card h-full p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-colors">
              <div className="mb-4 text-emerald-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <div className="font-display text-4xl font-semibold text-white mb-1">+15%</div>
              <div className="text-emerald-400 text-xs mb-3">productividad</div>
              <h3 className="text-base font-medium text-white mb-2">Mayor Productividad</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                Espacios verdes aumentan la concentración y rendimiento académico.
              </p>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="glass-card h-full p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-colors">
              <div className="mb-4 text-emerald-400 flex items-center justify-center">
                <Wind className="w-4 h-4" />
              </div>
              <div className="font-display text-4xl font-semibold text-white mb-1">60%</div>
              <div className="text-emerald-400 text-xs mb-3">menos toxinas</div>
              <h3 className="text-base font-medium text-white mb-2">Purifica el Aire</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                Filtran formaldehído, benceno y CO2 del aire interior.
              </p>
            </div>
          </div>

          {/* Medium card */}
          <div className="md:col-span-2 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card h-full p-8 relative overflow-hidden group hover:border-emerald-500/20 transition-colors flex gap-6">
              <div className="flex-1">
                <div className="mb-4 text-emerald-400 flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Transforma el Entorno Visual</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Cubículos con plantas generan una percepción de espacio más agradable y humano. El impacto visual es inmediato e inspira a los demás colaboradores.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="tag-pill">Diseño</span>
                  <span className="tag-pill">Ambiente</span>
                </div>
              </div>
              <div className="flex-1 hidden sm:block">
                <div className="mb-4 text-emerald-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Conexión Emocional</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Cuidar una planta genera responsabilidad, conexión con la naturaleza y satisfacción personal. Un &ldquo;Pacto Verde&rdquo; que transforma hábitos.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="tag-pill">Psicología</span>
                  <span className="tag-pill">Hábitos</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
