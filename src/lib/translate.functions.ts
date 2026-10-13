import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";
const MODEL = "google/gemini-3.8-flash";

/** Translates a batch of Russian UI strings to English. Public: the site must translate for guests too. */
export const translateTexts = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) =>
    z.object({ texts: z.array(z.string().max(3000)).min(1).max(60) }).parse(d),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured");
    const res = await fetch(GATEWAY, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "system",
            content:
              'You translate website UI text from Russian to natural English for a university-admissions platform "Join&Acquire". Keep numbers, names, emojis, punctuation and leading/trailing spaces. Translate ЕНТ as UNT. Reply ONLY with JSON: {"t": [translations in the same order]}.',
          },
          { role: "user", content: JSON.stringify(data.texts) },
        ],
      }),
    });
    if (!res.ok) throw new Error(`AI error ${res.status}`);
    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content ?? "";
    const s = raw.indexOf("{");
    const e = raw.lastIndexOf("}");
    const parsed = JSON.parse(raw.slice(s, e + 1)) as { t?: unknown };
    const out = Array.isArray(parsed.t) ? parsed.t.map(String) : [];
    return { translations: data.texts.map((src, i) => out[i] ?? src) };
  });
