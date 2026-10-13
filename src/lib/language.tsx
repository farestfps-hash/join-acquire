import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translateTexts } from "@/lib/translate.functions";

export type Lang = "en" | "ru";
const KEY = "ja-lang";
const CACHE_KEY = "ja-tr-cache-v1";
const CYR = /[А-Яа-яЁё]/;
const ATTRS = ["placeholder", "title", "aria-label"] as const;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function useLanguage() {
  return useContext(Ctx);
}

/** Whole-page translator: swaps Russian text nodes/attributes for English, restores them for RU. */
function createTranslator() {
  let cache: Record<string, string> = {};
  try {
    cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
  } catch {}
  const origText = new WeakMap<Text, string>();
  const setText = new WeakMap<Text, string>();
  const origAttr = new WeakMap<Element, Record<string, string>>();
  const setAttr = new WeakMap<Element, Record<string, string>>();
  const touched = new Set<WeakRef<Node>>();
  const pending = new Set<string>();
  let timer: ReturnType<typeof setTimeout> | null = null;
  let active = false;

  const key = (s: string) => s.trim();
  const tr = (s: string) => {
    const k = key(s);
    const t = cache[k];
    if (t == null) {
      pending.add(k);
      return null;
    }
    return s.replace(k, t);
  };

  function handleText(n: Text) {
    const cur = n.data;
    if (setText.get(n) === cur) return;
    if (!CYR.test(cur)) return;
    origText.set(n, cur);
    touched.add(new WeakRef(n));
    const t = tr(cur);
    if (t != null) {
      setText.set(n, t);
      n.data = t;
    }
  }

  function handleEl(el: Element) {
    for (const a of ATTRS) {
      const v = el.getAttribute(a);
      if (!v || setAttr.get(el)?.[a] === v || !CYR.test(v)) continue;
      origAttr.set(el, { ...(origAttr.get(el) ?? {}), [a]: v });
      touched.add(new WeakRef(el));
      const t = tr(v);
      if (t != null) {
        setAttr.set(el, { ...(setAttr.get(el) ?? {}), [a]: t });
        el.setAttribute(a, t);
      }
    }
  }

  function walk(root: Node) {
    if (root.nodeType === 3) return handleText(root as Text);
    if (root.nodeType !== 1) return;
    const el = root as Element;
    if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(el.tagName)) return;
    handleEl(el);
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) =>
        n.nodeType === 1 && /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test((n as Element).tagName)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
    });
    let n: Node | null;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) handleText(n as Text);
      else handleEl(n as Element);
    }
    schedule();
  }

  function schedule() {
    if (!pending.size || timer) return;
    timer = setTimeout(flush, 120);
  }

  async function flush() {
    timer = null;
    const all = [...pending].filter((k) => cache[k] == null);
    pending.clear();
    for (let i = 0; i < all.length; i += 50) {
      const batch = all.slice(i, i + 50);
      try {
        const { translations } = await translateTexts({ data: { texts: batch } });
        batch.forEach((k, j) => (cache[k] = translations[j] ?? k));
      } catch {
        batch.forEach((k) => (cache[k] = cache[k] ?? k));
      }
    }
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch {}
    if (active) walk(document.body);
  }

  const obs = new MutationObserver((muts) => {
    if (!active) return;
    for (const m of muts) {
      if (m.type === "characterData") handleText(m.target as Text);
      else if (m.type === "attributes") handleEl(m.target as Element);
      else m.addedNodes.forEach((n) => walk(n));
    }
    schedule();
  });

  return {
    enable() {
      active = true;
      walk(document.body);
      obs.observe(document.body, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: [...ATTRS],
      });
    },
    disable() {
      active = false;
      obs.disconnect();
      for (const ref of touched) {
        const n = ref.deref();
        if (!n) continue;
        if (n.nodeType === 3) {
          const t = n as Text;
          const o = origText.get(t);
          if (o != null && setText.get(t) === t.data) t.data = o;
          setText.delete(t);
        } else {
          const el = n as Element;
          const o = origAttr.get(el) ?? {};
          for (const [a, v] of Object.entries(o)) {
            if (setAttr.get(el)?.[a] === el.getAttribute(a)) el.setAttribute(a, v);
          }
          setAttr.delete(el);
        }
      }
      touched.clear();
    },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [translator, setTranslator] = useState<ReturnType<typeof createTranslator> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "ru" || saved === "en") setLangState(saved);
    setTranslator(createTranslator());
  }, []);

  useEffect(() => {
    if (!translator) return;
    document.documentElement.lang = lang;
    if (lang === "en") translator.enable();
    else translator.disable();
  }, [lang, translator]);

  const setLang = (l: Lang) => {
    localStorage.setItem(KEY, l);
    setLangState(l);
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
