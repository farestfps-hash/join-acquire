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
import kz0 from "@/assets/campuses/nazarbayev-university.jpg.asset.json";
import kz1 from "@/assets/campuses/l-n-gumilyov-eurasian-national-university.jpg.asset.json";
import kz2 from "@/assets/campuses/satbayev-university.jpg.asset.json";
import kz3 from "@/assets/campuses/kazakh-british-technical-university.jpg.asset.json";
import kz4 from "@/assets/campuses/kimep-university.jpg.asset.json";
import kz5 from "@/assets/campuses/narxoz-university.jpg.asset.json";
import kz6 from "@/assets/campuses/astana-it-university.jpg.asset.json";
import kz7 from "@/assets/campuses/suleyman-demirel-university.jpg.asset.json";
import kz8 from "@/assets/campuses/kazakh-german-university.jpg.asset.json";
import kz9 from "@/assets/campuses/abai-kazakh-national-pedagogical-university.jpg.asset.json";
import kz10 from "@/assets/campuses/e-a-buketov-karaganda-university.jpg.asset.json";
import kz11 from "@/assets/campuses/abylkas-saginov-karaganda-technical-university.jpg.asset.json";
import kz12 from "@/assets/campuses/d-serikbayev-east-kazakhstan-technical-university.jpg.asset.json";
import kz13 from "@/assets/campuses/s-utebayev-atyrau-university-of-oil-and-gas.jpg.asset.json";
import kz14 from "@/assets/campuses/sh-yessenov-caspian-university-of-technologies-and-engineering.jpg.asset.json";
import kz15 from "@/assets/campuses/m-auezov-south-kazakhstan-university.jpg.asset.json";
import kz16 from "@/assets/campuses/asfendiyarov-kazakh-national-medical-university.jpg.asset.json";
import kz17 from "@/assets/campuses/maqsut-narikbayev-university.jpg.asset.json";
import kz18 from "@/assets/campuses/kazakh-national-agrarian-research-university.jpg.asset.json";

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
  "nazarbayev-university": { url: kz0.url, caption: "Nazarbayev University atrium", source: "https://commons.wikimedia.org/wiki/File:Nazarbaev_University_Astana.JPG", author: "Кондуктор-контролёр", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "l-n-gumilyov-eurasian-national-university": { url: kz1.url, caption: "ENU main building", source: "https://commons.wikimedia.org/wiki/File:L.N.Gumilyov_Eurasian_National_University.JPG", author: "ChelseaFunNumberOne", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0" },
  "satbayev-university": { url: kz2.url, caption: "Satbayev University main building", source: "https://commons.wikimedia.org/wiki/File:Satbayev_University_2.jpg", author: "LittleT889", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0" },
  "kazakh-british-technical-university": { url: kz3.url, caption: "KBTU building on Tole Bi Street", source: "https://commons.wikimedia.org/wiki/File:KBTU_Tole_Bi_Street.jpg", author: "Brian Harrington Spier", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0" },
  "kimep-university": { url: kz4.url, caption: "KIMEP new academic building", source: "https://commons.wikimedia.org/wiki/File:KIMEP_New_Academic_Building.jpg", author: "KIMEP", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0" },
  "narxoz-university": { url: kz5.url, caption: "Narxoz University campus", source: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D0%BC%D0%BF%D1%83%D1%81_%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0_%D0%9D%D0%B0%D1%80%D1%85%D0%BE%D0%B7.jpg", author: "Anna Korovina", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "astana-it-university": { url: kz6.url, caption: "Astana IT University building", source: "https://commons.wikimedia.org/wiki/File:Astana_IT_University_%E2%80%94_Future_of_Digital_Kazakhstan.jpg", author: "Aliaskarov Danial", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "suleyman-demirel-university": { url: kz7.url, caption: "SDU campus in Kaskelen", source: "https://commons.wikimedia.org/wiki/File:Suleyman_Demirel_University_-_Outside_view.jpg", author: "Suleymen Demirel University", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0" },
  "kazakh-german-university": { url: kz8.url, caption: "Kazakh-German University building", source: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%BE-%D0%9D%D0%B5%D0%BC%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82.jpg", author: "Vano111ru", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "abai-kazakh-national-pedagogical-university": { url: kz9.url, caption: "KazNPU building", source: "https://commons.wikimedia.org/wiki/File:KazNPU_imeni_Abaya.JPG", author: "Mheidegger", license: "Public domain", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/" },
  "e-a-buketov-karaganda-university": { url: kz10.url, caption: "Buketov Karaganda University", source: "https://commons.wikimedia.org/wiki/File:Karaganda_State_University.JPG", author: "Nikolay Olkhovoy", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0" },
  "abylkas-saginov-karaganda-technical-university": { url: kz11.url, caption: "Karaganda Technical University main building", source: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D1%80%D0%93%D0%A2%D0%A3.JPG", author: "Василий Фрезе", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  "d-serikbayev-east-kazakhstan-technical-university": { url: kz12.url, caption: "EKTU building", source: "https://commons.wikimedia.org/wiki/File:Ekstu.jpg", author: "q", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "s-utebayev-atyrau-university-of-oil-and-gas": { url: kz13.url, caption: "Atyrau University of Oil and Gas main building", source: "https://commons.wikimedia.org/wiki/File:Atmgi_main_building.jpg", author: "Batyrbek.kz", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0" },
  "sh-yessenov-caspian-university-of-technologies-and-engineering": { url: kz14.url, caption: "Yessenov University main building", source: "https://commons.wikimedia.org/wiki/File:Yessenov_University.jpg", author: "Aidafaridd", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "m-auezov-south-kazakhstan-university": { url: kz15.url, caption: "Auezov University main building", source: "https://commons.wikimedia.org/wiki/File:Ayezov-South-Kazakhstan-University-in-Shymkent.jpg", author: "TheGreatSteppe", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "asfendiyarov-kazakh-national-medical-university": { url: kz16.url, caption: "KazNMU main building", source: "https://commons.wikimedia.org/wiki/File:Main_building,_Kazak_National_Medical_University.jpg", author: "kaznmu.kz", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
  "maqsut-narikbayev-university": { url: kz17.url, caption: "Maqsut Narikbayev University main building", source: "https://commons.wikimedia.org/wiki/File:Maqsut_Narikbayev_University.jpg", author: "Graphique38", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0" },
  "kazakh-national-agrarian-research-university": { url: kz18.url, caption: "KazNARU main building", source: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B0%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82_(%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B)_-_panoramio.jpg", author: "Николай Максимович", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0" },
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
