import { ExternalLink, Star } from "lucide-react";

const ReviewsLink = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-accent fill-accent/60" />
          ))}
        </div>

        <p className="font-body text-base text-foreground/60 leading-relaxed">
          Отзывы о моей работе можно прочитать на 2GIS
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent/15 border border-accent/20 text-foreground/80 font-body text-sm tracking-wide hover:bg-accent/25 hover:border-accent/30 transition-all duration-500"
        >
          Читать отзывы на 2GIS
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default ReviewsLink;
