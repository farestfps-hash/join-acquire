import { t, useLanguage } from "@/lib/language";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: t("Вход и регистрация — Join&Acquire") },
      {
        name: "description",
        content: t("Войдите в Join&Acquire, чтобы сохранить портфолио и получить ИИ-оценку профиля."),
      },
      { property: "og:title", content: t("Вход в Join&Acquire") },
      { property: "og:description", content: t("Аккаунт Join&Acquire: портфолио, ИИ-оценка, дорожная карта.") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/portfolio" });
  }, [user, navigate]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(t("С возвращением!"));
    navigate({ to: "/portfolio" });
  }

  async function signUp(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/portfolio`,
        data: { full_name: fullName },
      },
    });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(t("Аккаунт создан. Проверьте почту, если требуется подтверждение."));
  }

  async function google() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error(t("Не удалось войти через Google"));
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/portfolio" });
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-16">
      <div className="surface-card p-8">
        <h1 className="text-2xl font-bold">Join&amp;Acquire</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("Войдите, чтобы сохранять портфолио и получать ИИ-оценку.")}</p>

        <Tabs defaultValue="signin" className="mt-6">
          <TabsList className="grid w-full grid-cols-2 rounded-full">
            <TabsTrigger value="signin" className="rounded-full">
              {t("Вход")}</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-full">
              {t("Регистрация")}</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <form onSubmit={signIn} className="mt-5 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">{t("Пароль")}</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="rounded-full" disabled={busy}>
                {t("Войти")}</Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={signUp} className="mt-5 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">{t("Имя и фамилия")}</Label>
                <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email2">Email</Label>
                <Input
                  id="email2"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password2">{t("Пароль")}</Label>
                <Input
                  id="password2"
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="rounded-full" disabled={busy}>
                {t("Создать аккаунт")}</Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> {t("или")}<span className="h-px flex-1 bg-border" />
        </div>
        <Button variant="outline" className="w-full rounded-full" onClick={google}>
          {t("Продолжить с Google")}</Button>
      </div>
    </div>
  );
}
