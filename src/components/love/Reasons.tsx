import { Heart, Smile, Coffee, Sparkles, MessageCircle, Sun, Moon, Music } from "lucide-react";

const reasons = [
  { icon: Smile, title: "Your smile", text: "The way it changes the temperature of a room — and of me." },
  { icon: Heart, title: "Your kindness", text: "Soft, steady, and somehow always there when I need it most." },
  { icon: MessageCircle, title: "The way you understand me", text: "Sometimes without me having to say a single word." },
  { icon: Moon, title: "The peace I feel with you", text: "Like everything finally slows down to a gentle rhythm." },
  { icon: Sparkles, title: "Ordinary moments", text: "You turn the smallest things into memories I want to keep." },
  { icon: Music, title: "Your voice", text: "My favorite sound. Quietly, completely, without trying." },
  { icon: Sun, title: "Your heart", text: "Warm in a way that makes me believe in soft, good things." },
  { icon: Coffee, title: "The way you exist in my world", text: "Like a window left open on a perfect spring morning." },
];

export function Reasons() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">a few of so many</p>
          <h2 className="reveal mt-3 font-serif text-4xl text-balance md:text-5xl">
            Reasons I love you
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="reveal glass-card group relative overflow-hidden rounded-3xl p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-petal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "var(--rose-soft)" }}
                />
                <div className="relative">
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-soft"
                    style={{ background: "var(--gradient-rose)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}