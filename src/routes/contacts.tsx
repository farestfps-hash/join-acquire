import { translate } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: translate("en", "text.037") },
      {
        name: "description",
        content: translate("en", "text.038"),
      },
      { property: "og:title", content: translate("en", "text.039") },
      { property: "og:description", content: translate("en", "text.040") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacts,
});

function Contacts() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.from("contact_messages").insert(form);
    setBusy(false);
    if (error) {
      toast.error(t("text.041"));
      return;
    }
    toast.success(t("text.042"));
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold">{t("nav.contacts")}</h1>
        <p className="mt-3 text-muted-foreground">
          
          {t("text.044")}
        </p>
        <div className="mt-8 grid gap-4">
          <a href="tel:+77780054070" className="surface-card flex items-center gap-3 p-5">
            <Phone className="size-5 text-primary" />
            <span className="font-medium">+7 778 005 40 70</span>
          </a>
          <a href="mailto:farestfps@gmail.com" className="surface-card flex items-center gap-3 p-5">
            <Mail className="size-5 text-primary" />
            <span className="font-medium">farestfps@gmail.com</span>
          </a>
          <div className="surface-card flex items-center gap-3 p-5">
            <MapPin className="size-5 text-primary" />
            <span className="font-medium">{t("text.045")}</span>
          </div>
        </div>
      </div>

      <form onSubmit={submit} className="surface-card grid gap-4 p-7">
        <div className="grid gap-2">
          <Label htmlFor="cname">{t("text.046")}</Label>
          <Input
            id="cname"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cemail">Email</Label>
          <Input
            id="cemail"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cphone">{t("text.047")}</Label>
          <Input
            id="cphone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cmsg">{t("text.048")}</Label>
          <Textarea
            id="cmsg"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <Button type="submit" className="rounded-full" disabled={busy}>
          
          {t("text.049")}
        </Button>
      </form>
    </div>
  );
}
