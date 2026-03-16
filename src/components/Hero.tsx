import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import GoldParticles from "./GoldParticles";
import MagicCircle from "./MagicCircle";
import MagicalDust from "./MagicalDust";
import ParallaxLayer from "./ParallaxLayer";
import specialistPhoto from "@/assets/specialist-photo.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[110vh] flex items-center overflow-hidden"
    >
      {/* Deep layered overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 50% 45% at 50% 48%, hsl(160 50% 10% / 0.3) 0%, transparent 70%),
          radial-gradient(ellipse 80% 60% at 20% 80%, hsl(270 25% 8% / 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 80% 20%, hsl(160 35% 8% / 0.1) 0%, transparent 50%),
          linear-gradient(180deg, hsl(160 30% 3% / 0.6) 0%, hsl(160 30% 4% / 0.4) 40%, hsl(160 30% 4% / 0.45) 65%, hsl(160 30% 3% / 0.6) 100%)
        `,
      }} />

      {/* Parallax decor layer */}
      <ParallaxLayer speed={0.3}>
        <motion.div
          className="absolute pointer-events-none"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '700px' }}
          animate={{ opacity: [0.3, 0.55, 0.4, 0.5, 0.3], scale: [1, 1.04, 0.98, 1.02, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full" style={{
            background: 'radial-gradient(circle, hsl(160 50% 22% / 0.1) 0%, hsl(145 40% 18% / 0.04) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MagicCircle className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] opacity-[0.06]" />
        </div>

        <GoldParticles count={12} />
        <MagicalDust count={8} />
      </ParallaxLayer>

      {/* Subtle frame corners */}
      <div className="absolute top-24 left-12 w-20 h-20 pointer-events-none hidden md:block"
        style={{ borderTop: '1px solid hsl(43 76% 52% / 0.1)', borderLeft: '1px solid hsl(43 76% 52% / 0.1)' }} />
      <div className="absolute bottom-24 right-12 w-20 h-20 pointer-events-none hidden md:block"
        style={{ borderBottom: '1px solid hsl(43 76% 52% / 0.1)', borderRight: '1px solid hsl(43 76% 52% / 0.1)' }} />

      {/* Content — two-column layout */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — hero text */}
          <div className="max-w-2xl">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, hsl(43 76% 52% / 0.4), transparent)' }} />
              <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent/50">
                Таро · Психология · Коучинг
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.05] mb-8"
              style={{
                background: 'linear-gradient(145deg, hsl(43 76% 74%), hsl(43 76% 50%), hsl(43 70% 62%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 3px 12px hsl(43 76% 52% / 0.1))',
              }}
            >
              Интегральный
              <br />
              подход к&nbsp;жизни
            </motion.h1>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-body text-lg md:text-xl text-foreground/50 mb-14 max-w-lg leading-[1.8]"
            >
              Помогаю найти опору и ответы через глубину традиций,
              символический язык и ясность знания
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a href="#contact" className="btn-gold text-base px-10 py-4">
                Записаться
              </a>
              <a
                href="#uslugi"
                className="font-body text-sm text-foreground/40 hover:text-accent transition-colors duration-500 flex items-center gap-3 group"
              >
                <span className="tracking-wide">Узнать подробнее</span>
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right column — About block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Photo */}
            <div className="relative w-full max-w-[280px] xl:max-w-[320px] mb-8 mt-0 lg:mt-[60px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden gold-photo-frame">
                <img src={specialistPhoto} alt="Фото специалиста" className="w-full h-full object-cover" />
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, hsl(160 30% 4% / 0.25) 100%)',
                }} />
              </div>
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-accent/20 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-accent/20 rounded-br-lg" />
            </div>

            {/* About heading */}
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-accent/20" />
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent/40">О специалисте</span>
              </div>
              <h2 id="about" className="font-display text-2xl md:text-3xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Обо мне
              </h2>
            </div>

            {/* About text — full */}
            <div className="font-body text-sm text-foreground/50 leading-[1.9] mb-6 space-y-4">
              <p>
                Я, Надежда Савельева, мой путь в помогающих практиках начался с классического образования — я специалист по социальной работе. За этим стоит фундамент, который дает мне объёмную оптику: социология, психология, религиоведение, понимание систем, в которых живет человек. Я вижу не только внутренние процессы, но и контекст вашей жизни — это позволяет работать глубже и бережнее.
              </p>
              <p>
                Сегодня за моими плечами многолетний опыт работы с людьми и несколько ступеней профессионального развития, включая коучинг. Но главный инструмент — не дипломы, а способность удерживать целостный взгляд. В моем подходе психология встречается с социологией, а Таро и метафорические карты становятся языком, на котором мы говорим с вашим подсознанием.
              </p>
              <p>
                В моей работе есть то, что иногда называют магией. Только это не предсказания и не тайные знания, а способность видеть то, что скрыто от поверхностного взгляда. Когда психология, социология и язык символов складываются в цельную картину — решение приходит само. И оно всегда оказывается верным.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: GraduationCap, label: "Социолог" },
                { icon: Award, label: "Психолог" },
                { icon: BookOpen, label: "Таролог" },
                { icon: Award, label: "Семейный консультант" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 rounded-full border border-accent/10 px-4 py-2 transition-all duration-500 hover:border-accent/25"
                  style={{ background: 'hsl(160 30% 5% / 0.5)' }}
                >
                  <c.icon className="h-3.5 w-3.5 text-accent/50" />
                  <span className="font-body text-xs text-foreground/45 tracking-wide">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-accent/12"
        >
          <motion.div
            animate={{ y: [2, 12, 2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 mx-auto mt-1.5 rounded-full bg-accent/25"
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(160 30% 4% / 0.5), transparent)' }} />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsl(160 30% 3% / 0.4), transparent)' }} />
    </section>
  );
};

export default Hero;