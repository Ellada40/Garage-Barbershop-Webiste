import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Lightbulb, UserCheck, Sparkles, Calendar, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Опытные барберы',
    description: 'Мастера с многолетним опытом и постоянным повышением квалификации',
  },
  {
    icon: Lightbulb,
    title: 'Современные техники',
    description: 'Следим за трендами и используем актуальные методики стрижки',
  },
  {
    icon: UserCheck,
    title: 'Индивидуальный подход',
    description: 'Учитываем тип волос, форму лица и личные предпочтения',
  },
  {
    icon: Sparkles,
    title: 'Премиум атмосфера',
    description: 'Стильный интерьер, комфортная обстановка, внимание к деталям',
  },
  {
    icon: Calendar,
    title: 'Удобная запись',
    description: 'Гибкий график работы с 10:00 до 22:00, запись по телефону',
  },
  {
    icon: Shield,
    title: 'Чистота и безопасность',
    description: 'Стерильные инструменты, высокие стандарты гигиены',
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-neutral-800 text-neutral-300 text-xs uppercase tracking-widest mb-6">
            Преимущества
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            Почему выбирают нас
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
