import { t, useLanguage } from "@/lib/language";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, GraduationCap, LogOut, Moon, Sun, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Главная" },
  { to: "/evaluator", label: "ИИ-оценка" },
  { to: "/portfolio", label: "Портфолио & AP" },
  { to: "/roadmap", label: "Дорожная карта" },
  { to: "/universities", label: "Университеты" },
  { to: "/leaderboard", label: "Таблица лидеров" },
  { to: "/about", label: "О проекте" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const initials = (user?.email ?? "S").slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:gap-4 sm:px-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-display text-sm font-bold sm:text-lg">Join&amp;Acquire</span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 min-[1440px]:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <div role="group" aria-label="Language / Язык" className="flex shrink-0 rounded-full border border-border bg-secondary p-0.5">
            <Button size="sm" variant={language === "en" ? "default" : "ghost"} className="h-7 rounded-full px-2 text-xs" aria-label="English" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</Button>
            <Button size="sm" variant={language === "ru" ? "default" : "ghost"} className="h-7 rounded-full px-2 text-xs" aria-label="Русский" aria-pressed={language === "ru"} onClick={() => setLanguage("ru")}>RU</Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("Включить светлую тему") : t("Включить тёмную тему")}
            title={theme === "dark" ? t("Светлая тема") : t("Тёмная тема")}
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full outline-none ring-ring focus-visible:ring-2">
                  <Avatar className="size-9 border border-border">
                    <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="truncate text-xs font-normal text-muted-foreground">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate({ to: "/portfolio" })}>
                  <UserIcon className="mr-2 size-4" /> {t("Моё портфолио")}</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={async () => {
                    await signOut();
                    navigate({ to: "/" });
                  }}
                >
                  <LogOut className="mr-2 size-4" /> {t("Выйти")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="rounded-full">
              <Link to="/auth">
                <span className="sm:hidden">{t("Войти")}</span>
                <span className="hidden sm:inline">{t("Войти / Регистрация")}</span>
              </Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="min-[1440px]:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("Меню")}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <div className={cn("border-t border-border min-[1440px]:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
