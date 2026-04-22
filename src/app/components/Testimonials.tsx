import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Азамат Исаков',
    text: 'Лучший барбершоп в Бишкеке! Мастера знают своё дело, всегда получаю именно то, что хочу. Атмосфера премиальная, чисто, комфортно. Уже третий год хожу только сюда.',
    rating: 5,
  },
  {
    name: 'Тимур Бекмуратов',
    text: 'Нашёл своего мастера. Стригут отлично, индивидуальный подход, советуют что лучше подойдёт. Борода всегда идеальна. Цены адекватные для такого уровня сервиса.',
    rating: 5,
  },
  {
    name: 'Эрлан Мамытов',
    text: 'Записываюсь заранее, всегда принимают вовремя. Качество на высоте, барберы профессионалы. Интерьер стильный, чувствуешь себя VIP клиентом. Рекомендую всем друзьям!',
    rating: 5,
  },
  {
    name: 'Марат Султанов',
    text: 'Хожу сюда с сыном. Ребёнку комфортно, мастера терпеливые и умеют найти подход к детям. Себе тоже стригусь здесь — результат всегда превосходит ожидания.',
    rating: 5,
  },
  {
    name: 'Бакыт Асанов',
    text: 'Долго искал барбершоп с профессиональным подходом. Гараж — это то, что нужно. Техники современные, инструменты качественные, а главное — мастера с золотыми руками.',
    rating: 5,
  },
  {
    name: 'Нурбек Жумабеков',
    text: 'Отличное место для мужчин, которые ценят качество и стиль. После стрижки чувствуешь себя на миллион. Удобная парковка, гибкий график. Моё место в Бишкеке!',
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-neutral-800 text-neutral-300 text-xs uppercase tracking-widest mb-6">
            Отзывы
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            Что говорят наши клиенты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-900 p-8 border border-neutral-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="text-white tracking-wide">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
