import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import GoldParticles from "./GoldParticles";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const Approach = () => {
  return (
    <section className="section-padding relative overflow-hidden">
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

      <SectionDecor variant="approach" />
      <FantasyDecor variant="approach" />
      <GoldParticles count={6} />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-5"
        >
          <div className="relative">
            <Gem className="h-5 w-5 text-accent/40 animate-gem-pulse" />
            <div className="absolute inset-0 blur-lg" style={{ background: 'hsl(43 76% 52% / 0.12)' }} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title mb-8"
        >
          Мой подход
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-border-card text-left"
        >
          <p className="font-body text-base md:text-lg text-foreground/70 leading-[1.9]">
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
