import { motion } from "framer-motion";
import { Sparkles, Eye, Compass, HeartHandshake } from "lucide-react";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const services = [
  {
    title: "Таролог",
    icon: Sparkles,
    desc: "Расклады на картах Таро, расклады на отношения, самопознание",
    param: "Таролог",
    accentColor: 'hsl(43 76% 52%)',
  },
  {
    title: "Социолог",
    icon: Eye,
    desc: "Помощь в трудной жизненной ситуации, опора на социологический анализ",
    param: "Социолог",
    accentColor: 'hsl(160 55% 40%)',
  },
  {
    title: "Коуч",
    icon: Compass,
    desc: "Индивидуальный коучинг (цели, карьера), групповые программы",
    param: "Коуч",
    accentColor: 'hsl(270 40% 55%)',
  },
  {
    title: "Семейный психолог",
    icon: HeartHandshake,
    desc: "Консультации пар, индивидуальные встречи по семейным вопросам",
    param: "Семейный психолог",
    accentColor: 'hsl(145 55% 45%)',
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        opacity: 0.025,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 40% at 30% 20%, hsl(160 45% 12% / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 70% 80%, hsl(145 45% 14% / 0.1) 0%, transparent 60%),
          linear-gradient(180deg, hsl(160 22% 6%) 0%, hsl(160 20% 7%) 50%, hsl(160 22% 6%) 100%)
        `,
      }} />

      <SectionDecor variant="services" />
      <FantasyDecor variant="services" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Мои направления
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Каждое направление — как грань драгоценного камня, раскрывающая свой свет
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="gold-border-card group relative"
            >
              {/* L-corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent/20 pointer-events-none transition-colors duration-700 group-hover:border-accent/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent/20 pointer-events-none transition-colors duration-700 group-hover:border-accent/40" />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.accentColor}08, transparent 70%)` }} />

              <div className="relative z-10">
                <div className="p-3.5 w-fit rounded-xl mb-5 transition-all duration-700 group-hover:shadow-[0_0_30px_hsl(43_76%_52%/0.1)]"
                  style={{ background: `${s.accentColor}10`, border: `1px solid ${s.accentColor}15` }}>
                  <s.icon className="h-7 w-7 transition-transform duration-700 group-hover:scale-110" style={{ color: s.accentColor }} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-foreground/55 mb-8 leading-relaxed">{s.desc}</p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
