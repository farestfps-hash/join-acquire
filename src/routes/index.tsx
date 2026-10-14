import { translate } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, ClipboardList, CalendarClock, ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: translate("en", "text.068") },
      {
        name: "description",
        content:
          translate("en", "text.069"),
      },
      { property: "og:title", content: "Studymaxxing — Join&Acquire" },
      {
        property: "og:description",
        content:
          translate("en", "text.070"),
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});



function Home() {
  const { t, lang } = useLanguage();
const FEATURES = [
  {
    icon: Brain,
    title: "AI Admissions Evaluator",
    text: t("text.071"),
    to: "/evaluator" as const,
  },
  {
    icon: ClipboardList,
    title: "Comprehensive Portfolio Builder",
    text: t("text.072"),
    to: "/portfolio" as const,
  },
  {
    icon: CalendarClock,
    title: "AI Roadmap & Calendar",
    text: t("text.073"),
    to: "/roadmap" as const,
  },
];
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft">
            <Sparkle className="size-3.5 text-lime" />
            
            {t("text.074")}
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl">
            <span className="text-gradient-brand">Join&amp;Acquire</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            
            {t("text.075")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/evaluator">{t("text.076")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-lime bg-lime/10 px-7 text-lime hover:bg-lime/20"
            >
              <Link to="/portfolio">{t("text.077")}</Link>
            </Button>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["600+", t("text.078")],
              ["4", t("text.079")],
              ["0-100", t("leaderboard.holisticScore")],
              ["24/7", "Studymax AI"],
            ].map(([v, l]) => (
              <div key={l} className="surface-card px-4 py-5">
                <p className="font-display text-2xl font-bold text-primary">{v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="surface-card group p-7 transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                
                {t("text.081")} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="surface-card overflow-hidden bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">{t("text.082")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90">
            
            {t("text.083")}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 rounded-full bg-lime px-8 text-lime-foreground hover:bg-lime/90"
          >
            <Link to="/auth">{t("text.084")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
