import { useState } from "react";
import { Mail, Sparkles, X } from "lucide-react";

export function Surprise() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">
          psst… come closer
        </p>
        <h2 className="reveal mt-3 font-serif text-4xl text-balance md:text-5xl">
          A little secret, just for you
        </h2>
        <p className="reveal mt-6 text-muted-foreground">
          Open the envelope. I left something inside.
        </p>

        <div className="reveal mt-12 flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="group relative"
            aria-label="Open the secret envelope"
          >
            <div
              className="relative flex h-44 w-72 items-center justify-center rounded-2xl shadow-petal transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg] group-hover:shadow-glow"
              style={{
                background:
                  "linear-gradient(135deg, var(--cream) 0%, oklch(0.88 0.06 30) 100%)",
                border: "1px solid oklch(0.85 0.08 30)",
              }}
            >
              <Mail className="h-14 w-14 text-[color:var(--rose-deep)] transition-transform duration-500 group-hover:scale-110" />
              <Sparkles className="absolute -top-3 -right-3 h-6 w-6 animate-sparkle text-[color:var(--gold-soft)]" />
              <Sparkles
                className="absolute -bottom-3 -left-3 h-5 w-5 animate-sparkle text-[color:var(--rose-soft)]"
                style={{ animationDelay: "1s" }}
              />
            </div>
            <p className="mt-5 font-script text-xl text-[color:var(--rose-deep)]">
              click to open
            </p>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in-slow"
          style={{ background: "oklch(0.32 0.08 20 / 0.5)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-lg overflow-hidden rounded-3xl p-10 text-center shadow-petal animate-fade-up"
            style={{
              background: "linear-gradient(135deg, var(--cream), oklch(0.94 0.04 15))",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-[color:var(--blush)]"
            >
              <X className="h-4 w-4" />
            </button>
            <Sparkles className="mx-auto h-8 w-8 text-[color:var(--gold-soft)]" />
            <p className="mt-5 font-script text-3xl text-[color:var(--rose-deep)]">
              you are loved.
            </p>
            <p className="mt-6 font-serif text-xl leading-relaxed text-balance md:text-2xl">
              Wildly, quietly, completely — and on every kind of day.
              That’s the whole secret. <br /> It was always you.
            </p>
            <p className="mt-6 text-sm text-muted-foreground italic">
              now keep scrolling, my love
            </p>
          </div>
        </div>
      )}
    </section>
  );
}