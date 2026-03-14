import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import GoldParticles from "./GoldParticles";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const Approach = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: 0.03,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 50%, hsl(160 45% 10% / 0.15) 0%, transparent 70%),
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(160 28% 5%) 50%, hsl(var(--background)) 100%)
        `,
      }} />

      <ParallaxLayer speed={0.4}>
        <SectionDecor variant="approach" />
        <FantasyDecor variant="approach" />
        <GoldParticles count={4} />
      </ParallaxLayer>

      {/* Content — asymmetric editorial layout */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          {/* Left: label column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <Gem className="h-4 w-4 text-accent/35" />
              <div className="w-8 h-px bg-accent/15" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Мой подход
            </h2>
            <p className="font-display text-sm text-foreground/35 italic">
              Целостный взгляд через три грани
            </p>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="gold-border-card"
          >
            <p className="font-body text-base md:text-lg text-foreground/65 leading-[1.9]">
              Я объединяю глубинную психологию, социологический анализ и символический
              язык Таро, чтобы помочь вам увидеть ситуацию целостно и найти верное
              решение. Мои консультации — это пространство безопасности и принятия,
              где каждая женщина может быть услышанной и понять свой путь. С
              социологическим образованием я понимаю контекст вашей жизни, с
              психологическим — глубинные процессы, а таро даёт метафорический ключ к
              подсознанию.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
