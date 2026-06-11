import { useEffect, useRef, useState } from 'react';
import { plants } from '../data/plants';
import { Droplets, Sun } from 'lucide-react';

export default function Catalog() {
  const [selectedPlant, setSelectedPlant] = useState<typeof plants[0] | null>(null);
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
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .plant-card');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="catalog" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 reveal">
          <div className="section-divider" />
          <p className="text-xs text-emerald-400 tracking-widest uppercase mb-3 font-medium">
            Plantas Adaptadas TUVCH
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Catálogo de <span className="gradient-text italic">especies</span>
          </h2>
          <p className="text-white/40 text-base max-w-2xl">
            7 plantas seleccionadas estrategricamente para prosperar en los cubículos del Tecnológico Universitario del Valle de Chalco. Cada una adaptada a condiciones específicas de luz y cuidado.
          </p>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plants.map((plant, idx) => (
            <div
              key={`${plant.id}-${idx}`}
              className="reveal plant-card glass-card overflow-hidden cursor-pointer group"
              style={{ transitionDelay: `${idx * 0.08}s` }}
              onClick={() => setSelectedPlant(plant)}
            >
                <div className="relative h-56 overflow-hidden bg-gradient-to-b from-emerald-500/10 to-transparent">
                <img
                  src={plant.image}
                  alt={plant.name}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={336}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ aspectRatio: '16/9' }}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080e08]/60" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="tag-pill">{plant.careLevel}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-1">{plant.name}</h3>
                    <p className="text-xs text-white/40 italic">{plant.scientificName}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-semibold">
                    {plant.cubicleScore}
                  </div>
                </div>

                <p className="text-sm text-white/60 mb-4">{plant.tagline}</p>

                <div className="flex gap-4 mb-4 text-xs">
                  <div className="flex items-center gap-1.5 text-white/40">
                    <Sun className="w-3.5 h-3.5 text-emerald-400" />
                    {plant.light}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40">
                    <Droplets className="w-3.5 h-3.5 text-emerald-400" />
                    Cada {plant.waterDays} días
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {plant.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-white/40">Beneficios</span>
                  <div className="flex gap-2">
                    {[plant.stressRelief, plant.productivity, plant.airQuality].map((val, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400/30"
                        style={{ backgroundColor: `rgba(16, 185, 129, ${val / 100})` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
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
                    {selectedPlant.benefits.map((benefit) => (
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
      </div>
    </section>
  );
}
