const notes = [
  "You make my life softer.",
  "Even simple moments feel special with you.",
  "You are one of the most beautiful parts of my life.",
  "If happiness had a face, it would look a lot like yours.",
  "I love the version of me that exists around you.",
  "Thank you for being so easy to love.",
];

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];

export function Messages() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">tiny letters</p>
          <h2 className="reveal mt-3 font-serif text-4xl text-balance md:text-5xl">
            Little things I want you to read on hard days
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((n, i) => (
            <div
              key={i}
              className={`reveal group relative ${rotations[i % rotations.length]} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="relative rounded-2xl p-8 shadow-petal"
                style={{
                  background: "linear-gradient(135deg, var(--cream), oklch(0.96 0.025 15))",
                  border: "1px solid oklch(0.9 0.04 15)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rounded-sm opacity-70"
                  style={{ background: "oklch(0.88 0.06 30 / 0.7)" }}
                />
                <p className="font-script text-2xl leading-snug text-[color:var(--rose-deep)] md:text-3xl">
                  “{n}”
                </p>
                <p className="mt-6 text-right font-serif text-sm italic text-muted-foreground">
                  — yours
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}