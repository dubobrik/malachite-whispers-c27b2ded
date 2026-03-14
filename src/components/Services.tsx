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
    glowColor: 'hsl(43 76% 52% / 0.06)',
  },
  {
    title: "Социолог",
    icon: Eye,
    desc: "Помощь в трудной жизненной ситуации, опора на социологический анализ",
    param: "Социолог",
    glowColor: 'hsl(160 55% 40% / 0.06)',
  },
  {
    title: "Коуч",
    icon: Compass,
    desc: "Индивидуальный коучинг (цели, карьера), групповые программы",
    param: "Коуч",
    glowColor: 'hsl(270 40% 50% / 0.05)',
  },
  {
    title: "Семейный психолог",
    icon: HeartHandshake,
    desc: "Консультации пар, индивидуальные встречи по семейным вопросам",
    param: "Семейный психолог",
    glowColor: 'hsl(145 60% 45% / 0.05)',
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding relative overflow-hidden">
      {/* Layer 1: Background texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        opacity: 0.035,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 30% 20%, hsl(160 50% 14% / 0.15) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 70% 80%, hsl(145 50% 16% / 0.12) 0%, transparent 60%),
          linear-gradient(180deg, hsl(160 22% 7%) 0%, hsl(160 20% 8%) 50%, hsl(160 22% 7%) 100%)
        `,
      }} />

      {/* Layer 2: Decorative elements */}
      <SectionDecor variant="services" />

      {/* Layer 3: Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-accent text-center mb-12"
          style={{ filter: 'drop-shadow(0 0 20px hsl(43 76% 52% / 0.15))' }}
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
              className="gold-border-card flex flex-col group backdrop-blur-sm relative"
            >
              {/* Gold L-corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent/30 pointer-events-none transition-colors duration-500 group-hover:border-accent/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent/30 pointer-events-none transition-colors duration-500 group-hover:border-accent/50" />

              {/* Card inner glow */}
              <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.glowColor}, transparent 70%)` }} />

              <div className="relative z-10">
                <div className="p-3 w-fit rounded-lg mb-4 transition-all duration-500 group-hover:shadow-[0_0_30px_hsl(43_76%_52%/0.15)]"
                  style={{ background: 'linear-gradient(135deg, hsl(43 76% 52% / 0.1), hsl(160 50% 25% / 0.08))' }}>
                  <s.icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;