import { translate } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Lock, Loader2, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { DEMO_LEADERBOARD } from "@/lib/demo-leaderboard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: translate("en", "text.085") },
      {
        name: "description",
        content:
          translate("en", "text.086"),
      },
      { property: "og:title", content: translate("en", "text.085") },
      {
        property: "og:description",
        content: translate("en", "text.087"),
      },
    ],
  }),
  component: LeaderboardPage,
});



/* eslint-disable @typescript-eslint/no-explicit-any */
type Entry = any;

function medal(i: number) {
  return i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
}

function LeaderboardPage() {
  const { t, lang } = useLanguage();
const TABS = [
  { key: null, label: t("common.all") },
  { key: "USA", label: t("country.usa") },
  { key: "Hong Kong", label: t("country.hongKong") },
  { key: "Europe", label: t("country.europe") },
  { key: "Kazakhstan", label: t("country.kazakhstan") },
] as const;
  const { user, loading: authLoading } = useAuth();
  const [country, setCountry] = useState<string | null>(null);
  const [rows, setRows] = useState<Entry[]>([]);
  const [total, setTotal] = useState(0);
  const [myRank, setMyRank] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Entry | null>(null);

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await (supabase.rpc as any)("get_leaderboard", {
      _country: country,
    });
    const real = error ? [] : ((data as Entry[]) ?? []);
    const merged = [...real, ...DEMO_LEADERBOARD]
      .filter(
        (r) =>
          !country ||
          (Array.isArray(r.target_countries) && r.target_countries.includes(country)),
      )
      .sort((a, b) => (b.holistic_score ?? 0) - (a.holistic_score ?? 0))
      .slice(0, 50);
    const all = [...real, ...DEMO_LEADERBOARD]
      .filter(
        (r) =>
          !country ||
          (Array.isArray(r.target_countries) && r.target_countries.includes(country)),
      )
      .sort((a, b) => (b.holistic_score ?? 0) - (a.holistic_score ?? 0));
    setTotal(all.length);
    const idx = all.findIndex((r) => r.user_id === user.id);
    setMyRank(idx >= 50 ? idx + 1 : null);
    setRows(merged);
    setLoading(false);
  }, [user, country]);

  useEffect(() => {
    void load();
  }, [load]);

  if (authLoading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="size-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">{t("text.093")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          
          {t("text.094")}
        </p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/auth">{t("text.056")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Trophy className="size-5" />
        </span>
        <div>
          <h1 className="text-4xl font-extrabold">{t("nav.leaderboard")}</h1>
          <p className="text-sm text-muted-foreground">
            
            {t("text.096")}
          </p>
        </div>
        <div className="ml-auto flex flex-col items-end gap-1">
          <Badge variant="secondary" className="rounded-full">
            
            {t("leaderboard.total")} {total}
          </Badge>
          {myRank !== null && (
            <Badge variant="outline" className="rounded-full">
              
              {t("text.098")}{myRank}
            </Badge>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setCountry(tab.key)}
            className={
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors " +
              (country === tab.key
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-secondary")
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="size-6 animate-spin text-primary" />
        </div>
      ) : rows.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          
          {t("text.099")}
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {rows.map((r: Entry, i: number) => {
            const mine = r.user_id === user.id;
            return (
              <li
                key={r.user_id}
                className={
                  "surface-card flex items-center gap-4 p-4 " +
                  (mine ? "ring-2 ring-primary/40" : "")
                }
              >
                <span className="w-10 shrink-0 text-center text-lg font-bold">{medal(i)}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-semibold">
                      {r.full_name ?? t("text.100")}
                    </span>
                    {!r.is_public && <Lock className="size-3.5 text-muted-foreground" />}
                    {mine && <Badge className="rounded-full">{t("text.101")}</Badge>}
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    {r.is_public
                      ? [r.high_school, r.city, r.target_major].filter(Boolean).join(" · ") ||
                        t("text.102")
                      : [r.high_school, r.city].filter(Boolean).join(" · ") ||
                        t("text.103")}
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-primary">
                  {r.holistic_score ?? "—"}
                </span>
                <Button
                  size="sm"
                  variant={r.is_public ? "outline" : "ghost"}
                  className="rounded-full"
                  disabled={!r.is_public}
                  onClick={() => setActive(r)}
                >
                  {r.is_public ? t("nav.profile") : t("leaderboard.locked")}
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.full_name ?? t("text.100")}</DialogTitle>
                <DialogDescription>
                  {[active.high_school, active.grade_level, active.target_major]
                    .filter(Boolean)
                    .join(" · ")}
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-primary">
                  {active.holistic_score ?? "—"}
                </span>
                <span className="text-sm text-muted-foreground">{t("leaderboard.holisticScore")}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                {[
                  ["GPA", active.gpa_unweighted],
                  ["SAT", active.sat_score],
                  ["ACT", active.act_score],
                  [t("text.106"), active.unt_score],
                  ["NUET", active.nuet_score],
                ]
                  .filter(([, v]) => v !== null && v !== undefined)
                  .map(([k, v]) => (
                    <div key={String(k)} className="rounded-xl bg-secondary px-3 py-2">
                      <p className="text-xs text-muted-foreground">{String(k)}</p>
                      <p className="font-semibold">{String(v)}</p>
                    </div>
                  ))}
              </div>
              {(active.target_countries ?? []).length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {(active.target_countries as string[]).map((c) => (
                    <Badge key={c} variant="secondary" className="rounded-full">
                      {c}
                    </Badge>
                  ))}
                </div>
              )}
              {active.summary && <p className="text-sm text-muted-foreground">{active.summary}</p>}
              {Array.isArray(active.strengths) && active.strengths.length > 0 && (
                <div>
                  <p className="text-sm font-semibold">{t("text.063")}</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {(active.strengths as unknown[]).slice(0, 6).map((s, idx) => (
                      <li key={idx}>{typeof s === "string" ? s : JSON.stringify(s)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
