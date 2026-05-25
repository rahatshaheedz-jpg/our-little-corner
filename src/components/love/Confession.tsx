import { useState } from "react";
import { Heart } from "lucide-react";

export function Confession() {
  const [answered, setAnswered] = useState<string | null>(null);
  const [absoluteCount, setAbsoluteCount] = useState(0);

  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.92 0.06 15 / 0.8), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">
          and now, finally
        </p>
        <h2 className="reveal mt-6 font-serif text-5xl leading-[1.05] text-balance md:text-6xl">
          What my heart has been <br />
          <span className="italic gradient-rose-text">trying to say.</span>
        </h2>

        <div className="reveal mx-auto mt-12 max-w-xl space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            I’m not great with grand speeches. I’d rather show it in a hundred
            small ways — a saved seat, a remembered detail, a hand reaching
            for yours without thinking.
          </p>
          <p className="font-serif text-2xl italic text-foreground md:text-3xl">
            But if I had to put it into one line…
          </p>
        </div>

        <p
          className="reveal mt-12 font-script text-5xl leading-tight text-[color:var(--rose-deep)] md:text-6xl"
        >
          I really, truly love you.
        </p>
        <p className="reveal mt-6 font-serif text-xl italic text-balance md:text-2xl">
          Would you let me be a little more of your world?
        </p>

        {!answered ? (
          <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => setAnswered("yes")}
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--rose-soft)] bg-white/70 px-8 py-4 text-base font-medium text-[color:var(--rose-deep)] shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-petal"
            >
              <Heart className="h-4 w-4 transition-transform group-hover:scale-125" fill="currentColor" />
              Yes
            </button>
            <button
              onClick={() => {
                setAbsoluteCount((c) => c + 1);
                if (absoluteCount >= 1) setAnswered("absolutely");
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-10 py-4 text-base font-medium text-primary-foreground shadow-petal transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-glow"
              style={{
                background: "var(--gradient-rose)",
                fontSize: `${1 + absoluteCount * 0.15}rem`,
              }}
            >
              <Heart className="h-5 w-5 animate-heartbeat" fill="currentColor" />
              Absolutely yes
            </button>
          </div>
        ) : (
          <div className="mt-12 animate-fade-up">
            <p className="font-script text-4xl text-[color:var(--rose-deep)] md:text-5xl">
              I was so hoping you’d say that.
            </p>
            <div className="mt-6 flex justify-center gap-2 text-[color:var(--rose-deep)]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Heart
                  key={i}
                  fill="currentColor"
                  className="h-6 w-6 animate-heartbeat"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}