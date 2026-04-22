import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Scissors, Sparkles, Baby, Wind, Heart, User } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Мужская стрижка',
    description: 'Классические и современные стрижки любой сложности. Индивидуальный подход к каждому клиенту.',
    price: 'от 500 сом',
  },
  {
    icon: Sparkles,
    title: 'Стрижка + Борода',
    description: 'Комплексный уход: стрижка волос и моделирование бороды. Создаём гармоничный образ.',
    price: 'от 800 сом',
  },
  {
    icon: Baby,
    title: 'Детская стрижка',
    description: 'Комфортная стрижка для мальчиков до 12 лет. Терпение и профессионализм.',
    price: 'от 400 сом',
  },
  {
    icon: User,
    title: 'Оформление бороды',
    description: 'Коррекция формы, бритьё, уход. Королевское бритьё опасной бритвой.',
    price: 'от 400 сом',
  },
  {
    icon: Wind,
    title: 'Укладка',
    description: 'Профессиональная укладка с использованием премиальных стайлинговых средств.',
    price: 'от 200 сом',
  },
  {
    icon: Heart,
    title: 'Уход и консультация',
    description: 'Рекомендации по уходу за волосами и бородой. Подбор средств.',
    price: 'Бесплатно',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-neutral-800 text-neutral-300 text-xs uppercase tracking-widest mb-6">
            Наши услуги
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            Профессиональный уход
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Полный спектр барберских услуг от опытных мастеров
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-neutral-900 p-8 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/50"
            >
              <service.icon className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-neutral-400 mb-4 leading-relaxed">{service.description}</p>
              <div className="text-white text-lg tracking-wide">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
