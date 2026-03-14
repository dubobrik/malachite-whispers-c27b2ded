import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import GoldParticles from "./GoldParticles";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const Approach = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Layer 1: Malachite texture background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: 0.04,
      }} />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 70% 60% at 50% 50%, hsl(160 50% 12% / 0.2) 0%, transparent 70%),
          linear-gradient(180deg, hsl(160 30% 5%) 0%, hsl(160 28% 6%) 50%, hsl(160 30% 5%) 100%)
        `,
      }} />

      {/* Layer 2: Decorative elements */}
      <SectionDecor variant="approach" />
      <GoldParticles count={8} />

      {/* Layer 3: Content */}
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <div className="relative">
            <Gem className="h-5 w-5 text-accent/50 animate-gem-pulse" />
            <div className="absolute inset-0 blur-md" style={{ background: 'hsl(43 76% 52% / 0.15)' }} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-accent mb-8"
          style={{ filter: 'drop-shadow(0 0 20px hsl(43 76% 52% / 0.15))' }}
        >
          Мой подход
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-border-card text-left backdrop-blur-sm"
        >
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
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
    </section>
  );
};

export default Approach;