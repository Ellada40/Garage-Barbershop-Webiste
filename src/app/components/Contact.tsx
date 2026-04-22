import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-neutral-800 text-neutral-300 text-xs uppercase tracking-widest mb-6">
            Контакты
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            Как нас найти
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 tracking-tight">Адрес</h3>
                <p className="text-neutral-400 text-lg">Ахматбека Суюмбаева 16а</p>
                <p className="text-neutral-400 text-lg">Бишкек, Кыргызстан</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 tracking-tight">Телефон</h3>
                <a
                  href="tel:0558389838"
                  className="text-neutral-400 text-lg hover:text-white transition-colors"
                >
                  0558 38 98 38
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 tracking-tight">Время работы</h3>
                <p className="text-neutral-400 text-lg">Ежедневно: 10:00 – 22:00</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 tracking-tight">Социальные сети</h3>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-lg hover:text-white transition-colors"
                >
                  @garazh_barbershop
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 h-96 flex items-center justify-center border border-neutral-800"
          >
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
              <p className="text-neutral-500 text-lg">Карта местоположения</p>
              <p className="text-neutral-600 text-sm mt-2">Ахматбека Суюмбаева 16а, Бишкек</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
