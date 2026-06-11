import auroraCallado from '../assets/aurora-Callado.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Beneficios', href: '#benefits' },
                { label: 'Catálogo', href: '#catalog' },
                { label: 'Estadísticas', href: '#stats' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/50 hover:text-white/90 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisor */}
          <div className="md:col-span-3 rounded-[32px] bg-white/5 border border-white/5 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={auroraCallado}
                alt="Mtra. María Aurora Callado López"
                className="w-24 h-24 rounded-full object-cover ring-2 ring-emerald-400/30"
              />
              <div>
                <p className="text-emerald-400 uppercase tracking-[0.24em] text-[11px] font-semibold mb-3">
                  Asesoría Académica
                </p>
                <h4 className="text-white font-semibold text-lg">
                  Mtra. María Aurora Callado López
                </h4>
                <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xl">
                  Docente del TUVCH cuya guía y respaldo institucional dan solidez y seriedad académica a esta propuesta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">
            © {currentYear} Espacios que florecen para el cuidado de la casa común. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}
