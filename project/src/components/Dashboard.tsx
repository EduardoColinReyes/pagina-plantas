import { useEffect, useRef } from 'react';
import { Leaf, TrendingUp, Heart, Droplets, Sun, AlertCircle } from 'lucide-react';

const mockData = {
  plants: [
    { name: 'Teléfono', health: 92, water: '3 días', light: 'Indirecta', mood: '😊 Saludable' },
    { name: 'Lengua de Suegra', health: 85, water: '5 días', light: 'Artificial', mood: '🌟 Excelente' },
    { name: 'Cuna de Moisés', health: 78, water: '2 días', light: 'Artificial', mood: '💧 Necesita agua' },
  ],
  stats: {
    stressLevel: 28,
    productivity: 82,
    wellbeing: 76,
  },
  tips: [
    'Rota tus plantas cada 2 semanas para un crecimiento uniforme.',
    'El mejor momento para regar es por la mañana.',
    'Limpia las hojas mensualmente para mejorar la fotosíntesis.',
    'Hoy es buen día para revisar la salud de tus plantas.',
  ],
};

export default function Dashboard() {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 reveal">
          <div className="section-divider" />
          <p className="text-xs text-emerald-400 tracking-widest uppercase mb-3 font-medium">
            Panel personal
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
            Mi <span className="gradient-text italic">jardín personal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Stress Level */}
          <div className="lg:col-span-1 reveal glass-card p-8 rounded-2xl hover:border-emerald-500/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">😌</div>
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-white/40 text-sm mb-3 uppercase tracking-wide">Nivel de estrés</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="font-display text-4xl font-semibold text-white">{mockData.stats.stressLevel}%</span>
              <span className="text-emerald-400 text-sm font-medium">↓ 28%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                style={{ width: `${mockData.stats.stressLevel}%` }}
              />
            </div>
          </div>

          {/* Productivity */}
          <div className="lg:col-span-1 reveal glass-card p-8 rounded-2xl hover:border-emerald-500/20 transition-colors" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">⚡</div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-white/40 text-sm mb-3 uppercase tracking-wide">Productividad</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="font-display text-4xl font-semibold text-white">{mockData.stats.productivity}%</span>
              <span className="text-emerald-400 text-sm font-medium">↑ 15%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                style={{ width: `${mockData.stats.productivity}%` }}
              />
            </div>
          </div>

          {/* Wellbeing */}
          <div className="lg:col-span-1 reveal glass-card p-8 rounded-2xl hover:border-emerald-500/20 transition-colors" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">💚</div>
              <Heart className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-white/40 text-sm mb-3 uppercase tracking-wide">Bienestar</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="font-display text-4xl font-semibold text-white">{mockData.stats.wellbeing}%</span>
              <span className="text-emerald-400 text-sm font-medium">↑ 22%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                style={{ width: `${mockData.stats.wellbeing}%` }}
              />
            </div>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Plants Status */}
          <div className="reveal glass-card p-8 rounded-2xl border border-white/10">
            <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-400" />
              Mis Plantas
            </h3>
            <div className="space-y-4">
              {mockData.plants.map((plant) => (
                <div key={plant.name} className="glass p-4 rounded-lg border border-white/5 hover:border-emerald-500/20 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-white text-sm">{plant.name}</h4>
                      <p className="text-xs text-white/40 mt-0.5">{plant.mood}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-lg font-semibold text-emerald-400">{plant.health}%</div>
                      <div className="text-xs text-white/40">Salud</div>
                    </div>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      style={{ width: `${plant.health}%` }}
                    />
                  </div>
                  <div className="flex gap-2 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Droplets className="w-3 h-3" />
                      {plant.water}
                    </span>
                    <span className="flex items-center gap-1">
                      <Sun className="w-3 h-3" />
                      {plant.light}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="reveal glass-card p-8 rounded-2xl border border-white/10" style={{ transitionDelay: '0.1s' }}>
            <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-emerald-400" />
              Tips Diarios
            </h3>
            <div className="space-y-3">
              {mockData.tips.map((tip, idx) => (
                <div key={idx} className="glass p-4 rounded-lg border border-white/5 flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 text-xs text-emerald-400 font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Watering Reminders */}
        <div className="reveal glass-card p-8 rounded-2xl border border-white/10">
          <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-emerald-400" />
            Próximos Recordatorios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { plant: 'Cuna de Moisés', time: 'Hoy 18:00', urgency: 'high' },
              { plant: 'Teléfono', time: 'Mañana 10:00', urgency: 'medium' },
              { plant: 'Lengua de Suegra', time: 'Viernes 09:00', urgency: 'low' },
            ].map((reminder) => (
              <div
                key={reminder.plant}
                className={`p-4 rounded-lg border transition-colors ${
                  reminder.urgency === 'high'
                    ? 'glass-emerald border-emerald-500/30 bg-emerald-500/10'
                    : 'glass border-white/10'
                }`}
              >
                <div className="font-medium text-white text-sm mb-1">{reminder.plant}</div>
                <div className="text-xs text-white/50">{reminder.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
