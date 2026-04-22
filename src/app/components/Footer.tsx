import { Instagram, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl mb-4 tracking-tight">
              <span className="text-white">ГАРАЖ</span>
              <span className="text-neutral-400 ml-1">БАРБЕРШОП</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Современные мужские стрижки и уход за бородой в центре Бишкека
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4 text-sm uppercase tracking-widest">Навигация</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-neutral-400 hover:text-white transition-colors text-sm"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-neutral-400 hover:text-white transition-colors text-sm"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-neutral-400 hover:text-white transition-colors text-sm"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-neutral-400 hover:text-white transition-colors text-sm"
              >
                Контакты
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-white mb-4 text-sm uppercase tracking-widest">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:0558389838"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>0558 38 98 38</span>
              </a>
              <div className="flex items-start gap-2 text-neutral-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Ахматбека Суюмбаева 16а, Бишкек</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4 text-sm uppercase tracking-widest">Мы в соцсетях</h3>
            <a
              href="https://www.instagram.com/garaj_barbershop_vostok5?igsh=MTJzOXJjYXN1bXg5bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © 2026 Гараж Барбершоп. Все права защищены.
            </p>
            <p className="text-neutral-600 text-sm">10:00 – 22:00 • Ежедневно</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
