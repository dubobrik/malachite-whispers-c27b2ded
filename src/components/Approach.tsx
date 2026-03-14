import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import GoldParticles from "./GoldParticles";

const Approach = () => {
  return (
    <section className="section-padding malachite-section relative"
      style={{ background: 'linear-gradient(180deg, hsl(160 30% 5%), hsl(160 25% 7%), hsl(160 30% 5%))' }}>
      <GoldParticles count={8} />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <Gem className="h-5 w-5 text-accent/50 animate-gem-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-accent mb-8"
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
          <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
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