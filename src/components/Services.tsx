import { motion } from "framer-motion";
import { Sparkles, Eye, Compass, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Таролог",
    icon: Sparkles,
    desc: "Расклады на картах Таро, расклады на отношения, самопознание",
    param: "Таролог",
  },
  {
    title: "Социолог",
    icon: Eye,
    desc: "Помощь в трудной жизненной ситуации, опора на социологический анализ",
    param: "Социолог",
  },
  {
    title: "Коуч",
    icon: Compass,
    desc: "Индивидуальный коучинг (цели, карьера), групповые программы",
    param: "Коуч",
  },
  {
    title: "Семейный психолог",
    icon: HeartHandshake,
    desc: "Консультации пар, индивидуальные встречи по семейным вопросам",
    param: "Семейный психолог",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding malachite-section bg-muted relative">
      <div className="container mx-auto max-w-5xl relative z-10">
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
              className="gold-border-card flex flex-col gold-corners group"
            >
              <div className="p-3 w-fit rounded-lg mb-4 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(43_76%_52%/0.2)]"
                style={{ background: 'linear-gradient(135deg, hsl(43 76% 52% / 0.12), hsl(162 70% 21% / 0.1))' }}>
                <s.icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                {s.title}
              </h3>
              <p className="font-body text-foreground/70 mb-6 flex-1">{s.desc}</p>
              <a
                href="#contact"
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
