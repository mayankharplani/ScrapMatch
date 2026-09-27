import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "./Badge";
import { Logo } from "./Logo";

export function Topbar({
  title,
  subtitle,
  onMenuClick,
}: {
  title: string;
  subtitle?: string | undefined;
  onMenuClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="flex items-center gap-3 px-5 py-4 lg:px-10">
        <button
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground/80 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <Link to="/" className="lg:hidden">
          <Logo compact />
        </Link>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-semibold sm:text-xl">{title}</h1>
          {subtitle && <p className="truncate text-sm text-muted-foreground">{subtitle}</p>}
        </div>

        <Badge tone="sage" className="hidden sm:inline-flex">
          Prototype demo
        </Badge>
      </div>
    </header>
  );
}
