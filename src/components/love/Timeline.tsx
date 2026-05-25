const milestones = [
  {
    date: "[The First Glance]",
    title: "The first time I noticed you",
    text: "Something quiet in me said: pay attention. So I did.",
  },
  {
    date: "[Our First Conversation]",
    title: "The first time we really talked",
    text: "Hours slipped by like minutes. I knew something was beginning.",
  },
  {
    date: "[The Moment]",
    title: "When you became special to me",
    text: "I caught myself smiling at my phone for no reason at all. It was you.",
  },
  {
    date: "[Today]",
    title: "The day I realized I truly love you",
    text: "Not a thunderclap. A soft, certain morning. And I’ve never doubted it since.",
  },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">our quiet story</p>
          <h2 className="reveal mt-3 font-serif text-4xl text-balance md:text-5xl">
            How we became us
          </h2>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--rose-soft), var(--rose-deep), var(--rose-soft), transparent)",
            }}
          />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`reveal relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute left-4 top-3 z-10 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-[color:var(--blush)] md:left-1/2"
                  style={{ background: "var(--gradient-rose)" }}
                />
                <div
                  className={`ml-12 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <p className="font-script text-lg text-[color:var(--rose-deep)]">{m.date}</p>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}