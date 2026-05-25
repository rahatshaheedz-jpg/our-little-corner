import { useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

export function MusicToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    const next = !on;
    setOn(next);
    const a = audioRef.current;
    if (!a) return;
    if (next) a.play().catch(() => setOn(false));
    else a.pause();
  };

  return (
    <>
      {/* Replace src with your own romantic track later */}
      <audio ref={audioRef} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={on ? "Pause music" : "Play soft music"}
        className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-petal transition-all duration-300 hover:scale-110 hover:shadow-glow"
        style={{ background: "var(--gradient-rose)" }}
      >
        {on ? <Music className="h-5 w-5 animate-heartbeat" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}