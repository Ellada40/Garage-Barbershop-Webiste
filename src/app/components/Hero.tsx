import { motion } from 'motion/react';
import { Phone, Clock, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Барбершоп интерьер"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight"
            >
              Стиль, который
              <br />
              говорит за тебя
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-300 max-w-2xl leading-relaxed"
            >
              Современные мужские стрижки и уход за бородой в центре Бишкека. Профессиональные барберы, премиальная атмосфера, индивидуальный подход.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="tel:0558389838"
                className="px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-all duration-200 text-lg tracking-wide"
              >
                Записаться
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 text-lg tracking-wide"
              >
                Посмотреть услуги
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-neutral-700"
          >
            <div className="flex items-center gap-3 text-neutral-200">
              <Phone className="w-5 h-5" />
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Телефон</div>
                <a href="tel:0558389838" className="hover:text-white transition-colors">
                  0558 38 98 38
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-neutral-200">
              <Clock className="w-5 h-5" />
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Время работы</div>
                <div>10:00 – 22:00</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-neutral-200">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Адрес</div>
                <div>Ахматбека Суюмбаева 16а</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
