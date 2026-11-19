import photo0 from "@/assets/campuses/massachusetts-institute-of-technology.jpg.asset.json";
import photo1 from "@/assets/campuses/harvard-university.jpg.asset.json";
import photo2 from "@/assets/campuses/stanford-university.jpg.asset.json";
import photo3 from "@/assets/campuses/columbia-university.jpg.asset.json";
import photo4 from "@/assets/campuses/yale-university.jpg.asset.json";
import photo5 from "@/assets/campuses/university-of-oxford.jpg.asset.json";
import photo6 from "@/assets/campuses/university-of-cambridge.jpg.asset.json";
import photo7 from "@/assets/campuses/eth-zurich.jpg.asset.json";
import photo8 from "@/assets/campuses/university-of-hong-kong.jpg.asset.json";
import photo9 from "@/assets/campuses/hong-kong-university-of-science-and-technology.jpg.asset.json";
import photo10 from "@/assets/campuses/al-farabi-kazakh-national-university.jpg.asset.json";

export type CampusPhoto = { url: string; caption: string; source: string; author: string; license: string; licenseUrl: string };
export const CAMPUS_PHOTOS: Record<string, CampusPhoto> = {
  "massachusetts-institute-of-technology": { url: photo0.url, caption: "MIT central campus", source: "https://commons.wikimedia.org/wiki/File:MIT_Main_Campus_aerial.jpg", author: "Nick Allen", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "harvard-university": { url: photo1.url, caption: "Widener Library", source: "https://commons.wikimedia.org/wiki/File:Widener_Library.jpg", author: "Wgreaves", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "stanford-university": { url: photo2.url, caption: "Stanford campus aerial view", source: "https://commons.wikimedia.org/wiki/File:View_Stanford.jpg", author: "Gunther Hagleitner", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
  "columbia-university": { url: photo3.url, caption: "Butler Library", source: "https://commons.wikimedia.org/wiki/File:Butler_Library_-_1000px_-_AC.jpg", author: "Andrew Chen (Achen33)", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "yale-university": { url: photo4.url, caption: "Harkness Tower", source: "https://commons.wikimedia.org/wiki/File:Harkness_Tower_in_autumn.jpg", author: "Ragesoss", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "university-of-oxford": { url: photo5.url, caption: "Oxford university panorama", source: "https://commons.wikimedia.org/wiki/File:1_oxford_aerial_panorama_2016.jpg", author: "Chensiyuan", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "university-of-cambridge": { url: photo6.url, caption: "King\u2019s College Chapel", source: "https://commons.wikimedia.org/wiki/File:KingsCollegeChapelWest.jpg", author: "Andrew Dunn", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
  "eth-zurich": { url: photo7.url, caption: "ETH Zurich main building", source: "https://commons.wikimedia.org/wiki/File:ETH_Z%C3%BCrich_-_Hauptgeb%C3%A4ude_-_Unispital_2012-07-30_07-57-03_ShiftN.jpg", author: "Roland Fischer / Roland zh", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "the-university-of-hong-kong": { url: photo8.url, caption: "HKU Main Building", source: "https://commons.wikimedia.org/wiki/File:Main_Building_of_the_University_of_Hong_Kong_and_clock_tower.JPG", author: "Adon3465", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "the-hong-kong-university-of-science-and-technology": { url: photo9.url, caption: "HKUST Clear Water Bay campus", source: "https://commons.wikimedia.org/wiki/File:HKUST_campus_view_looking_from_above.jpg", author: "Hkust pao", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "al-farabi-kazakh-national-university": { url: photo10.url, caption: "KazNU rectorate", source: "https://commons.wikimedia.org/wiki/File:Al-Farabi_KazNU_rektorat.jpg", author: "KazNU (kaznu.kz)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
};

export function universityMonogram(name: string): string {
  const acronym = name.match(/\(([A-Z][A-Za-z0-9]{1,7})\)/)?.[1];
  if (acronym) return acronym;
  return name.replace(/\([^)]*\)/g, "").split(/\s+/).filter((word) => !["the", "of", "and", "for"].includes(word.toLowerCase())).slice(0, 4).map((word) => word[0]).join("").toUpperCase();
}

export function universityFlag(country: string, city: string): string {
  if (country === "USA") return "🇺🇸";
  if (country === "Kazakhstan") return "🇰🇿";
  if (country === "Hong Kong") return "🇭🇰";
  const locations: [RegExp, string][] = [
    [/Великобритания|United Kingdom|UK$/, "🇬🇧"], [/Швейцария|Switzerland/, "🇨🇭"],
    [/Германия|Germany/, "🇩🇪"], [/Франция|France/, "🇫🇷"], [/Нидерланды|Netherlands/, "🇳🇱"],
    [/Швеция|Sweden/, "🇸🇪"], [/Италия|Italy/, "🇮🇹"], [/Испания|Spain/, "🇪🇸"],
    [/Бельгия|Belgium/, "🇧🇪"], [/Дания|Denmark/, "🇩🇰"], [/Финляндия|Finland/, "🇫🇮"],
    [/Норвегия|Norway/, "🇳🇴"], [/Ирландия|Ireland/, "🇮🇪"], [/Австрия|Austria/, "🇦🇹"],
    [/Польша|Poland/, "🇵🇱"], [/Чехия|Czech/, "🇨🇿"], [/Португалия|Portugal/, "🇵🇹"],
  ];
  return locations.find(([pattern]) => pattern.test(city))?.[1] ?? "🇪🇺";
}
