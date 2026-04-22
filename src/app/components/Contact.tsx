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
                <a
                  href="https://2gis.kg/bishkek/search/Ахматбека%20Суюмбаева%2016а"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-lg hover:text-white transition-colors cursor-pointer block"
                  onClick={(e) => {
                    try {
                      const appUrl = 'dgis://2gis.kg/search/Ахматбека%20Суюмбаева%2016а';
                      window.location.href = appUrl;
                      setTimeout(() => {
                        if (document.hidden) return;
                      }, 500);
                    } catch (err) {
                      console.log('2GIS app not available, using web fallback');
                    }
                  }}
                >
                  Ахматбека Суюмбаева 16а
                </a>
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
                  href="https://www.instagram.com/garaj_barbershop_vostok5?igsh=MTJzOXJjYXN1bXg5bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-lg hover:text-white transition-colors"
                >
                  @garaj_barbershop_vostok5
                </a>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="https://2gis.kg/bishkek/search/Ахматбека%20Суюмбаева%2016а"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 h-96 flex items-center justify-center border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer group"
            onClick={(e) => {
              try {
                const appUrl = 'dgis://2gis.kg/search/Ахматбека%20Суюмбаева%2016а';
                window.location.href = appUrl;
                setTimeout(() => {
                  if (document.hidden) return;
                }, 500);
              } catch (err) {
                console.log('2GIS app not available, using web fallback');
              }
            }}
          >
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-neutral-600 group-hover:text-neutral-400 mx-auto mb-4 transition-colors duration-300" />
              <p className="text-neutral-500 group-hover:text-neutral-300 text-lg transition-colors duration-300">Карта местоположения</p>
              <p className="text-neutral-600 group-hover:text-neutral-400 text-sm mt-2 transition-colors duration-300">Ахматбека Суюмбаева 16а, Бишкек</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
