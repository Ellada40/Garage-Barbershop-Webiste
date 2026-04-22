import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Phone, Instagram } from 'lucide-react';

export function BookingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Барбершоп вход"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Готовы к изменениям?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            Запишитесь на стрижку прямо сейчас и получите профессиональный уход от лучших барберов Бишкека
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0558389838"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black hover:bg-neutral-200 transition-all duration-200 text-lg tracking-wide"
            >
              <Phone className="w-5 h-5" />
              <span>Позвонить</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 text-lg tracking-wide"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-700">
            <p className="text-neutral-400 text-lg">
              <span className="text-white">0558 38 98 38</span> • Работаем с 10:00 до 22:00
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
