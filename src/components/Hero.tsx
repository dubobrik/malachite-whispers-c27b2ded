import { motion } from "framer-motion";
import malachiteTexture from "@/assets/malachite-texture.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${malachiteTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-malachite-deep/70" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight mb-6"
        >
          Интегральный подход к&nbsp;вашей жизни
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-xl md:text-2xl text-primary-foreground/90 italic mb-4"
        >
          Таролог · Социолог · Коуч · Семейный психолог
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-base md:text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Помогаю найти опору и ответы через глубину традиций и ясность знания
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a href="#contact" className="btn-gold text-base px-10 py-4">
            Записаться на консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
