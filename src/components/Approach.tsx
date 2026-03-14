import { motion } from "framer-motion";
import GoldParticles from "./GoldParticles";

const Approach = () => {
  return (
    <section className="section-padding malachite-section bg-background relative">
      <GoldParticles count={8} />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary mb-8"
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
