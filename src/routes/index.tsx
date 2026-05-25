import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/love/Hero";
import { LoveNote } from "@/components/love/LoveNote";
import { Reasons } from "@/components/love/Reasons";
import { Gallery } from "@/components/love/Gallery";
import { Messages } from "@/components/love/Messages";
import { Timeline } from "@/components/love/Timeline";
import { Surprise } from "@/components/love/Surprise";
import { Confession } from "@/components/love/Confession";
import { Footer } from "@/components/love/Footer";
import { FloatingHearts } from "@/components/love/FloatingHearts";
import { MusicToggle } from "@/components/love/MusicToggle";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "For You — a little love letter" },
      {
        name: "description",
        content:
          "A small corner of the internet, written entirely out of love. A digital love letter, made just for her.",
      },
      { property: "og:title", content: "For You — a little love letter" },
      {
        property: "og:description",
        content: "A digital love letter, made just for her.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative">
      <FloatingHearts />
      <Hero />
      <LoveNote />
      <Reasons />
      <Gallery />
      <Messages />
      <Timeline />
      <Surprise />
      <Confession />
      <Footer />
      <MusicToggle />
    </main>
  );
}
