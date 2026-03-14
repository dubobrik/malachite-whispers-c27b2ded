import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import crystals from "@/assets/crystals.jpg";
import lizardKey from "@/assets/lizard-key.jpg";
import lizardPainting from "@/assets/lizard-painting.jpg";
import malachiteLizard from "@/assets/malachite-lizard.jpg";

const images = [
  { src: crystals, alt: "Кристаллы и камни для расклада" },
  { src: lizardKey, alt: "Ящерица с ключом — символ тайного знания" },
  { src: lizardPainting, alt: "Ящерица — Хозяйка Медной горы" },
  { src: malachiteLizard, alt: "Малахитовая ящерица" },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary text-center mb-12"
        >
          Примеры работ
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="aspect-square rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-malachite-deep/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-accent transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
