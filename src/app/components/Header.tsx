import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'О нас', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Портфолио', id: 'gallery' },
    { label: 'Отзывы', id: 'testimonials' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl tracking-tight cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-white">ГАРАЖ</span>
            <span className="text-neutral-400 ml-1">БАРБЕРШОП</span>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0558389838"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm tracking-wide">Записаться</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-neutral-800"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-300 hover:text-white transition-colors text-left py-2 uppercase tracking-wider text-sm"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:0558389838"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-black hover:bg-neutral-200 transition-all mt-4"
              >
                <Phone className="w-4 h-4" />
                <span className="tracking-wide">Записаться</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
