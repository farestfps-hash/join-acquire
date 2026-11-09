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

type Row = Record<string, any>;

const LEVELS = ["School", "Regional", "National", "International"];

interface Props {
  rows: Row[];
  onAdd: (values: Row) => Promise<Row | void>;
  onUpdate: (id: string, values: Row) => void;
  onDelete: (id: string) => void;
}

function formatDate(v?: string | null) {
  if (!v) return "";
  const [y, m] = v.split("-");
  return m ? `${m}/${y}` : v;
}

export function HonorsSection({ rows, onAdd, onUpdate, onDelete }: Props) {
  const { t } = useLanguage();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  async function add() {
    const created = await onAdd({ name: "", level: "Regional" });
    if (created && created.id) setOpen((o) => ({ ...o, [created.id]: true }));
  }

  return (
    <section className="surface-card p-7">
      <h2 className="text-lg font-bold">{t("text.151")}</h2>
      <div className="mt-4 grid gap-3">
        {rows.length === 0 && <p className="text-sm text-muted-foreground">{t("text.152")}</p>}
        {rows.map((row, i) => {
          const isOpen = !!open[row.id];
          const role = row.role ?? row.placement ?? "";
          const date = formatDate(row.award_date) || (row.year ? String(row.year) : "");
          return (
            <div key={row.id} className="rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <button
                  type="button"
                  className="min-w-0 flex-1 text-left"
                  onClick={() => setOpen((o) => ({ ...o, [row.id]: !isOpen }))}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? t("honors.collapse") : t("honors.expand")}
                >
                  <div className="truncate font-semibold">{row.name || t("honors.untitled")}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {[role, row.awarding_institution, date].filter(Boolean).join(" · ")}
                  </div>
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen((o) => ({ ...o, [row.id]: !isOpen }))}
                  aria-label={isOpen ? t("honors.collapse") : t("honors.expand")}
                >
                  <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onDelete(row.id)} aria-label={t("text.150")}>
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>
              {isOpen && (
                <div className="grid gap-4 border-t border-border p-4 sm:grid-cols-2">
                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label>{t("honors.title")}</Label>
                    <Input
                      placeholder={t("honors.titlePh")}
                      defaultValue={row.name ?? ""}
                      onBlur={(e) => onUpdate(row.id, { name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label>{t("honors.inst")}</Label>
                    <Input
                      placeholder={t("honors.instPh")}
                      defaultValue={row.awarding_institution ?? ""}
                      onBlur={(e) => onUpdate(row.id, { awarding_institution: e.target.value || null })}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>{t("honors.date")}</Label>
                    <Input
                      type="month"
                      defaultValue={row.award_date ?? ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        onUpdate(row.id, { award_date: v || null, year: v ? Number(v.slice(0, 4)) : null });
                      }}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>{t("honors.country")}</Label>
                    <Input
                      placeholder={t("honors.countryPh")}
                      defaultValue={row.country_region ?? ""}
                      onBlur={(e) => onUpdate(row.id, { country_region: e.target.value || null })}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>{t("honors.role")}</Label>
                    <Input
                      placeholder={t("honors.rolePh")}
                      defaultValue={role}
                      onBlur={(e) => onUpdate(row.id, { role: e.target.value || null, placement: e.target.value || null })}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>{t("honors.level")}</Label>
                    <Select defaultValue={row.level ?? "Regional"} onValueChange={(v) => onUpdate(row.id, { level: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LEVELS.map((l) => (
                          <SelectItem key={l} value={l}>
                            {l}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label>{t("honors.subject")}</Label>
                    <Input
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
        <Button variant="outline" className="rounded-full" onClick={add}>
          <Plus className="mr-1 size-4" /> {t("honors.add")}
        </Button>
      </div>
    </section>
  );
}
