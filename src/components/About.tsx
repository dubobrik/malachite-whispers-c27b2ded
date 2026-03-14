import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import specialistPhoto from "@/assets/specialist-photo.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, hsl(160 30% 5%), hsl(160 25% 6%), hsl(160 30% 5%))' }}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-accent text-center mb-12"
        >
          Обо мне
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-xl bg-muted overflow-hidden gold-photo-frame">
              <img src={specialistPhoto} alt="Фото специалиста" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-accent/40 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-accent/40 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="font-body text-foreground/65 leading-relaxed">
              Меня зовут [Имя], и я — интегральный специалист с многолетним опытом
              работы в социологии, психологии и практике Таро. Моё образование
              включает социологический факультет и дополнительную подготовку в
              области семейной психологии и коучинга.
            </p>
            <p className="font-body text-foreground/65 leading-relaxed">
              Интерес к символическому языку Таро пришёл через глубинную
              психологию. Карты для меня — это не предсказания, а инструмент
              самопознания, метафорический мост к бессознательному.
            </p>
            <p className="font-body text-foreground/65 leading-relaxed">
              Мой принцип работы — целостный взгляд на человека: контекст его
              жизни, внутренние процессы и символическое пространство. Я создаю
              безопасную атмосферу, где каждый может быть услышан.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: GraduationCap, label: "Социолог" },
                { icon: Award, label: "Психолог" },
                { icon: BookOpen, label: "Таролог" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 rounded-full border border-accent/20 px-4 py-2 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_hsl(43_76%_52%/0.1)]"
                  style={{ background: 'hsl(43 76% 52% / 0.05)' }}
                >
                  <c.icon className="h-4 w-4 text-accent" />
                  <span className="font-body text-sm text-foreground/60">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;