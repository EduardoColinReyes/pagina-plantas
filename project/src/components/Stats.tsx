import { useEffect, useRef } from 'react';
import { TrendingUp, Users, Leaf, Wind } from 'lucide-react';

const statistics = [
  {
    icon: Users,
    value: '180+',
    label: 'Colaboradores beneficiados',
    description: 'Estudiantes y docentes en TUVCH',
    color: 'emerald',
  },
  {
    icon: Leaf,
    value: '7',
    label: 'Especies adaptadas',
    description: 'Seleccionadas para cubículos TUVCH',
    color: 'green',
  },
  {
    icon: Wind,
    value: '60%',
    label: 'Reducción de toxinas',
    description: 'En calidad de aire interior',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    value: '37%',
    label: 'Menos estrés',
    description: 'Según estudios científicos',
    color: 'emerald',
  },
];

const impacts = [
  {
    title: 'Calidad del Aire',
    metric: '+89%',
    description: 'Purificación de toxinas ambientales por oxigenación nocturna de especies seleccionadas.',
  },
  {
    title: 'Productividad',
    metric: '+15%',
    description: 'Aumento de concentración y rendimiento académico en espacios con presencia de plantas.',
  },
  {
    title: 'Bienestar Mental',
    metric: '+28%',
    description: 'Reducción de ansiedad y mejora del estado emocional en colaboradores universitarios.',
  },
  {
    title: 'Satisfacción',
    metric: '+42%',
    description: 'Mayor sensación de conexión con el espacio y responsabilidad ambiental compartida.',
  },
];

export default function Stats() {
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
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .stat-card');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-emerald-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 reveal text-center">
          <div className="flex justify-center mb-4">
            <div className="section-divider" />
          </div>
          <p className="text-xs text-emerald-400 tracking-widest uppercase mb-3 font-medium">
            Impacto medible
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-4 max-w-2xl mx-auto">
            Números que <span className="gradient-text italic">hablan solos</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Datos verificables sobre el impacto de plantas en bienestar, productividad y sostenibilidad ambiental.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statistics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="reveal stat-card glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/20 transition-all"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-display text-3xl font-semibold text-white mb-1">{stat.value}</div>
                <h3 className="text-sm font-medium text-white mb-2">{stat.label}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Impact Cards */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-white mb-8 reveal">
            Beneficios comprobados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impacts.map((impact, idx) => (
              <div
                key={impact.title}
                className="reveal glass-card p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all relative overflow-hidden group"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-medium text-white text-lg">{impact.title}</h3>
                    <div className="font-display text-3xl font-semibold text-emerald-400">{impact.metric}</div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{impact.description}</p>
                  <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                      style={{ animation: 'slideInUp 1.2s ease-out forwards' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="reveal glass-card p-12 rounded-3xl border border-white/10">
          <h3 className="font-display text-2xl font-semibold text-white mb-8 text-center">
            Comparativa: Cubículos con y sin plantas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sin plantas',
                items: [
                  'Estrés elevado',
                  'Aire viciado',
                  'Espacio monótono',
                  'Productividad baja',
                  'Ambiente frío',
                ],
                color: 'from-gray-500/10 to-gray-500/5',
              },
              {
                title: 'Con plantas TUVCH',
                items: [
                  'Estrés reducido 37%',
                  'Aire purificado 60%',
                  'Espacio humanizado',
                  'Productividad +15%',
                  'Ambiente vital y cálido',
                ],
                color: 'from-emerald-500/10 to-emerald-500/5',
              },
            ].map((group) => (
              <div key={group.title} className={`bg-gradient-to-br ${group.color} border border-white/5 p-8 rounded-2xl`}>
                <h4 className="font-semibold text-white text-lg mb-6">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${group.title === 'Sin plantas' ? 'bg-gray-400' : 'bg-emerald-400'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
