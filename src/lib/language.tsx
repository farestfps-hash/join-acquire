import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, readLanguage, translate, type Lang, type TranslationKey } from "@/lib/i18n";
export type { Lang } from "@/lib/i18n";

type Translator = (key: TranslationKey, values?: Record<string, string | number>) => string;
const Ctx = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Translator }>({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: (key, values) => translate(DEFAULT_LANGUAGE, key, values),
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
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}
