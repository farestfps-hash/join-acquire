import { t, useLanguage } from "@/lib/language";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  useLanguage();
  return (
    <footer className="mt-24 border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">Join&amp;Acquire</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("Join&Acquire — ИИ-платформа для поступления в университеты мира.")}</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">{t("Разделы")}</p>
          <div className="mt-3 grid gap-2 text-muted-foreground">
            <Link to="/evaluator" className="hover:text-foreground">
              {t("ИИ-оценка шансов")}</Link>
            <Link to="/portfolio" className="hover:text-foreground">
              {t("Портфолио & AP")}</Link>
            <Link to="/roadmap" className="hover:text-foreground">
              {t("Дорожная карта и календарь")}</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">{t("Контакты")}</p>
          <div className="mt-3 grid gap-2 text-muted-foreground">
            <a href="tel:+77780054070" className="hover:text-foreground">
              +7 778 005 40 70
            </a>
            <a href="mailto:farestfps@gmail.com" className="hover:text-foreground">
              farestfps@gmail.com
            </a>
            <span>{t("Атырау, Казахстан")}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Join&amp;Acquire.
      </div>
    </footer>
  );
}
