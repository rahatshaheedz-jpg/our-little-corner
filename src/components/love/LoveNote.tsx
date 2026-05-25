export function LoveNote() {
  return (
    <section id="love-note" className="relative px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">
          a little note, before anything else
        </p>
        <h2 className="reveal mt-6 font-serif text-4xl text-balance md:text-5xl">
          I wanted to make something different for you.
        </h2>
        <p className="reveal mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Not a text. Not a card. Something quiet and slow,
          that you could come back to whenever you wanted to feel a little
          more loved. Every line here is yours. Every word, written
          while thinking of <em className="font-serif">you</em>.
        </p>
        <div className="reveal mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[color:var(--rose-soft)]" />
          <span className="font-script text-xl text-[color:var(--rose-deep)]">— [Your Name]</span>
          <span className="h-px w-12 bg-[color:var(--rose-soft)]" />
        </div>
      </div>
    </section>
  );
}