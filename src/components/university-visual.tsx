import { useState } from "react";
import { Shield } from "lucide-react";
import { CAMPUS_PHOTOS, universityFlag, universityMonogram } from "@/lib/university-media";
import { useLanguage } from "@/lib/language";
import type { University } from "@/lib/universities";

export function UniversityVisual({ uni, detail = false }: { uni: University; detail?: boolean }) {
  const { t, countryLabel } = useLanguage();
  const [failed, setFailed] = useState(false);
  const photo = CAMPUS_PHOTOS[uni.id];
  const monogram = universityMonogram(uni.name);
  return (
    <figure>
      <div className={`relative bg-secondary ${detail ? "h-64" : "h-44"}`}>
        {photo && !failed ? (
          <img src={photo.url} alt={`${uni.name} — ${photo.caption}`} loading="lazy" onError={() => setFailed(true)} className={`size-full ${detail ? "object-contain" : "object-cover"}`} />
        ) : (
          <div className="flex size-full items-center justify-center gap-4 text-primary">
            <Shield className="size-14 stroke-1" aria-hidden />
            <span className="max-w-48 break-words font-serif text-4xl font-bold">{monogram}</span>
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full border border-border bg-background/95 px-2.5 py-1 text-sm" title={countryLabel(uni.country)}>
          {universityFlag(uni.country, uni.city)}
        </span>
        <span className="absolute bottom-3 left-3 max-w-48 truncate rounded-md border border-border bg-background/95 px-3 py-1 font-serif text-sm font-bold text-primary">{monogram}</span>
      </div>
      {detail && photo && !failed && (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {photo.caption} · {photo.author} · <a href={photo.source} target="_blank" rel="noreferrer" className="underline">{t("university.photoSource")}</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="underline">{photo.license}</a> · {t("university.photoChanges")}
        </figcaption>
      )}
    </figure>
  );
}