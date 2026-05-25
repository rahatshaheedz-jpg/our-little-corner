import { Heart } from "lucide-react";
import { useMemo } from "react";

export function FloatingHearts({ count = 14 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="absolute animate-float-up text-[color:var(--rose-soft)]"
          fill="currentColor"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        />
      ))}
      {/* Sparkles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={`s-${i}`}
          className="absolute animate-sparkle rounded-full bg-[color:var(--gold-soft)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            animationDelay: `${Math.random() * 4}s`,
            opacity: 0.7,
            boxShadow: "0 0 8px currentColor",
          }}
        />
      ))}
    </div>
  );
}