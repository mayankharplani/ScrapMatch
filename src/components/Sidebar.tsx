import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export type NavItem = { label: string; to: string; icon: LucideIcon; exact?: boolean | undefined };

export function Sidebar({
  items,
  company,
  roleLabel,
  onNavigate,
}: {
  items: NavItem[];
  company: string;
  roleLabel: string;
  onNavigate?: (() => void) | undefined;
}) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col gap-8 border-r border-sidebar-border bg-sidebar p-6">
      <Link to="/" className="inline-flex">
        <Logo />
      </Link>

      <div className="rounded-xl bg-surface px-4 py-3">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{roleLabel}</p>
        <p className="mt-1 truncate font-medium">{company}</p>
      </div>

      <nav aria-label="Main navigation" className="flex-1">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onNavigate}
                activeOptions={{ exact: item.exact ?? false }}
                activeProps={{ className: "bg-secondary text-secondary-foreground font-medium" }}
                inactiveProps={{ className: "text-foreground/75 hover:bg-surface" }}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors",
                )}
              >
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => {
          onNavigate?.();
          navigate({ to: "/" });
        }}
        className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-surface"
      >
        <LogOut className="h-4 w-4" strokeWidth={1.75} />
        Logout
      </button>
    </div>
  );
}
