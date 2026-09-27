import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Recycle, Sprout } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { landingStats } from "@/data/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScrapMatch — From factory scrap to its next useful application" },
      {
        name: "description",
        content:
          "SCRAPMATCH is a B2B circular marketplace connecting textile factories with surplus scrap to buyers who need recycled textile material.",
      },
      { property: "og:title", content: "ScrapMatch — Circular textile scrap marketplace" },
      {
        property: "og:description",
        content:
          "Turn surplus textile material into opportunity through a smarter local circular marketplace.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login/$role" params={{ role: "supplier" }}>
              Supplier login
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login/$role" params={{ role: "buyer" }}>
              Buyer login
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <Badge tone="surface">Local-first circular marketplace</Badge>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl">
              From factory scrap to its next useful application.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Turn surplus textile material into opportunity through a smarter local circular
              marketplace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link to="/login/$role" params={{ role: "supplier" }}>
                  I Have Textile Scrap <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/login/$role" params={{ role: "buyer" }}>
                  I Need Textile Material
                </Link>
              </Button>
            </div>

            <dl className="mt-12 flex flex-wrap border-y border-border/70 py-6 sm:divide-x sm:divide-border/70">
              {landingStats.map((stat) => (
                <div key={stat.label} className="flex-1 px-4 first:pl-0 last:pr-0">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <FlowVisual />
        </section>

        <section className="mt-24 border-t border-border/70 pt-16">
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {[
              {
                icon: Factory,
                title: "List surplus lots",
                body: "Factories publish clean, sorted scrap with composition, quantity and location.",
              },
              {
                icon: Sprout,
                title: "Smart matching",
                body: "We score composition, quality, distance, availability and quantity fit.",
              },
              {
                icon: Recycle,
                title: "Aggregate to fulfil",
                body: "Multiple nearby lots combine into one order that meets the full requirement.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-primary">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h2 className="font-display text-xl font-medium">{item.title}</h2>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-6">
        <p className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground flex justify-between items-center">
          <span>&copy; {new Date().getFullYear()} SCRAPMATCH&trade;</span>
          <span>All rights reserved.</span>
        </p>
      </footer>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-8">
      {/* Abstract structural representation instead of rigid cards */}
      <div className="flex w-full items-end justify-between gap-4 sm:gap-12">
        <div className="flex flex-1 flex-col items-center">
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border/70 bg-background/50 shadow-sm backdrop-blur-md">
            <span className="h-8 w-8 rounded-full bg-primary/15" aria-hidden="true" />
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Supplier lot</p>
            <p className="font-display font-medium">ABC Textiles</p>
            <p className="text-sm text-muted-foreground">320 kg</p>
          </div>
        </div>

        {/* Central connecting area */}
        <div className="flex flex-col items-center justify-center pb-12">
          <div className="relative flex items-center justify-center">
            {/* Connecting lines */}
            <div className="absolute top-1/2 -z-10 h-[1px] w-[200px] -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent sm:w-[300px]" />
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background shadow-sm">
              <Recycle className="h-5 w-5 text-secondary" strokeWidth={1.5} />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border/70 bg-background/50 shadow-sm backdrop-blur-md">
            <span className="h-8 w-8 rounded-full bg-peach/70" aria-hidden="true" />
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Supplier lot</p>
            <p className="font-display font-medium">XYZ Garments</p>
            <p className="text-sm text-muted-foreground">180 kg</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-sm flex-col items-center">
        <div className="h-8 w-[1px] bg-gradient-to-b from-border to-transparent" />
        <div className="mt-2 flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Buyer requirement
          </p>
          <p className="mt-2 font-display text-3xl font-semibold">500 kg · 100% Cotton</p>
          <p className="mt-2 text-sm text-muted-foreground">Fully fulfilled from 2 local suppliers</p>
        </div>
      </div>
    </div>
  );
}
