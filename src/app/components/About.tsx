import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-neutral-800 text-neutral-300 text-xs uppercase tracking-widest">
              О нас
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
              Место, где стиль встречается с уверенностью
            </h2>
            <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Гараж Барбершоп</strong> — это не просто место для стрижки. Это пространство, где мужской стиль становится образом жизни. Здесь каждая деталь продумана для создания атмосферы премиум-класса.
              </p>
              <p>
                Наши барберы — профессионалы с многолетним опытом, которые владеют классическими и современными техниками стрижки. Мы следим за трендами, но всегда учитываем индивидуальность каждого клиента.
              </p>
              <p>
                Чистота, комфорт, внимание к деталям и безупречный результат — вот что делает нас лучшими в Бишкеке.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1768363446104-b8a0c1716600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Барбер за работой"
                  className="w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Интерьер барбершопа"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Стрижка ножницами"
                  className="w-full h-80 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1675599193990-33d71150902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Барбершоп"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
