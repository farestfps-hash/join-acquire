import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, readLanguage, translate, type Lang, type TranslationKey } from "@/lib/i18n";
export type { Lang } from "@/lib/i18n";

type Translator = (key: TranslationKey, values?: Record<string, string | number>) => string;
const COUNTRY_KEYS: Record<string, TranslationKey> = { USA: "country.usa", "Hong Kong": "country.hongKong", Europe: "country.europe", Kazakhstan: "country.kazakhstan" };
const Ctx = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Translator; countryLabel: (country: string) => string }>({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: (key, values) => translate(DEFAULT_LANGUAGE, key, values),
  countryLabel: (country) => COUNTRY_KEYS[country] ? translate(DEFAULT_LANGUAGE, COUNTRY_KEYS[country]) : country,
});
export function useLanguage() { return useContext(Ctx); }
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANGUAGE);
  useEffect(() => {
    try { setLangState(readLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY))); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (value: Lang) => {
    setLangState(value);
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, value); } catch {}
  };
  const t: Translator = (key, values) => translate(lang, key, values);
  const countryLabel = (country: string) => COUNTRY_KEYS[country] ? t(COUNTRY_KEYS[country]) : country;
  return <Ctx.Provider value={{ lang, setLang, t, countryLabel }}>{children}</Ctx.Provider>;
}
