import { Heart } from "lucide-react";

const Donate = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
          Сказать спасибо можно любой суммой по сердцу или сделать репост,
          поделиться моим аккаунтом у себя в соц. сетях{" "}
          <Heart className="inline h-4 w-4 text-red-400 fill-red-400 align-text-bottom" />
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full max-w-md mx-auto px-8 py-4 rounded-lg bg-accent/15 border border-accent/20 text-foreground/80 font-body text-sm tracking-wide hover:bg-accent/25 hover:border-accent/30 transition-all duration-500 text-center"
        >
          Сделать донат
        </a>

        <p className="font-display text-lg text-foreground/50 tracking-wide">
          Благодарю!
        </p>
      </div>
    </section>
  );
};

export default Donate;
