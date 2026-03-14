import { motion } from "framer-motion";

const Approach = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary mb-8"
        >
          Мой подход
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-base md:text-lg text-foreground/80 leading-relaxed"
        >
          Я объединяю глубинную психологию, социологический анализ и символический
          язык Таро, чтобы помочь вам увидеть ситуацию целостно и найти верное
          решение. Мои консультации — это пространство безопасности и принятия,
          где каждая женщина может быть услышанной и понять свой путь. С
          социологическим образованием я понимаю контекст вашей жизни, с
          психологическим — глубинные процессы, а таро даёт метафорический ключ к
          подсознанию.
        </motion.p>
      </div>
    </section>
  );
};

export default Approach;
