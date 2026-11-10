import { useState } from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/language";
import { awardMonth, awardDateUpdate, awardDateLabel } from "@/lib/honors";
import type { TranslationKey } from "@/lib/i18n";

export type HonorsRow = {
  id: string;
  name?: string | null;
  year?: number | null;
  level?: string | null;
  placement?: string | null;
  role?: string | null;
  subject?: string | null;
  award_date?: string | null;
  awarding_institution?: string | null;
  country_region?: string | null;
  [key: string]: unknown;
};

const LEVELS: { value: string; label: TranslationKey }[] = [
  { value: "School", label: "honors.school" },
  { value: "Regional", label: "honors.regional" },
  { value: "National", label: "honors.national" },
  { value: "International", label: "honors.international" },
];

interface Props {
  rows: HonorsRow[];
  onAdd: (values: Record<string, unknown>) => Promise<HonorsRow | void>;
  onUpdate: (id: string, values: Record<string, unknown>) => void;
  onDelete: (id: string) => void;
}

export function HonorsSection({ rows, onAdd, onUpdate, onDelete }: Props) {
  const { t } = useLanguage();
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [adding, setAdding] = useState(false);

  async function add() {
    if (adding) return;
    setAdding(true);
    try {
      const created = await onAdd({ name: "", level: "Regional" });
      if (created?.id) setOpen((o) => ({ ...o, [created.id]: true }));
    } finally {
      setAdding(false);
    }
  }

  return (
    <section className="surface-card p-4 sm:p-7">
      <h2 className="text-lg font-bold">{t("text.151")}</h2>
      <div className="mt-4 grid gap-3">
        {rows.length === 0 && <p className="text-sm text-muted-foreground">{t("text.152")}</p>}
        {rows.map((row, i) => {
          const isOpen = !!open[row.id];
          const role = row.role ?? row.placement ?? "";
          const date = awardDateLabel(row.award_date, row.year);
          return (
            <div key={row.id} className="rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 p-3 sm:gap-3 sm:p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto min-w-0 flex-1 justify-between whitespace-normal px-2 py-1 text-left"
                  onClick={() => setOpen((o) => ({ ...o, [row.id]: !isOpen }))}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? t("honors.collapse") : t("honors.expand")}
                  aria-controls={`honor-${row.id}`}
                >
                  <div className="min-w-0">
                  <div className="truncate font-semibold">{row.name || t("honors.untitled")}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {[role, row.awarding_institution, date].filter(Boolean).join(" · ")}
                  </div>
                  </div>
                  <ChevronDown className={`size-4 transition-transform motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onDelete(row.id)} aria-label={t("text.150")}>
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>
              {isOpen && (
                <div id={`honor-${row.id}`} className="grid gap-4 border-t border-border p-4 sm:grid-cols-2">
                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label htmlFor={`title-${row.id}`}>{t("honors.title")}</Label>
                    <Input
                      id={`title-${row.id}`}
                      placeholder={t("honors.titlePh")}
                      defaultValue={row.name ?? ""}
                      onBlur={(e) => onUpdate(row.id, { name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label htmlFor={`institution-${row.id}`}>{t("honors.inst")}</Label>
                    <Input
                      id={`institution-${row.id}`}
                      placeholder={t("honors.instPh")}
                      defaultValue={row.awarding_institution ?? ""}
                      onBlur={(e) => onUpdate(row.id, { awarding_institution: e.target.value || null })}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor={`date-${row.id}`}>{t("honors.date")}</Label>
                    <Input
                      id={`date-${row.id}`}
                      type="month"
                      defaultValue={awardMonth(row.award_date)}
                      onChange={(e) => {
                        onUpdate(row.id, awardDateUpdate(e.target.value));
                      }}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor={`country-${row.id}`}>{t("honors.country")}</Label>
                    <Input
                      id={`country-${row.id}`}
                      placeholder={t("honors.countryPh")}
                      defaultValue={row.country_region ?? ""}
                      onBlur={(e) => onUpdate(row.id, { country_region: e.target.value || null })}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor={`role-${row.id}`}>{t("honors.role")}</Label>
                    <Input
                      id={`role-${row.id}`}
                      placeholder={t("honors.rolePh")}
                      defaultValue={role}
                      onBlur={(e) => onUpdate(row.id, { role: e.target.value || null, placement: e.target.value || null })}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor={`level-${row.id}`}>{t("honors.level")}</Label>
                    <Select defaultValue={row.level ?? "Regional"} onValueChange={(v) => onUpdate(row.id, { level: v })}>
                      <SelectTrigger id={`level-${row.id}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LEVELS.map((l) => (
                          <SelectItem key={l.value} value={l.value}>
                            {t(l.label)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label htmlFor={`subject-${row.id}`}>{t("honors.subject")}</Label>
                    <Input
                      id={`subject-${row.id}`}
                      placeholder={t("text.154")}
                      defaultValue={row.subject ?? ""}
                      onBlur={(e) => onUpdate(row.id, { subject: e.target.value || null })}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" className="rounded-full" onClick={add} disabled={adding}>
          <Plus className="mr-1 size-4" /> {t("honors.add")}
        </Button>
      </div>
    </section>
  );
}
