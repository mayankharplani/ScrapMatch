import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Field, Input } from "@/components/Field";
import { Logo } from "@/components/Logo";
import { BUYER_COMPANY, SUPPLIER_COMPANY } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";

export const Route = createFileRoute("/login/$role")({
  head: () => ({
    meta: [
      { title: "Demo login — SCRAPMATCH" },
      {
        name: "description",
        content: "Enter the SCRAPMATCH prototype as a textile scrap supplier or a material buyer.",
      },
      { property: "og:title", content: "Demo login — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Prototype demo accounts for suppliers and buyers on SCRAPMATCH.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { role } = Route.useParams();
  const isSupplier = role !== "buyer";
  const navigate = useNavigate();
  const { signIn } = useDemo();

  const [company, setCompany] = React.useState(isSupplier ? SUPPLIER_COMPANY : BUYER_COMPANY);
  const [email, setEmail] = React.useState(
    isSupplier ? "demo@abctextiles.in" : "demo@greenfiber.in",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/">
          <Logo />
        </Link>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </Button>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-16">
        <Card className="w-full max-w-md">
          <Badge tone="surface">Prototype demo account</Badge>
          <h1 className="mt-4 font-display text-2xl font-semibold">
            {isSupplier ? "Supplier login" : "Buyer login"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {isSupplier
              ? "List your factory's surplus textile scrap and track pickups."
              : "Post material requirements and review smart supplier matches."}
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signIn(isSupplier ? "supplier" : "buyer", company);
              navigate({ to: isSupplier ? "/supplier" : "/buyer" });
            }}
          >
            <Field label="Company name">
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                autoComplete="organization"
              />
            </Field>
            <Field label="Email">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </Field>
            <Button type="submit" variant="primary" size="lg" block>
              Enter Demo
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            {isSupplier ? (
              <Link to="/login/$role" params={{ role: "buyer" }} className="text-primary underline">
                I need textile material instead
              </Link>
            ) : (
              <Link
                to="/login/$role"
                params={{ role: "supplier" }}
                className="text-primary underline"
              >
                I have textile scrap instead
              </Link>
            )}
          </p>
        </Card>
      </main>
    </div>
  );
}
