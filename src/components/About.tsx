import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";

const paragraphs = [
  "Мой путь в помогающих практиках начался с классического образования — я специалист по социальной работе. За этим стоит фундамент, который даёт мне объёмную оптику: социология, психология, религиоведение, понимание систем, в которых живёт человек. Я вижу не только внутренние процессы, но и контекст вашей жизни — это позволяет работать глубже и бережнее.",
  "Сегодня за моими плечами многолетний опыт работы с людьми и несколько ступеней профессионального развития, включая коучинг. Но главный инструмент — не дипломы, а способность удерживать целостный взгляд. В моём подходе психология встречается с социологией, а Таро и метафорические карты становятся языком, на котором мы говорим с вашим подсознанием.",
  "В моей работе есть то, что иногда называют магией. Только это не предсказания и не тайные знания, а способность видеть то, что скрыто от поверхностного взгляда. Когда психология, социология и язык символов складываются в цельную картину — решение приходит само. И оно всегда оказывается верным.",
];

const credentials = [
  { icon: GraduationCap, label: "Социолог" },
  { icon: Award, label: "Психолог" },
  { icon: BookOpen, label: "Таролог" },
  { icon: Award, label: "Семейный консультант" },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      {/* Ambient overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 45% 50% at 25% 40%, hsl(160 45% 10% / 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 35% 35% at 75% 60%, hsl(43 76% 52% / 0.03) 0%, transparent 50%),
          linear-gradient(180deg, hsl(160 30% 4% / 0.3) 0%, hsl(160 27% 5% / 0.4) 50%, hsl(160 30% 4% / 0.3) 100%)
        `,
      }} />

      <ParallaxLayer speed={0.4}>
        <SectionDecor variant="about" />
        <FantasyDecor variant="about" />
      </ParallaxLayer>

      <div className="container mx-auto max-w-3xl relative z-10 px-6 sm:px-10 md:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="w-8 h-px bg-accent/20" />
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-accent/40">О специалисте</span>
            <div className="w-8 h-px bg-accent/20" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold"
            style={{
              background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Обо мне
          </h2>
        </motion.div>

        {/* Biography paragraphs */}
        <div className="space-y-8 md:space-y-10">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="font-body text-base md:text-lg text-foreground/55 leading-[2] md:leading-[2.1]"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-14 md:my-20 mx-auto w-32 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(43 76% 52% / 0.25), transparent)' }}
        />

        {/* Credential tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {credentials.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 rounded-full border border-accent/10 px-5 py-2.5 transition-all duration-500 hover:border-accent/25"
              style={{ background: 'hsl(160 30% 5% / 0.5)' }}
            >
              <c.icon className="h-3.5 w-3.5 text-accent/50" />
              <span className="font-body text-xs text-foreground/45 tracking-wide">{c.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
