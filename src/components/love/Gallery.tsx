import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";
import m5 from "@/assets/memory-5.jpg";
import m6 from "@/assets/memory-6.jpg";

const memories = [
  { src: m1, caption: "the evening the sky matched how I felt", span: "md:col-span-2 md:row-span-2" },
  { src: m2, caption: "two cups, one quiet morning", span: "" },
  { src: m3, caption: "walking nowhere in particular", span: "" },
  { src: m4, caption: "petals, paper, and a small promise", span: "md:col-span-2" },
  { src: m5, caption: "little frozen seconds of us", span: "" },
  { src: m6, caption: "the day everything felt lighter", span: "" },
];

export function Gallery() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="reveal font-script text-2xl text-[color:var(--rose-deep)]">soft little memories</p>
          <h2 className="reveal mt-3 font-serif text-4xl text-balance md:text-5xl">
            Moments I keep replaying
          </h2>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {memories.map((m, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-700 hover:shadow-petal ${m.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={m.src}
                alt={m.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-5 font-serif text-base italic text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-lg">
                {m.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}