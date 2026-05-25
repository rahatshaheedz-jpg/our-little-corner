import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-16 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-3">
        <Heart className="h-5 w-5 animate-heartbeat text-[color:var(--rose-deep)]" fill="currentColor" />
        <p className="font-script text-2xl text-[color:var(--rose-deep)]">
          Made with love, just for you.
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          [Your Name] &nbsp;·&nbsp; [Special Date]
        </p>
      </div>
    </footer>
  );
}