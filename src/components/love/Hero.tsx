import { Heart, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollNext = () => {
    document.getElementById("love-note")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="animate-fade-in-slow font-script text-2xl text-[color:var(--rose-deep)] md:text-3xl">
          for [Her Name]
        </p>
        <h1 className="mt-6 animate-fade-up font-serif text-5xl leading-[1.05] text-balance text-foreground md:text-7xl lg:text-[5.5rem]">
          A small corner of <br className="hidden md:block" />
          the internet, made <br className="hidden md:block" />
          <span className="gradient-rose-text italic">from my love for you.</span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-xl animate-fade-up text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          I couldn’t fit everything I feel into a single message,
          so I built this little place — just for you.
        </p>
        <div
          className="mt-12 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={scrollNext}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-9 py-4 text-base font-medium text-primary-foreground shadow-petal transition-all duration-500 hover:scale-105 hover:shadow-glow"
            style={{ background: "var(--gradient-rose)" }}
          >
            <Heart className="h-5 w-5 animate-heartbeat" fill="currentColor" />
            Open my heart
          </button>
        </div>

        <button
          onClick={scrollNext}
          aria-label="Scroll down"
          className="mt-20 inline-flex animate-fade-in-slow flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-[color:var(--rose-deep)]"
          style={{ animationDelay: "0.8s" }}
        >
          <span>scroll softly</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}