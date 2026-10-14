import { translate } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const { t, lang } = useLanguage();
  return (
    <footer className="mt-24 border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">Studymaxxing</p>
          <p className="mt-2 text-sm text-muted-foreground">
            
            {t("text.250")}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">{t("text.251")}</p>
          <div className="mt-3 grid gap-2 text-muted-foreground">
            <Link to="/evaluator" className="hover:text-foreground">
              
              {t("text.252")}
            </Link>
            <Link to="/portfolio" className="hover:text-foreground">
              
              {t("text.115")}
            </Link>
            <Link to="/roadmap" className="hover:text-foreground">
              
              {t("text.253")}
            </Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">{t("nav.contacts")}</p>
          <div className="mt-3 grid gap-2 text-muted-foreground">
            <a href="tel:+77780054070" className="hover:text-foreground">
              +7 778 005 40 70
            </a>
            <a href="mailto:farestfps@gmail.com" className="hover:text-foreground">
              farestfps@gmail.com
            </a>
            <span>{t("text.045")}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Studymaxxing. Join&amp;Acquire.
      </div>
    </footer>
  );
}
