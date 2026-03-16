import { motion } from "framer-motion";
import { Sparkles, Eye, Compass, HeartHandshake } from "lucide-react";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";

const services = [
  {
    title: "Таролог",
    icon: Sparkles,
    desc: "Расклады на картах Таро для самопознания, принятия решений и работы с отношениями",
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
    desc: "Индивидуальный коучинг — цели, карьера, групповые программы",
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
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 40% at 30% 20%, hsl(160 45% 12% / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 70% 80%, hsl(145 45% 14% / 0.1) 0%, transparent 60%),
          linear-gradient(180deg, hsl(160 22% 6% / 0.35) 0%, hsl(160 20% 7% / 0.4) 50%, hsl(160 22% 6% / 0.35) 100%)
        `,
      }} />

      <ParallaxLayer speed={0.35}>
        <SectionDecor variant="services" />
        <FantasyDecor variant="services" />
      </ParallaxLayer>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent/20" />
              <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent/40">Направления</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold"
              style={{
                background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 12px hsl(43 76% 52% / 0.12))',
              }}
            >
              Мои направления
            </h2>
          </div>
          <p className="font-display text-sm text-foreground/30 italic hidden md:block max-w-[200px] text-right leading-relaxed">
            Каждое — как грань драгоценного камня
          </p>
        </motion.div>

        {/* Featured first card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gold-border-card group relative mb-8"
        >
          <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-accent/15 pointer-events-none transition-colors duration-700 group-hover:border-accent/30" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-accent/15 pointer-events-none transition-colors duration-700 group-hover:border-accent/30" />

          <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${services[0].accentColor}06, transparent 60%)` }} />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            {(() => {
              const s = services[0];
              const Icon = s.icon;
              return (
                <>
                  <div className="p-4 w-fit rounded-xl transition-all duration-700 group-hover:shadow-[0_0_30px_hsl(43_76%_52%/0.08)]"
                    style={{ background: `${s.accentColor}10`, border: `1px solid ${s.accentColor}12` }}>
                    <Icon className="h-8 w-8 transition-transform duration-700 group-hover:scale-110" style={{ color: s.accentColor }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="font-body text-foreground/50 leading-relaxed max-w-xl">{s.desc}</p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => {
                      setTimeout(() => {
                        const sel = document.getElementById("service-select") as HTMLSelectElement;
                        if (sel) sel.value = s.param;
                      }, 100);
                    }}
                    className="btn-outline-gold text-sm shrink-0"
                  >
                    Записаться
                  </a>
                </>
              );
            })()}
          </div>
        </motion.div>

        {/* Remaining 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(1).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i + 1) * 0.1 }}
              className="gold-border-card group relative"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.accentColor}06, transparent 60%)` }} />

              <div className="relative z-10">
                <div className="p-3 w-fit rounded-xl mb-5 transition-all duration-700 group-hover:shadow-[0_0_24px_hsl(43_76%_52%/0.08)]"
                  style={{ background: `${s.accentColor}10`, border: `1px solid ${s.accentColor}12` }}>
                  <s.icon className="h-6 w-6 transition-transform duration-700 group-hover:scale-110" style={{ color: s.accentColor }} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-foreground/45 mb-6 leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  onClick={() => {
                    setTimeout(() => {
                      const sel = document.getElementById("service-select") as HTMLSelectElement;
                      if (sel) sel.value = s.param;
                    }, 100);
                  }}
                  className="font-body text-xs text-accent/50 hover:text-accent transition-colors duration-500 tracking-wide flex items-center gap-2 group/link"
                >
                  <span>Записаться</span>
                  <span className="transition-transform duration-500 group-hover/link:translate-x-1">→</span>
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
