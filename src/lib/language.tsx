import { useSyncExternalStore } from "react";
import translations from "./translations.en.json";

export type Language = "en" | "ru";
const dictionary: Record<string, string> = translations;
let language: Language = "en";
const listeners = new Set<() => void>();
const normalize = (text: string) => text.replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const english = new Map(Object.entries(dictionary).map(([key, value]) => [normalize(key), value.replace(/&amp;/g, "&")]));

export function t(text: string): string {
  return language === "ru" ? text.replace(/&amp;/g, "&") : english.get(normalize(text)) ?? text.replace(/&amp;/g, "&");
}

export function setLanguage(next: Language) {
  language = next;
  if (typeof document !== "undefined") {
    document.documentElement.lang = next;
    try { localStorage.setItem("ja-language", next); } catch { /* Storage may be unavailable. */ }
  }
  listeners.forEach((listener) => listener());
}

export function restoreLanguage() {
  try { setLanguage(localStorage.getItem("ja-language") === "ru" ? "ru" : "en"); }
  catch { setLanguage("en"); }
}

export function useLanguage() {
  const current = useSyncExternalStore(
    (listener) => { listeners.add(listener); return () => { listeners.delete(listener); }; },
    () => language,
    () => "en" as Language,
  );
  return { language: current, locale: current === "ru" ? "ru-RU" : "en-US", setLanguage, t };
}