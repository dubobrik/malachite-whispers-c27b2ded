import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import GoldParticles from "./GoldParticles";
import SectionDecor from "./SectionDecor";
import FantasyDecor from "./FantasyDecor";
import ParallaxLayer from "./ParallaxLayer";

const Approach = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 relative overflow-hidden">
      {/* Semi-transparent overlay to let global malachite texture show */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 50%, hsl(160 45% 10% / 0.15) 0%, transparent 70%),
          linear-gradient(180deg, hsl(160 30% 4% / 0.3) 0%, hsl(160 28% 5% / 0.4) 50%, hsl(160 30% 4% / 0.3) 100%)
        `,
      }} />

      <ParallaxLayer speed={0.4}>
        <SectionDecor variant="approach" />
        <FantasyDecor variant="approach" />
        <GoldParticles count={4} />
      </ParallaxLayer>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="gold-border-card"
          >
            <div className="space-y-4">
              {[
                "Я объединяю психологию, социологию, Таро и метафорические карты — чтобы увидеть вашу ситуацию целиком, без шаблонов и осуждения.",
                "Мы находим глубинные причины происходящего и превращаем их в понятные шаги. Чтобы в итоге вы получили ясность, опору и понимание — куда двигаться дальше.",
                "Это пространство, где вас слышат по-настоящему. Чтобы вы смогли увидеть себя яснее — и свое решение."
              ].map((text, i) => (
                <p key={i} className="font-body text-base md:text-lg text-foreground/65 leading-[1.9]">
                  {text}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-wider uppercase rounded-sm border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(43 76% 68% / 0.1), hsl(43 76% 45% / 0.05))',
                }}
              >
                Записаться
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
