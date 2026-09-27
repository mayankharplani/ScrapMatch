import * as React from "react";
import { Outlet } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Sidebar, type NavItem } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppShell({
  items,
  company,
  roleLabel,
  title,
  subtitle,
}: {
  items: NavItem[];
  company: string;
  roleLabel: string;
  title: string;
  subtitle?: string | undefined;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-0 h-screen">
          <Sidebar items={items} company={company} roleLabel={roleLabel} />
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-sidebar shadow-lift">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-5 inline-flex h-8 w-8 items-center justify-center rounded-lg text-foreground/70"
              aria-label="Close navigation"
            >
              <X className="h-4 w-4" />
            </button>
            <Sidebar
              items={items}
              company={company}
              roleLabel={roleLabel}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-col">
        <Topbar title={title} subtitle={subtitle} onMenuClick={() => setOpen(true)} />
        <main className="flex-1 px-5 py-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
