import { translate } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { createFileRoute } from "@tanstack/react-router";
import { Target, ShieldCheck, Globe2, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: translate("en", "text.002") },
      {
        name: "description",
        content:
          translate("en", "text.003"),
      },
      { property: "og:title", content: translate("en", "text.004") },
      {
        property: "og:description",
        content: translate("en", "text.005"),
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});



function About() {
  const { t, lang } = useLanguage();
const VALUES = [
  { icon: Target, title: t("text.006"), text: t("text.007") },
  { icon: Globe2, title: t("text.008"), text: t("text.009") },
  { icon: ShieldCheck, title: t("text.010"), text: t("text.011") },
  { icon: Rocket, title: t("text.012"), text: t("text.013") },
];
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">{t("text.014")}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        
        {t("text.015")}
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {VALUES.map((v) => (
          <div key={v.title} className="surface-card p-7">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-lime/20 text-lime">
              <v.icon className="size-5" />
            </span>
            <h2 className="mt-4 text-lg font-bold">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>

      <div className="surface-card mt-12 p-8">
        <h2 className="text-xl font-bold">{t("text.016")}</h2>
        <ol className="mt-4 grid gap-3 text-sm text-muted-foreground">
          <li>{t("text.017")}</li>
          <li>{t("text.018")}</li>
          <li>{t("text.019")}</li>
          <li>{t("text.020")}</li>
        </ol>
      </div>
    </div>
  );
}
