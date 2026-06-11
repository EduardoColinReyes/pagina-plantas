import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface QuizResultProps {
  result: any;
  onNewQuiz: () => void;
  onReturnToCatalog: () => void;
}

export default function QuizResult({ result, onNewQuiz, onReturnToCatalog }: QuizResultProps) {
  const [showContent, setShowContent] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<any | null>(null);

  useEffect(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPlant(null);
    };
    if (selectedPlant) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedPlant]);

  const plant = result.mainPlant;

  return (
    <section className="min-h-screen py-28 px-6 pt-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full bg-emerald-500/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Reveal animation */}
        <div
          className={`transition-all duration-700 ${showContent ? 'opacity-100' : 'opacity-0 scale-95'}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-3">
              Tu planta ideal es
            </h1>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              Basado en tu estilo de vida, experiencia y preferencias, aquí te presentamos la recomendación perfecta para tu cubículo.
            </p>
          </div>

          {/* Main Plant Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            {/* Image */}
            <div
              className="glass-card overflow-hidden rounded-3xl h-[500px]"
              style={{
                animation: 'scaleIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
              }}
            >
              <img
                src={plant.image}
                alt={plant.name}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1200}
                height={675}
                sizes="100vw"
                style={{ aspectRatio: '16/9' }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080e08]/40" />
            </div>

            {/* Details */}
            <div style={{ animation: 'slideInUp 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s forwards', opacity: 0 }}>
              <div className="mb-8">
                <p className="text-emerald-400 text-sm font-medium tracking-wider mb-2 uppercase">
                  Nombre científico
                </p>
                <h2 className="font-display text-5xl font-semibold text-white mb-3">{plant.name}</h2>
                <p className="text-white/50 italic text-base">{plant.scientificName}</p>
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {plant.personality}
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { label: 'Tipo de cuidado', value: plant.careLevel },
                  { label: 'Necesidad de luz', value: plant.light },
                  { label: 'Riego', value: `Cada ${plant.waterDays} días` },
                  { label: 'Vibe', value: plant.mood },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {[
                  { label: 'Alivio', value: plant.stressRelief },
                  { label: 'Productividad', value: plant.productivity },
                  { label: 'Aire', value: plant.airQuality },
                ].map((stat) => (
                  <div key={stat.label} className="glass p-3 rounded-lg text-center">
                    <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                    <div className="text-xl font-display font-semibold text-emerald-400">{stat.value}%</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Benefits */}
          <div className="glass-card p-8 rounded-3xl mb-6">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">
              Por qué {plant.name} es perfecta para ti
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plant.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <p className="text-white/70 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Recommendations */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">
              Alternativas complementarias
            </h3>
            <p className="text-sm text-white/50 mb-6 max-w-2xl">
              Estas recomendaciones cambian cada vez para que no siempre veas las mismas tres plantas. Aquí tienes dos opciones cercanas a tu perfil.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.secondary.map((plant: any, idx: number) => (
                <div
                  key={`secondary-${plant.id}-${idx}`}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/20 transition-colors cursor-pointer"
                  onClick={() => setSelectedPlant(plant)}
                >
                  <div className="flex gap-4">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                      decoding="async"
                      width={96}
                      height={96}
                      style={{ aspectRatio: '1/1' }}
                      className="w-24 h-24 object-cover object-center rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{plant.name}</h4>
                      <p className="text-xs text-white/40 mb-2">{plant.careLevel}</p>
                      <p className="text-xs text-white/60 line-clamp-2">{plant.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Recommendations */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">
              Otras plantas para explorar
            </h3>
            <p className="text-sm text-white/50 mb-6 max-w-2xl">
              Si alguna de las sugerencias no te parecio puedes ver las siguientes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(result.otherPlants || []).map((plant: any, idx: number) => (
                <div
                  key={`other-${plant.id}-${idx}`}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/20 transition-colors cursor-pointer"
                  onClick={() => setSelectedPlant(plant)}
                >
                  <div className="flex gap-4">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                      decoding="async"
                      width={96}
                      height={96}
                      style={{ aspectRatio: '1/1' }}
                      className="w-24 h-24 object-cover object-center rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{plant.name}</h4>
                      <p className="text-xs text-white/40 mb-2">{plant.careLevel}</p>
                      <p className="text-xs text-white/60 line-clamp-2">{plant.tagline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Care Guide */}
          <div className="glass-card p-8 rounded-3xl mb-12">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">
              Guía de cuidados
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Riego', desc: `Riega cada ${plant.waterDays} días. Verifica que el suelo esté seco antes de regar.` },
                { title: 'Luz', desc: `Coloca en un lugar con ${plant.light.toLowerCase()}. Si notas que crece lentamente, aumenta la exposición luminosa.` },
                { title: 'Temperatura', desc: 'Mantén entre 16-24°C. Evita cambios bruscos de temperatura y corrientes de aire.' },
                { title: 'Plagas', desc: 'Inspecciona regularmente. Si encuentras plagas, limpia con agua y jabón suave.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-emerald-400 font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onNewQuiz}
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium"
            >
              Hacer quiz de nuevo
            </button>
            <button
              type="button"
              onClick={onReturnToCatalog}
              className="btn-primary flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium"
            >
              Explorar más plantas
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Detail Modal (reuse layout from Catalog) */}
      {selectedPlant && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedPlant(null)}
        >
          <div
            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1200}
                height={675}
                style={{ aspectRatio: '16/9' }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080e08]" />
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                onClick={() => setSelectedPlant(null)}
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-display text-4xl font-semibold text-white mb-1">{selectedPlant.name}</h2>
                  <p className="text-sm text-emerald-400 italic">{selectedPlant.scientificName}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-display font-semibold text-emerald-400 mb-1">{selectedPlant.cubicleScore}</div>
                  <div className="text-xs text-white/40">Puntuación TUVCH</div>
                </div>
              </div>

              <p className="text-white/60 text-base mb-6 leading-relaxed">{selectedPlant.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass p-4 rounded-lg">
                  <div className="text-xs text-white/40 mb-2 uppercase tracking-wide">Luz</div>
                  <div className="text-sm text-white font-medium">{selectedPlant.light}</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-xs text-white/40 mb-2 uppercase tracking-wide">Agua</div>
                  <div className="text-sm text-white font-medium">Cada {selectedPlant.waterDays} días</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-xs text-white/40 mb-2 uppercase tracking-wide">Cuidado</div>
                  <div className="text-sm text-white font-medium">{selectedPlant.careLevel}</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-xs text-white/40 mb-2 uppercase tracking-wide">Personalidad</div>
                  <div className="text-sm text-white font-medium">{selectedPlant.mood}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Beneficios Principales</h3>
                <div className="space-y-2">
                  {selectedPlant.benefits.map((benefit: string) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Alivio de estrés', value: selectedPlant.stressRelief },
                  { label: 'Productividad', value: selectedPlant.productivity },
                  { label: 'Calidad de aire', value: selectedPlant.airQuality },
                ].map((stat) => (
                  <div key={stat.label} className="glass p-3 rounded-lg">
                    <div className="text-xs text-white/40 mb-2 text-center">{stat.label}</div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                    <div className="text-xs font-medium text-emerald-400 text-center">{stat.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
