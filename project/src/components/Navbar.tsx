import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuizOpen: () => void;
  onNavigate?: (target: string) => void;
}

export default function Navbar({ onQuizOpen, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Beneficios', href: '#benefits' },
    { label: 'Plantas', href: '#catalog' },
    { label: 'Estadísticas', href: '#stats' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
        {/* Title removed as requested */}

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                  if (onNavigate) {
                    onNavigate(item.href.replace('#', ''));
                  } else if (item.href) {
                    const el = document.getElementById(item.href.replace('#', ''));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = item.href;
                  }
                }}
              className="nav-link text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-3 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setMenuOpen(false);
                if (onNavigate) {
                  onNavigate(item.href.replace('#', ''));
                } else if (item.href) {
                  const el = document.getElementById(item.href.replace('#', ''));
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.hash = item.href;
                }
              }}
              className="text-sm text-white/70 hover:text-white transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onQuizOpen(); setMenuOpen(false); }}
            className="btn-primary px-5 py-2.5 rounded-xl text-sm text-left"
          >
            Mi Planta Ideal
          </button>
        </div>
      )}
    </nav>
  );
}
