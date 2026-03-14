import { motion } from "framer-motion";
import { Sparkles, BarChart3, Target, Heart } from "lucide-react";

const services = [
  {
    title: "Таролог",
    icon: Sparkles,
    desc: "Расклады на картах Таро, расклады на отношения, самопознание",
    param: "Таролог",
  },
  {
    title: "Социолог",
    icon: BarChart3,
    desc: "Помощь в трудной жизненной ситуации, опора на социологический анализ",
    param: "Социолог",
  },
  {
    title: "Коуч",
    icon: Target,
    desc: "Индивидуальный коучинг (цели, карьера), групповые программы",
    param: "Коуч",
  },
  {
    title: "Семейный психолог",
    icon: Heart,
    desc: "Консультации пар, индивидуальные встречи по семейным вопросам",
    param: "Семейный психолог",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding bg-muted">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary text-center mb-12"
        >
          Мои направления
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="gold-border-card flex flex-col"
            >
              <s.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                {s.title}
              </h3>
              <p className="font-body text-foreground/70 mb-6 flex-1">{s.desc}</p>
              <a
                href={`#contact`}
                onClick={() => {
                  setTimeout(() => {
                    const sel = document.getElementById("service-select") as HTMLSelectElement;
                    if (sel) sel.value = s.param;
                  }, 100);
                }}
                className="btn-outline-gold self-start text-sm"
              >
                Записаться
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
