export type Country = "USA" | "Hong Kong" | "Kazakhstan" | "Europe";

export type University = {
  id: string;
  name: string;
  country: Country;
  city: string;
  qs: number;
  gpa: string;
  sat?: string;
  act?: string;
  ap?: string;
  unt?: string;
  nuet?: string;
  english: string;
  aid: string;
  tuition: string;
  deadlines: { label: string; date: string }[];
  programs: string[];
  overview: string;
  strategy: string;
  photos: string[];
};

const POOL = [
  "photo-1562774053-701939374585",
  "photo-1523050854058-8df90110c9f1",
  "photo-1498243691581-b145c3f54a5a",
  "photo-1541339907198-e08756dedf3f",
  "photo-1592280771190-3e2e4d571952",
  "photo-1607237138185-eedd9c632b0b",
  "photo-1580582932707-520aed937b7b",
  "photo-1519452575417-564c1401ecc0",
  "photo-1567168544813-cc03465b4fa8",
  "photo-1568792923760-d70635a89fdc",
  "photo-1590012314607-cda9d9b699ae",
  "photo-1591123120675-6f7f1aae0e5b",
];

function photos(seed: number) {
  return [0, 1, 2].map(
    (i) =>
      `https://images.unsplash.com/${POOL[(seed * 3 + i) % POOL.length]}?auto=format&fit=crop&w=900&q=70`,
  );
}

type Raw = Omit<University, "photos" | "id"> & { id?: string };

const RAW: Raw[] = [
  {
    "id": "massachusetts-institute-of-technology",
    "name": "Massachusetts Institute of Technology (MIT)",
    "country": "USA",
    "city": "Cambridge, MA",
    "qs": 1,
    "gpa": "3.95+ (UW)",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-blind для иностранцев, покрывают 100% подтверждённой потребности",
    "tuition": "~$87k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Computer Science",
      "EECS",
      "Physics",
      "Mechanical Engineering"
    ],
    "overview": "Инженерный и научный центр мира. Культура hands-on проектов, UROP-исследования с первого курса, стартап-экосистема Kendall Square.",
    "strategy": "Нужны исследовательские или инженерные проекты национального уровня: олимпиады IMO/IPhO, публикации, собственные устройства или open-source. Эссе — про мышление, а не про титулы.",
    "sat": "1520–1580",
    "act": "34–36",
    "ap": "AP 8+ (балл 5)"
  },
  {
    "id": "stanford-university",
    "name": "Stanford University",
    "country": "USA",
    "city": "Stanford, CA",
    "qs": 3,
    "gpa": "3.95+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$92k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Economics",
      "Human Biology"
    ],
    "overview": "Сердце Кремниевой долины: самый предпринимательский климат среди топ-вузов и гибкая учебная программа.",
    "strategy": "Ищут «intellectual vitality»: личный проект, исследование, предпринимательство. Короткие эссе должны звучать живо и лично.",
    "sat": "1500–1570",
    "act": "34–35"
  },
  {
    "id": "harvard-university",
    "name": "Harvard University",
    "country": "USA",
    "city": "Cambridge, MA",
    "qs": 5,
    "gpa": "3.95+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-blind для иностранцев, покрывают 100% подтверждённой потребности",
    "tuition": "~$87k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Economics",
      "CS",
      "Government",
      "Biology"
    ],
    "overview": "Старейший вуз США: сильнейшие программы по праву, медицине, экономике и наукам, огромная сеть выпускников.",
    "strategy": "Нужен «spike» национального уровня и сильные рекомендации. Интервью с alumni — часть процесса.",
    "sat": "1500–1580",
    "act": "34–36"
  },
  {
    "id": "california-institute-of-technology",
    "name": "California Institute of Technology (Caltech)",
    "country": "USA",
    "city": "Pasadena, CA",
    "qs": 10,
    "gpa": "3.95+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$87k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Physics",
      "CS",
      "Engineering",
      "Chemistry"
    ],
    "overview": "Крошечный научный вуз (~1000 студентов бакалавриата), управляет JPL NASA; исследования с первого курса.",
    "strategy": "Почти идеальная математика и олимпиады. Дополнительные эссе по науке ценятся выше «воды».",
    "sat": "1530–1580 (Math 800)",
    "act": "35–36"
  },
  {
    "id": "university-of-chicago",
    "name": "University of Chicago",
    "country": "USA",
    "city": "Chicago, IL",
    "qs": 13,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$93k/год",
    "deadlines": [
      {
        "label": "EA/ED1",
        "date": "2026-11-01"
      },
      {
        "label": "ED2/RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "Economics",
      "Math",
      "Physics",
      "Public Policy"
    ],
    "overview": "Интеллектуальная культура «Life of the Mind», сильное ядро Core Curriculum, топ по экономике и физике.",
    "strategy": "Фирменные нестандартные эссе: пишите творчески и умно, а в «Why UChicago» давайте конкретику.",
    "sat": "1510–1570",
    "act": "34–35 (test-optional)"
  },
  {
    "id": "university-of-pennsylvania",
    "name": "University of Pennsylvania",
    "country": "USA",
    "city": "Philadelphia, PA",
    "qs": 14,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$91k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Business (Wharton)",
      "CS",
      "Engineering",
      "Nursing"
    ],
    "overview": "Междисциплинарные программы (Wharton, M&TSI), ориентир на практику и бизнес.",
    "strategy": "Выбирайте школу внутри Penn стратегически. ED даёт заметный плюс.",
    "sat": "1500–1570",
    "act": "34–36"
  },
  {
    "id": "cornell-university",
    "name": "Cornell University",
    "country": "USA",
    "city": "Ithaca, NY",
    "qs": 15,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Hotel Administration",
      "Agriculture"
    ],
    "overview": "Крупнейший вуз Лиги плюща: 8 школ — от инженерии до hotel administration и аграрных наук.",
    "strategy": "Приём идёт по школам: докажите fit с конкретным колледжем внутри Cornell.",
    "sat": "1500–1560",
    "act": "34–35"
  },
  {
    "id": "princeton-university",
    "name": "Princeton University",
    "country": "USA",
    "city": "Princeton, NJ",
    "qs": 25,
    "gpa": "3.95+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-blind для иностранцев, покрывают 100% подтверждённой потребности",
    "tuition": "~$86k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Math",
      "CS",
      "Economics",
      "Physics"
    ],
    "overview": "Сильнейший фокус на бакалавриате, обязательная senior thesis, щедрая помощь.",
    "strategy": "Научные проекты и гуманитарная глубина. Академические рекомендации критичны.",
    "sat": "1510–1580",
    "act": "34–36"
  },
  {
    "id": "yale-university",
    "name": "Yale University",
    "country": "USA",
    "city": "New Haven, CT",
    "qs": 23,
    "gpa": "3.95+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-blind для иностранцев, покрывают 100% подтверждённой потребности",
    "tuition": "~$90k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Political Science",
      "Economics",
      "CS",
      "History"
    ],
    "overview": "Residential colleges, сильные гуманитарные науки и право, очень живое комьюнити.",
    "strategy": "Ищут любознательность и вклад в сообщество. Несколько коротких эссе — пишите честно.",
    "sat": "1500–1580",
    "act": "34–36"
  },
  {
    "id": "columbia-university",
    "name": "Columbia University",
    "country": "USA",
    "city": "New York, NY",
    "qs": 38,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$93k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Economics",
      "CS",
      "Engineering",
      "Political Science"
    ],
    "overview": "Core Curriculum и Нью-Йорк как кампус: сильные финансы, журналистика, инженерия.",
    "strategy": "«Why Columbia» — связь с NYC и Core. ED даёт плюс.",
    "sat": "1510–1570",
    "act": "34–36"
  },
  {
    "id": "johns-hopkins-university",
    "name": "Johns Hopkins University",
    "country": "USA",
    "city": "Baltimore, MD",
    "qs": 32,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "ED2/RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "Biomedical Engineering",
      "CS",
      "Neuroscience",
      "Public Health"
    ],
    "overview": "Первый исследовательский университет США: топ по медицине, биоинженерии, public health.",
    "strategy": "Исследовательский опыт и ясная причина выбора JHU. ED — сильный сигнал.",
    "sat": "1520–1570",
    "act": "34–35"
  },
  {
    "id": "university-of-california-berkeley",
    "name": "University of California, Berkeley",
    "country": "USA",
    "city": "Berkeley, CA",
    "qs": 17,
    "gpa": "4.0 (UC-шкала)",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$72k/год",
    "deadlines": [
      {
        "label": "UC application",
        "date": "2026-11-30"
      }
    ],
    "programs": [
      "EECS",
      "Data Science",
      "Economics",
      "Engineering"
    ],
    "overview": "Лучший госуниверситет мира: EECS, физика, экономика, огромное стартап-комьюнити.",
    "strategy": "Только оценки + PIQ (personal insight questions). Активности описывайте с измеримым impact.",
    "sat": "/ACT не учитываются (test-blind)"
  },
  {
    "id": "university-of-california-los-angeles",
    "name": "University of California, Los Angeles (UCLA)",
    "country": "USA",
    "city": "Los Angeles, CA",
    "qs": 44,
    "gpa": "4.0 (UC-шкала)",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$70k/год",
    "deadlines": [
      {
        "label": "UC application",
        "date": "2026-11-30"
      }
    ],
    "programs": [
      "Biology",
      "CS",
      "Psychology",
      "Film"
    ],
    "overview": "Один из самых популярных вузов США по числу заявок: сильные медицина, кино, инженерия.",
    "strategy": "Test-blind: GPA и PIQ решают. Major выбирайте стратегически (CS очень конкурентный).",
    "sat": "/ACT не учитываются (test-blind)"
  },
  {
    "id": "carnegie-mellon-university",
    "name": "Carnegie Mellon University",
    "country": "USA",
    "city": "Pittsburgh, PA",
    "qs": 52,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$85k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "CS",
      "Robotics",
      "AI",
      "Drama/Design"
    ],
    "overview": "Мировой лидер по CS, робототехнике и ИИ; сочетание технических и творческих школ.",
    "strategy": "Портфолио кода/проектов и сильная математика. Поступление идёт по школам (SCS — самый жёсткий).",
    "sat": "1530–1570",
    "act": "35–36"
  },
  {
    "id": "university-of-michigan",
    "name": "University of Michigan",
    "country": "USA",
    "city": "Ann Arbor, MI",
    "qs": 45,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$72k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-02-01"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Business",
      "Economics"
    ],
    "overview": "Топ-госуниверситет: сильные engineering и business (Ross), огромное комьюнити.",
    "strategy": "EA снижает конкуренцию. Для иностранцев высока доля платящих студентов.",
    "sat": "1490–1560",
    "act": "33–35"
  },
  {
    "id": "new-york-university",
    "name": "New York University (NYU)",
    "country": "USA",
    "city": "New York, NY",
    "qs": 55,
    "gpa": "3.8+",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$92k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Business",
      "Film",
      "CS",
      "Economics"
    ],
    "overview": "Кампус в самом Нью-Йорке, сильные Stern, Tisch, Courant; кампусы в Абу-Даби и Шанхае.",
    "strategy": "«Why NYU» — город и конкретные программы. ED повышает шансы.",
    "sat": "1500–1560",
    "act": "33–35 (test-optional)"
  },
  {
    "id": "duke-university",
    "name": "Duke University",
    "country": "USA",
    "city": "Durham, NC",
    "qs": 60,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$90k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Economics",
      "CS",
      "Biomedical Engineering",
      "Public Policy"
    ],
    "overview": "Баланс науки и спорта, Pratt School of Engineering, Fuqua, сильное комьюнити.",
    "strategy": "Duke ищет «engaged citizens»: лидерство + академическая сила.",
    "sat": "1520–1570",
    "act": "34–36"
  },
  {
    "id": "northwestern-university",
    "name": "Northwestern University",
    "country": "USA",
    "city": "Evanston, IL",
    "qs": 42,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$90k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Economics",
      "Journalism",
      "Engineering",
      "CS"
    ],
    "overview": "Топ по журналистике, театру, экономике; система кварталов и сильные co-op-связи.",
    "strategy": "«Why Northwestern»: кооперативные практики. ED даёт плюс.",
    "sat": "1510–1560",
    "act": "34–35"
  },
  {
    "id": "brown-university",
    "name": "Brown University",
    "country": "USA",
    "city": "Providence, RI",
    "qs": 80,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$90k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "CS",
      "Economics",
      "Neuroscience",
      "Applied Math"
    ],
    "overview": "Open Curriculum — без обязательного ядра; самостоятельные студенты, сильные науки и искусство.",
    "strategy": "Эссе про самостоятельность и интеллектуальную свободу.",
    "sat": "1500–1560",
    "act": "34–35"
  },
  {
    "id": "georgia-institute-of-technology",
    "name": "Georgia Institute of Technology",
    "country": "USA",
    "city": "Atlanta, GA",
    "qs": 90,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$63k/год",
    "deadlines": [
      {
        "label": "EA2",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Industrial Engineering"
    ],
    "overview": "Один из лучших технических вузов США по инженерии и CS, сильные co-op программы.",
    "strategy": "Сильная математика. Для out-of-state и иностранцев конкуренция высокая.",
    "sat": "1460–1550",
    "act": "33–35"
  },
  {
    "id": "university-of-illinois-urbana-champaign",
    "name": "University of Illinois Urbana-Champaign",
    "country": "USA",
    "city": "Champaign, IL",
    "qs": 65,
    "gpa": "3.8+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$62k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "CS",
      "ECE",
      "Engineering",
      "Accountancy"
    ],
    "overview": "Топ по инженерии и CS; ECE и CS — одни из сильнейших в стране.",
    "strategy": "Приём идёт по major: CS/Engineering очень конкурентны.",
    "sat": "1460–1550",
    "act": "32–35"
  },
  {
    "id": "university-of-california-san-diego",
    "name": "University of California, San Diego",
    "country": "USA",
    "city": "La Jolla, CA",
    "qs": 70,
    "gpa": "4.0 (UC-шкала)",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$70k/год",
    "deadlines": [
      {
        "label": "UC application",
        "date": "2026-11-30"
      }
    ],
    "programs": [
      "Data Science",
      "Bioengineering",
      "CS",
      "Biology"
    ],
    "overview": "Сильные биология, data science и инженерия; океанографический институт Scripps.",
    "strategy": "Выбирайте менее перегруженный major и пишите сильные PIQ.",
    "sat": "/ACT не учитываются (test-blind)"
  },
  {
    "id": "university-of-washington",
    "name": "University of Washington",
    "country": "USA",
    "city": "Seattle, WA",
    "qs": 90,
    "gpa": "3.9+",
    "english": "TOEFL 92+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$62k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2026-11-15"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Biology",
      "Business"
    ],
    "overview": "Рядом Amazon и Microsoft: сильные CS, медицина и науки о жизни.",
    "strategy": "Direct-admit в major (CS очень жёсткий): подготовьте запасной вариант.",
    "sat": "/ACT optional"
  },
  {
    "id": "university-of-wisconsin-madison",
    "name": "University of Wisconsin–Madison",
    "country": "USA",
    "city": "Madison, WI",
    "qs": 100,
    "gpa": "3.8+",
    "english": "TOEFL 95+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$58k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-02-01"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Biology",
      "Economics"
    ],
    "overview": "Мощный исследовательский вуз, сильные биология, агро- и инженерия, крупное студ. комьюнити.",
    "strategy": "EA даёт ответ раньше. Сильные оценки по математике и естествам.",
    "sat": "/ACT optional"
  },
  {
    "id": "university-of-texas-at-austin",
    "name": "University of Texas at Austin",
    "country": "USA",
    "city": "Austin, TX",
    "qs": 70,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$58k/год",
    "deadlines": [
      {
        "label": "RD",
        "date": "2026-12-01"
      }
    ],
    "programs": [
      "Petroleum Engineering",
      "CS",
      "Business",
      "Engineering"
    ],
    "overview": "Сильные инженерия, бизнес (McCombs) и нефтегазовая школа — важно для энергетического сектора.",
    "strategy": "Отличный вариант под энергетику; осторожно с major (CS/Engineering очень конкурентны).",
    "sat": "1370–1530",
    "act": "31–35"
  },
  {
    "id": "rice-university",
    "name": "Rice University",
    "country": "USA",
    "city": "Houston, TX",
    "qs": 120,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$80k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Natural Sciences",
      "Economics"
    ],
    "overview": "Небольшой дружный научный вуз с residential colleges; рядом NASA и энергетический Хьюстон.",
    "strategy": "«Why Rice» — через residential college. ED даёт плюс.",
    "sat": "1520–1580",
    "act": "35–36"
  },
  {
    "id": "vanderbilt-university",
    "name": "Vanderbilt University",
    "country": "USA",
    "city": "Nashville, TN",
    "qs": 170,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware; есть merit-стипендии для сильных абитуриентов (условия проверить)",
    "tuition": "~$89k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "ED2/RD",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Engineering",
      "Economics",
      "Neuroscience",
      "CS"
    ],
    "overview": "Сильный академически, дружное комьюнити, merit-стипендии для сильных абитуриентов.",
    "strategy": "Подавайте рано: часть merit-стипендий привязана к ранним заявкам.",
    "sat": "1520–1580",
    "act": "34–36"
  },
  {
    "id": "university-of-notre-dame",
    "name": "University of Notre Dame",
    "country": "USA",
    "city": "Notre Dame, IN",
    "qs": 200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$86k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Business",
      "Engineering",
      "CS",
      "Economics"
    ],
    "overview": "Сильное комьюнити и традиции; сильные Mendoza (business) и инженерия.",
    "strategy": "Ценят community и сервис. REA добавляет шансов.",
    "sat": "1500–1560",
    "act": "34–35"
  },
  {
    "id": "dartmouth-college",
    "name": "Dartmouth College",
    "country": "USA",
    "city": "Hanover, NH",
    "qs": 220,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-blind для иностранцев, покрывают 100% подтверждённой потребности",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Economics",
      "CS",
      "Government",
      "Engineering"
    ],
    "overview": "Самая «колледжная» Лига плюща: маленькие классы, D-Plan, сильное комьюнити.",
    "strategy": "Эссе про вклад в сообщество. ED сильно помогает.",
    "sat": "1500–1570",
    "act": "34–35"
  },
  {
    "id": "washington-university-in-st-louis",
    "name": "Washington University in St. Louis",
    "country": "USA",
    "city": "St. Louis, MO",
    "qs": 120,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "ED2/RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Biology",
      "Business",
      "Engineering",
      "Psychology"
    ],
    "overview": "Сильное сочетание науки и атмосферы, сильные медицина и бизнес (Olin).",
    "strategy": "Выбирайте школу внутри WashU разумно. ED — сильный сигнал.",
    "sat": "1510–1570",
    "act": "34–36"
  },
  {
    "id": "emory-university",
    "name": "Emory University",
    "country": "USA",
    "city": "Atlanta, GA",
    "qs": 160,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware; есть merit-стипендии для сильных абитуриентов (условия проверить)",
    "tuition": "~$86k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "ED2/RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Biology",
      "Business",
      "Public Health",
      "Psychology"
    ],
    "overview": "Сильные медицина, public health и бизнес (Goizueta); рядом CDC.",
    "strategy": "Подчёркивайте service и leadership. ED повышает шансы.",
    "sat": "1480–1560",
    "act": "33–35"
  },
  {
    "id": "university-of-north-carolina-at-chapel-hill",
    "name": "University of North Carolina at Chapel Hill",
    "country": "USA",
    "city": "Chapel Hill, NC",
    "qs": 160,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$58k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-10-15"
      },
      {
        "label": "RD",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Public Health",
      "Business",
      "Biology",
      "Journalism"
    ],
    "overview": "Старейший госуниверситет США: сильные public health, журналистика, бизнес.",
    "strategy": "Для иностранцев жёсткая квота. Подавайте EA.",
    "sat": "1400–1530",
    "act": "31–34"
  },
  {
    "id": "university-of-southern-california",
    "name": "University of Southern California",
    "country": "USA",
    "city": "Los Angeles, CA",
    "qs": 120,
    "gpa": "3.8+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Need-aware; есть merit-стипендии для сильных абитуриентов (условия проверить)",
    "tuition": "~$93k/год",
    "deadlines": [
      {
        "label": "RD",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Cinema",
      "CS",
      "Business",
      "Engineering"
    ],
    "overview": "Сильное комьюнити и мощные кино/медиа, сеть в Калифорнии.",
    "strategy": "Merit-стипендии (Trustee, Presidential) очень конкурентны.",
    "sat": "1480–1560",
    "act": "33–35"
  },
  {
    "id": "boston-university",
    "name": "Boston University",
    "country": "USA",
    "city": "Boston, MA",
    "qs": 90,
    "gpa": "3.8+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Need-aware; есть merit-стипендии для сильных абитуриентов (условия проверить)",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "CS",
      "Business",
      "Engineering",
      "Communications"
    ],
    "overview": "Крупный университет в центре Бостона; сильные CS, бизнес, коммуникации.",
    "strategy": "Merit-стипендии (Trustee) — подавайте рано.",
    "sat": "1480–1560",
    "act": "33–35"
  },
  {
    "id": "northeastern-university",
    "name": "Northeastern University",
    "country": "USA",
    "city": "Boston, MA",
    "qs": 120,
    "gpa": "3.8+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Need-aware; есть merit-стипендии для сильных абитуриентов (условия проверить)",
    "tuition": "~$85k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Business",
      "Data Science"
    ],
    "overview": "Лидер co-op: оплачиваемые практики на 6 месяцев в компаниях по всему миру.",
    "strategy": "«Why co-op»: покажите практический интерес. Есть merit-стипендии.",
    "sat": "1480–1560",
    "act": "33–35"
  },
  {
    "id": "purdue-university",
    "name": "Purdue University",
    "country": "USA",
    "city": "West Lafayette, IN",
    "qs": 100,
    "gpa": "3.8+",
    "english": "TOEFL 80+ / IELTS 6.5",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$45k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Aerospace",
      "Agriculture"
    ],
    "overview": "Одна из лучших инженерных школ США (аэро, мех., ECE), заметно дешевле Лиги плюща.",
    "strategy": "Реалистичный и недорогой «инженерный топ». Сильная математика.",
    "sat": "1260–1500",
    "act": "27–34"
  },
  {
    "id": "university-of-california-davis",
    "name": "University of California, Davis",
    "country": "USA",
    "city": "Davis, CA",
    "qs": 120,
    "gpa": "4.0 (UC-шкала)",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$67k/год",
    "deadlines": [
      {
        "label": "UC application",
        "date": "2026-11-30"
      }
    ],
    "programs": [
      "Biology",
      "Engineering",
      "Agriculture",
      "Veterinary-related"
    ],
    "overview": "Топ по агро, ветеринарии, биологии и экологии; приятный кампус.",
    "strategy": "Test-blind: GPA и PIQ. Сильные науки в школе.",
    "sat": "/ACT не учитываются (test-blind)"
  },
  {
    "id": "university-of-california-santa-barbara",
    "name": "University of California, Santa Barbara",
    "country": "USA",
    "city": "Santa Barbara, CA",
    "qs": 150,
    "gpa": "4.0 (UC-шкала)",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$68k/год",
    "deadlines": [
      {
        "label": "UC application",
        "date": "2026-11-30"
      }
    ],
    "programs": [
      "Physics",
      "CS",
      "Engineering",
      "Economics"
    ],
    "overview": "Сильные физика, материаловедение (3 Нобелевских лауреата), кампус на океане.",
    "strategy": "Test-blind: GPA и PIQ. Подчёркивайте STEM-интересы.",
    "sat": "/ACT не учитываются (test-blind)"
  },
  {
    "id": "university-of-california-irvine",
    "name": "University of California, Irvine",
    "country": "USA",
    "city": "Irvine, CA",
    "qs": 190,
    "gpa": "4.0 (UC-шкала)",
    "english": "TOEFL 100+ / IELTS 7.0+",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$66k/год",
    "deadlines": [
      {
        "label": "UC application",
        "date": "2026-11-30"
      }
    ],
    "programs": [
      "CS",
      "Biology",
      "Engineering",
      "Business"
    ],
    "overview": "Растущий исследовательский вуз с сильными CS, биомедициной и бизнесом.",
    "strategy": "Test-blind: GPA и PIQ. Более доступный UC для иностранцев.",
    "sat": "/ACT не учитываются (test-blind)"
  },
  {
    "id": "tufts-university",
    "name": "Tufts University",
    "country": "USA",
    "city": "Medford, MA",
    "qs": 300,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$86k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "ED2/RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "International Relations",
      "CS",
      "Engineering",
      "Biology"
    ],
    "overview": "Небольшой университет с сильными международными отношениями, инженерией и междисциплинарностью.",
    "strategy": "Через эссе показывайте международный кругозор и конкретный интерес к Tufts.",
    "sat": "1500–1560",
    "act": "34–35"
  },
  {
    "id": "georgetown-university",
    "name": "Georgetown University",
    "country": "USA",
    "city": "Washington, DC",
    "qs": 200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$87k/год",
    "deadlines": [
      {
        "label": "REA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-10"
      }
    ],
    "programs": [
      "International Relations",
      "Business",
      "Government",
      "Languages"
    ],
    "overview": "Топ по международным отношениям, праву и дипломатии; рядом Госдеп и международные организации.",
    "strategy": "Выбирайте школу (SFS/College/MSB). REA сильнее RD.",
    "sat": "1490–1560",
    "act": "34–35"
  },
  {
    "id": "williams-college",
    "name": "Williams College",
    "country": "USA",
    "city": "Williamstown, MA",
    "qs": 1200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-15"
      },
      {
        "label": "RD",
        "date": "2027-01-07"
      }
    ],
    "programs": [
      "Economics",
      "Math",
      "English",
      "Computer Science"
    ],
    "overview": "Лучший гуманитарный колледж США: маленькие группы, tutorial-система.",
    "strategy": "Литературный голос и академическая глубина. ED даёт плюс.",
    "sat": "1480–1560",
    "act": "34–35"
  },
  {
    "id": "amherst-college",
    "name": "Amherst College",
    "country": "USA",
    "city": "Amherst, MA",
    "qs": 1200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-blind для иностранцев, покрывают 100% подтверждённой потребности",
    "tuition": "~$87k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-15"
      },
      {
        "label": "RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Economics",
      "Math",
      "Political Science",
      "Neuroscience"
    ],
    "overview": "Открытая учебная программа и щедрая помощь; доступ к Five College Consortium.",
    "strategy": "Need-blind для иностранцев — редкость. Сильные эссе и рекомендации.",
    "sat": "1490–1560",
    "act": "34–35"
  },
  {
    "id": "swarthmore-college",
    "name": "Swarthmore College",
    "country": "USA",
    "city": "Swarthmore, PA",
    "qs": 1200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$85k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-15"
      },
      {
        "label": "RD",
        "date": "2027-01-04"
      }
    ],
    "programs": [
      "Math",
      "Engineering",
      "Economics",
      "Political Science"
    ],
    "overview": "Академически строгий колледж, сильные математика, инженерия и honors-программа.",
    "strategy": "Интеллектуальная любознательность и честные эссе.",
    "sat": "1480–1560",
    "act": "34–35"
  },
  {
    "id": "pomona-college",
    "name": "Pomona College",
    "country": "USA",
    "city": "Claremont, CA",
    "qs": 1200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$85k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-15"
      },
      {
        "label": "RD",
        "date": "2027-01-08"
      }
    ],
    "programs": [
      "CS",
      "Economics",
      "Neuroscience",
      "Math"
    ],
    "overview": "Небольшой колледж в Калифорнии: доступ к ресурсам 5 колледжей Claremont.",
    "strategy": "Пишите о сообществе и разнообразии идей.",
    "sat": "1480–1560",
    "act": "33–35"
  },
  {
    "id": "harvey-mudd-college",
    "name": "Harvey Mudd College",
    "country": "USA",
    "city": "Claremont, CA",
    "qs": 1200,
    "gpa": "3.95+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$88k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-15"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Math",
      "Physics"
    ],
    "overview": "Лучший STEM-колледж бакалавриата: CS, математика, инженерия с гуманитарным ядром.",
    "strategy": "Очень сильная математика и олимпиады.",
    "sat": "1520–1580 (Math 780+)",
    "act": "34–36"
  },
  {
    "id": "wellesley-college",
    "name": "Wellesley College",
    "country": "USA",
    "city": "Wellesley, MA",
    "qs": 1200,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.5",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$85k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-08"
      }
    ],
    "programs": [
      "Economics",
      "Political Science",
      "Biology",
      "Psychology"
    ],
    "overview": "Женский колледж с сильными науками и экономикой, доступ к MIT (cross-registration).",
    "strategy": "Только для женщин. Сильное эссе про лидерство.",
    "sat": "1450–1550",
    "act": "33–35"
  },
  {
    "id": "university-of-virginia",
    "name": "University of Virginia",
    "country": "USA",
    "city": "Charlottesville, VA",
    "qs": 240,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Госвуз: помощи иностранцам почти нет, возможны единичные merit-стипендии",
    "tuition": "~$75k/год",
    "deadlines": [
      {
        "label": "EA",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-05"
      }
    ],
    "programs": [
      "Business (McIntire)",
      "CS",
      "Engineering",
      "Economics"
    ],
    "overview": "Топ-госуниверситет Востока; сильные McIntire (business) и инженерия.",
    "strategy": "EA чуть лучше по шансам. Нужны разносторонние активности.",
    "sat": "1480–1560",
    "act": "33–35"
  },
  {
    "id": "boston-college",
    "name": "Boston College",
    "country": "USA",
    "city": "Chestnut Hill, MA",
    "qs": 300,
    "gpa": "3.9+",
    "english": "TOEFL 100+ / IELTS 7.0",
    "aid": "Need-aware для иностранцев: помощь есть, но запрос помощи снижает шансы",
    "tuition": "~$87k/год",
    "deadlines": [
      {
        "label": "ED1",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-02"
      }
    ],
    "programs": [
      "Business",
      "Economics",
      "Finance",
      "Nursing"
    ],
    "overview": "Иезуитский университет с сильными Carroll School (Business) и гуманитарными науками.",
    "strategy": "Эссе про ценности и сервис. ED повышает шансы.",
    "sat": "1480–1550",
    "act": "33–35"
  },
  {
    "id": "case-western-reserve-university",
    "name": "Case Western Reserve University",
    "country": "USA",
    "city": "Cleveland, OH",
    "qs": 350,
    "gpa": "3.8+",
    "english": "TOEFL 90+ / IELTS 7.0",
    "aid": "Need-aware; есть merit-стипендии для сильных абитуриентов (условия проверить)",
    "tuition": "~$80k/год",
    "deadlines": [
      {
        "label": "ED",
        "date": "2026-11-01"
      },
      {
        "label": "RD",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Biomedical Engineering",
      "CS",
      "Biology",
      "Engineering"
    ],
    "overview": "Сильные биомедицинская инженерия и науки; щедрые merit-стипендии иностранцам.",
    "strategy": "Реалистичный выбор с шансом на стипендию. Подавайте рано.",
    "sat": "1450–1550",
    "act": "33–35"
  },
  {
    "id": "the-university-of-hong-kong",
    "name": "The University of Hong Kong (HKU)",
    "country": "Hong Kong",
    "city": "Hong Kong",
    "qs": 11,
    "gpa": "—",
    "english": "IB 35–42 / A-level AAA / SAT 1400+ / AP; TOEFL 80+ / IELTS 6.5+",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 200–240k/год (~$26–30k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Medicine",
      "Law",
      "Business",
      "Engineering"
    ],
    "overview": "Старейший вуз Гонконга, обучение на английском; сильные медицина, право, бизнес.",
    "strategy": "Сильные оценки + стандартные тесты. Business/Medicine очень конкурентны."
  },
  {
    "id": "the-chinese-university-of-hong-kong",
    "name": "The Chinese University of Hong Kong (CUHK)",
    "country": "Hong Kong",
    "city": "Hong Kong (Shatin)",
    "qs": 32,
    "gpa": "—",
    "english": "IB 35–42 / A-level AAA / SAT 1400+ / AP; TOEFL 80+ / IELTS 6.5+",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 160–200k/год (~$20–26k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Medicine",
      "Finance",
      "Math",
      "Engineering"
    ],
    "overview": "Колледжная система, сильные математика, медицина, финансы; кампус на холме.",
    "strategy": "Подавайте в ранний раунд. Сильные баллы по профильным предметам."
  },
  {
    "id": "the-hong-kong-university-of-science-and-technology",
    "name": "The Hong Kong University of Science and Technology (HKUST)",
    "country": "Hong Kong",
    "city": "Hong Kong (Clear Water Bay)",
    "qs": 44,
    "gpa": "—",
    "english": "IB 35–42 / A-level AAA / SAT 1400+ / AP; TOEFL 80+ / IELTS 6.5+",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 160–180k/год (~$20–23k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Finance",
      "Data Science"
    ],
    "overview": "Технологический и бизнес-вуз: сильные CS, Engineering, Finance, стартап-акселераторы.",
    "strategy": "STEM-профиль, математические баллы и проекты. Сильный выбор вместо MIT/Stanford-уровня."
  },
  {
    "id": "the-hong-kong-polytechnic-university",
    "name": "The Hong Kong Polytechnic University (PolyU)",
    "country": "Hong Kong",
    "city": "Hong Kong (Hung Hom)",
    "qs": 57,
    "gpa": "—",
    "english": "IB 28–32 / A-level BBB; TOEFL 80+ / IELTS 6.0–6.5",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 140–160k/год (~$18–21k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Design",
      "Hospitality",
      "Engineering",
      "Nursing"
    ],
    "overview": "Лидер прикладных наук: дизайн, hospitality, инженерия, физиотерапия.",
    "strategy": "Портфолио/проекты для дизайна. Практические программы."
  },
  {
    "id": "city-university-of-hong-kong",
    "name": "City University of Hong Kong (CityU)",
    "country": "Hong Kong",
    "city": "Hong Kong (Kowloon Tong)",
    "qs": 63,
    "gpa": "—",
    "english": "IB 28–32 / A-level BBB; TOEFL 80+ / IELTS 6.0–6.5",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 140–180k/год (~$18–23k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "CS",
      "Data Science",
      "Creative Media",
      "Business"
    ],
    "overview": "Сильные CS, data science, creative media и бизнес; ориентирован на индустрию.",
    "strategy": "Хороший баланс цена/качество. Подчёркивайте практические проекты."
  },
  {
    "id": "hong-kong-baptist-university",
    "name": "Hong Kong Baptist University (HKBU)",
    "country": "Hong Kong",
    "city": "Hong Kong (Kowloon Tong)",
    "qs": 290,
    "gpa": "—",
    "english": "IB 28–32 / A-level BBB; TOEFL 80+ / IELTS 6.0–6.5",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 140–160k/год (~$18–21k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Communication",
      "Chinese Medicine",
      "Creative Arts",
      "Business"
    ],
    "overview": "Либеральное образование; сильные коммуникации, китайская медицина, творческие искусства.",
    "strategy": "Эссе про интерес к межкультурной среде."
  },
  {
    "id": "lingnan-university",
    "name": "Lingnan University",
    "country": "Hong Kong",
    "city": "Hong Kong (Tuen Mun)",
    "qs": 700,
    "gpa": "—",
    "english": "IB 28–32 / A-level BBB; TOEFL 80+ / IELTS 6.0–6.5",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 110–130k/год (~$14–17k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Liberal Arts",
      "Business",
      "Social Sciences"
    ],
    "overview": "Единственный в Гонконге гос. вуз в формате liberal arts college; маленькие группы.",
    "strategy": "Надёжный запасной вариант с хорошей поддержкой студентов."
  },
  {
    "id": "the-education-university-of-hong-kong",
    "name": "The Education University of Hong Kong (EdUHK)",
    "country": "Hong Kong",
    "city": "Hong Kong (Tai Po)",
    "qs": 350,
    "gpa": "—",
    "english": "IB 28–32 / A-level BBB; TOEFL 80+ / IELTS 6.0–6.5",
    "aid": "Entrance/merit-стипендии вузов (по результатам, не по нужде); государственные стипендии для иностранцев ограничены",
    "tuition": "~HK$ 120–140k/год (~$15–18k)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Education",
      "Psychology",
      "Language Studies"
    ],
    "overview": "Ведущий вуз Гонконга по педагогике и образовательным наукам.",
    "strategy": "Для будущих преподавателей; мотивационное письмо про образование."
  },
  {
    "id": "hong-kong-metropolitan-university",
    "name": "Hong Kong Metropolitan University (HKMU)",
    "country": "Hong Kong",
    "city": "Hong Kong (Kowloon)",
    "qs": 1200,
    "gpa": "—",
    "english": "IB 24+ / A-level CCC–BBC; IELTS 6.0",
    "aid": "Ограниченные merit-стипендии",
    "tuition": "~HK$ 90–140k/год (проверить)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Business",
      "Nursing",
      "Computing"
    ],
    "overview": "Бывший Open University, гибкие форматы, практически-ориентированные программы.",
    "strategy": "Запасной вариант с мягкими требованиями."
  },
  {
    "id": "hong-kong-shue-yan-university",
    "name": "Hong Kong Shue Yan University",
    "country": "Hong Kong",
    "city": "Hong Kong (North Point)",
    "qs": 1200,
    "gpa": "—",
    "english": "IB 24+ / A-level CCC–BBC; IELTS 6.0",
    "aid": "Merit-скидки (проверить)",
    "tuition": "~HK$ 90–110k/год (проверить)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Social Sciences",
      "Business",
      "Journalism"
    ],
    "overview": "Частный вуз с гуманитарным и социальным профилем.",
    "strategy": "Запасной вариант с мягкими требованиями."
  },
  {
    "id": "the-hang-seng-university-of-hong-kong",
    "name": "The Hang Seng University of Hong Kong (HSUHK)",
    "country": "Hong Kong",
    "city": "Hong Kong (Siu Lek Yuen)",
    "qs": 1200,
    "gpa": "—",
    "english": "IB 24+ / A-level CCC–BBC; IELTS 6.0",
    "aid": "Merit-скидки (проверить)",
    "tuition": "~HK$ 100–130k/год (проверить)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Business",
      "Communication",
      "Social Sciences"
    ],
    "overview": "Частный вуз с акцентом на бизнес, коммуникации и liberal education.",
    "strategy": "Запасной вариант; важна мотивация."
  },
  {
    "id": "saint-francis-university",
    "name": "Saint Francis University (Hong Kong)",
    "country": "Hong Kong",
    "city": "Hong Kong (Tseung Kwan O)",
    "qs": 1200,
    "gpa": "—",
    "english": "IB 24+ / A-level CCC–BBC; IELTS 6.0",
    "aid": "Merit-скидки (проверить)",
    "tuition": "~HK$ 90–110k/год (проверить)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2026-12-01"
      },
      {
        "label": "Final round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Business",
      "Social Sciences",
      "Hospitality"
    ],
    "overview": "Небольшой частный вуз с профилем в бизнесе и сфере услуг.",
    "strategy": "Запасной вариант с мягкими требованиями."
  },
  {
    "id": "university-of-oxford",
    "name": "University of Oxford",
    "country": "Europe",
    "city": "Oxford, Великобритания",
    "qs": 4,
    "gpa": "—",
    "english": "A*A*A–A*AA / IB 39–40; IELTS 7.0–7.5; тесты (MAT/TMUA/ESAT/LNAT/TSA) + интервью",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£35–50k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "PPE",
      "Mathematics",
      "CS",
      "Medicine"
    ],
    "overview": "Старейший англоязычный университет: тьюториальная система один-на-один, колледжи.",
    "strategy": "Глубокая академическая подготовка по предмету. Готовьтесь к тесту и интервью."
  },
  {
    "id": "university-of-cambridge",
    "name": "University of Cambridge",
    "country": "Europe",
    "city": "Cambridge, Великобритания",
    "qs": 6,
    "gpa": "—",
    "english": "A*A*A / IB 40–42; IELTS 7.5; STEP/TMUA/ESAT + интервью",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£34–50k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Mathematics",
      "Natural Sciences",
      "Engineering",
      "CS"
    ],
    "overview": "Мировой центр математики, естественных наук и инженерии; система supervisions.",
    "strategy": "Олимпиады и STEP/TMUA — решающий фактор. Готовьтесь к интервью."
  },
  {
    "id": "imperial-college-london",
    "name": "Imperial College London",
    "country": "Europe",
    "city": "London, Великобритания",
    "qs": 2,
    "gpa": "—",
    "english": "A*A*A / IB 38–40; IELTS 7.0; тесты по предмету + интервью",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£38–45k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Physics",
      "Medicine"
    ],
    "overview": "Чистый STEM: инженерия, физика, медицина, business school.",
    "strategy": "Приём по предмету: сильная математика и тесты. Подавайте рано."
  },
  {
    "id": "university-college-london",
    "name": "University College London (UCL)",
    "country": "Europe",
    "city": "London, Великобритания",
    "qs": 9,
    "gpa": "—",
    "english": "A*AA / IB 38–39; IELTS 7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£29–40k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Economics",
      "Architecture",
      "CS",
      "Law"
    ],
    "overview": "Лондонский университет с огромным выбором программ; сильные архитектура, право, науки.",
    "strategy": "Выбирайте программу точно; личное заявление — про предмет."
  },
  {
    "id": "the-university-of-edinburgh",
    "name": "The University of Edinburgh",
    "country": "Europe",
    "city": "Edinburgh, Великобритания",
    "qs": 34,
    "gpa": "—",
    "english": "A*AA–AAA / IB 36–38; IELTS 6.5–7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£28–40k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Informatics",
      "Medicine",
      "Business",
      "Engineering"
    ],
    "overview": "Шотландский топ с сильными AI, informatics и medicine; 4-летние бакалавры.",
    "strategy": "Подавайте рано; UCAS statement — про предмет."
  },
  {
    "id": "the-university-of-manchester",
    "name": "The University of Manchester",
    "country": "Europe",
    "city": "Manchester, Великобритания",
    "qs": 35,
    "gpa": "—",
    "english": "AAA–AAB / IB 35–37; IELTS 6.5–7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£26–35k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Engineering",
      "Physics",
      "Business",
      "CS"
    ],
    "overview": "Крупный университет с сильными инженерией, физикой (графен) и business.",
    "strategy": "Менее жёсткий, чем Oxbridge/Imperial; хороший баланс шансов."
  },
  {
    "id": "king-s-college-london",
    "name": "King's College London",
    "country": "Europe",
    "city": "London, Великобритания",
    "qs": 40,
    "gpa": "—",
    "english": "AAA–A*AA / IB 36–38; IELTS 7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£26–40k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Law",
      "Medicine",
      "Politics",
      "Economics"
    ],
    "overview": "Лондонский вуз с сильными политологией, медициной, правом, War Studies.",
    "strategy": "Для гуманитарных программ важно сильное эссе."
  },
  {
    "id": "london-school-of-economics",
    "name": "London School of Economics (LSE)",
    "country": "Europe",
    "city": "London, Великобритания",
    "qs": 50,
    "gpa": "—",
    "english": "A*AA / IB 38–39; IELTS 7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "~£29–33k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      }
    ],
    "programs": [
      "Economics",
      "Finance",
      "International Relations",
      "Law"
    ],
    "overview": "Мировой центр социальных наук: экономика, политика, финансы.",
    "strategy": "Приём rolling: ранняя подача повышает шансы."
  },
  {
    "id": "university-of-bristol",
    "name": "University of Bristol",
    "country": "Europe",
    "city": "Bristol, Великобритания",
    "qs": 50,
    "gpa": "—",
    "english": "A*AA–AAA / IB 36–38; IELTS 6.5–7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£28–36k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Engineering",
      "Physics",
      "Law",
      "CS"
    ],
    "overview": "Сильные инженерия, физика, право; живой город, Russell Group.",
    "strategy": "Подавайте рано; выбирайте программу точно."
  },
  {
    "id": "university-of-warwick",
    "name": "University of Warwick",
    "country": "Europe",
    "city": "Coventry, Великобритания",
    "qs": 70,
    "gpa": "—",
    "english": "A*AA–AAA / IB 36–38; IELTS 6.5–7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£28–36k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Mathematics",
      "Economics",
      "Finance",
      "CS"
    ],
    "overview": "Сильные математика, экономика, финансы; близко от Лондона.",
    "strategy": "Экономика/математика — самые конкурентные; тесты по предмету."
  },
  {
    "id": "university-of-glasgow",
    "name": "University of Glasgow",
    "country": "Europe",
    "city": "Glasgow, Великобритания",
    "qs": 80,
    "gpa": "—",
    "english": "AAA–AAB / IB 34–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£24–32k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Medicine",
      "Engineering",
      "Social Sciences"
    ],
    "overview": "Шотландский университет с сильными медициной, инженерией, социальными науками.",
    "strategy": "Хороший вариант с более мягким порогом."
  },
  {
    "id": "durham-university",
    "name": "Durham University",
    "country": "Europe",
    "city": "Durham, Великобритания",
    "qs": 80,
    "gpa": "—",
    "english": "A*AA / IB 36–38; IELTS 6.5–7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£26–32k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Physics",
      "History",
      "Economics",
      "Theology"
    ],
    "overview": "Колледжная система, сильные физика, история и богословие.",
    "strategy": "Подавайте рано; сильное личное заявление."
  },
  {
    "id": "university-of-southampton",
    "name": "University of Southampton",
    "country": "Europe",
    "city": "Southampton, Великобритания",
    "qs": 85,
    "gpa": "—",
    "english": "AAA / IB 34–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£24–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Engineering",
      "Ocean Science",
      "CS"
    ],
    "overview": "Сильные инженерия и науки о море; Russell Group.",
    "strategy": "Реалистичный вариант для инженерии."
  },
  {
    "id": "university-of-st-andrews",
    "name": "University of St Andrews",
    "country": "Europe",
    "city": "St Andrews, Великобритания",
    "qs": 95,
    "gpa": "—",
    "english": "A*AA / IB 36–38; IELTS 7.0",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£28–36k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "International Relations",
      "History",
      "Math",
      "Economics"
    ],
    "overview": "Старейший шотландский университет: камерная среда, сильные IR и история.",
    "strategy": "Сильное личное заявление; маленький кампус."
  },
  {
    "id": "university-of-birmingham",
    "name": "University of Birmingham",
    "country": "Europe",
    "city": "Birmingham, Великобритания",
    "qs": 75,
    "gpa": "—",
    "english": "AAA–AAB / IB 34–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£24–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Business",
      "Engineering",
      "Medicine"
    ],
    "overview": "Крупный Russell Group университет с сильным бизнесом и инженерией.",
    "strategy": "Хороший баланс цены и шансов."
  },
  {
    "id": "university-of-leeds",
    "name": "University of Leeds",
    "country": "Europe",
    "city": "Leeds, Великобритания",
    "qs": 75,
    "gpa": "—",
    "english": "AAA–AAB / IB 34–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£23–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Business",
      "Engineering",
      "Social Sciences"
    ],
    "overview": "Крупный университет со студенческой жизнью и сильным бизнесом.",
    "strategy": "Реалистичный вариант."
  },
  {
    "id": "university-of-sheffield",
    "name": "University of Sheffield",
    "country": "Europe",
    "city": "Sheffield, Великобритания",
    "qs": 100,
    "gpa": "—",
    "english": "AAA–ABB / IB 33–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£22–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Engineering",
      "Physics",
      "Architecture"
    ],
    "overview": "Сильные инженерия и науки, дружелюбный кампус.",
    "strategy": "Реалистичный вариант для инженерии."
  },
  {
    "id": "queen-mary-university-of-london",
    "name": "Queen Mary University of London",
    "country": "Europe",
    "city": "London, Великобритания",
    "qs": 115,
    "gpa": "—",
    "english": "AAA–ABB / IB 34–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£23–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Medicine",
      "Law",
      "Math"
    ],
    "overview": "Лондонский вуз с сильными медициной, правом и математикой.",
    "strategy": "Реалистичный вариант в Лондоне."
  },
  {
    "id": "university-of-exeter",
    "name": "University of Exeter",
    "country": "Europe",
    "city": "Exeter, Великобритания",
    "qs": 150,
    "gpa": "—",
    "english": "AAA–ABB / IB 34–36; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£24–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Environmental Science",
      "Business",
      "Law"
    ],
    "overview": "Сильные климатические и социальные науки.",
    "strategy": "Хороший вариант с мягкими требованиями."
  },
  {
    "id": "university-of-bath",
    "name": "University of Bath",
    "country": "Europe",
    "city": "Bath, Великобритания",
    "qs": 130,
    "gpa": "—",
    "english": "A*AA–AAA / IB 36–38; IELTS 6.5",
    "aid": "Для иностранцев помощь ограничена: единичные merit-стипендии вуза",
    "tuition": "£24–30k/год",
    "deadlines": [
      {
        "label": "UCAS",
        "date": "2027-01-14"
      },
      {
        "label": "Oxbridge/Medicine",
        "date": "2026-10-15"
      }
    ],
    "programs": [
      "Engineering",
      "Management",
      "Architecture"
    ],
    "overview": "Лидер по инженерии и менеджменту; sandwich-годы с оплачиваемой практикой.",
    "strategy": "Практика на placement — сильное преимущество."
  },
  {
    "id": "eth-zurich",
    "name": "ETH Zurich",
    "country": "Europe",
    "city": "Zurich, Швейцария",
    "qs": 7,
    "gpa": "—",
    "english": "Аттестат РК + вступительный экзамен/Foundation или IB/A-level; немецкий C1",
    "aid": "Для bachelor помощи мало; вузовские стипендии для сильных абитуриентов",
    "tuition": "~CHF 730/семестр; проживание ~CHF 25k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2026-10-31"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Physics",
      "Math"
    ],
    "overview": "Лучший технический вуз континентальной Европы: физика, инженерия, CS.",
    "strategy": "Сильная математика и немецкий; обучение дёшево, но проживание дорогое."
  },
  {
    "id": "epfl",
    "name": "EPFL",
    "country": "Europe",
    "city": "Lausanne, Швейцария",
    "qs": 26,
    "gpa": "—",
    "english": "Аттестат РК + вступительный экзамен/Foundation или IB/A-level; французский C1",
    "aid": "Для bachelor помощи мало; вузовские стипендии для сильных абитуриентов",
    "tuition": "~CHF 730/семестр; проживание ~CHF 20–25k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2026-12-15"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Life Sciences"
    ],
    "overview": "Швейцарский политех: инженерия, CS, life sciences; сильная международная среда.",
    "strategy": "Французский C1 — критичен; сильная математика."
  },
  {
    "id": "university-of-zurich",
    "name": "University of Zurich (UZH)",
    "country": "Europe",
    "city": "Zurich, Швейцария",
    "qs": 70,
    "gpa": "—",
    "english": "Аттестат РК + доп. экзамены/Foundation либо IB/A-level; немецкий или французский C1 (по вузу)",
    "aid": "Для bachelor помощи мало; вузовские стипендии для сильных абитуриентов",
    "tuition": "~CHF 800/семестр; проживание ~CHF 25k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-04-30"
      }
    ],
    "programs": [
      "Law",
      "Medicine",
      "Economics",
      "Computer Science"
    ],
    "overview": "Крупнейший университет Швейцарии: право, медицина, экономика.",
    "strategy": "Немецкий C1; конкурс умеренный."
  },
  {
    "id": "university-of-geneva",
    "name": "University of Geneva",
    "country": "Europe",
    "city": "Geneva, Швейцария",
    "qs": 105,
    "gpa": "—",
    "english": "Аттестат РК + доп. экзамены/Foundation либо IB/A-level; немецкий или французский C1 (по вузу)",
    "aid": "Для bachelor помощи мало; вузовские стипендии для сильных абитуриентов",
    "tuition": "~CHF 500/семестр; проживание ~CHF 25k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-04-30"
      }
    ],
    "programs": [
      "International Relations",
      "Law",
      "Physics"
    ],
    "overview": "Международный университет с сильными IR, правом и науками; рядом ООН и CERN.",
    "strategy": "Французский C1; интернациональная среда."
  },
  {
    "id": "technical-university-of-munich",
    "name": "Technical University of Munich (TUM)",
    "country": "Europe",
    "city": "Munich, Германия",
    "qs": 22,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Для non-EU: платно (~€2,000–3,000/семестр, проверить); проживание ~€12k",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Natural Sciences",
      "Management"
    ],
    "overview": "Лучший технический университет Германии, сильные связи с индустрией.",
    "strategy": "Подавайте рано; сильная математика и немецкий/английский."
  },
  {
    "id": "lmu-munich",
    "name": "LMU Munich",
    "country": "Europe",
    "city": "Munich, Германия",
    "qs": 59,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Law",
      "Medicine",
      "Humanities",
      "Sciences"
    ],
    "overview": "Один из ведущих классических университетов: гуманитарные, право, медицина, науки.",
    "strategy": "Немецкий C1; конкуренция высокая по numerus clausus."
  },
  {
    "id": "heidelberg-university",
    "name": "Heidelberg University",
    "country": "Europe",
    "city": "Heidelberg, Германия",
    "qs": 87,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "€1,500/семестр для non-EU; проживание ~€12k",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Medicine",
      "Physics",
      "Law",
      "Life Sciences"
    ],
    "overview": "Старейший университет Германии: сильные медицина, науки, право.",
    "strategy": "Немецкий C1 и Studienkolleg при необходимости."
  },
  {
    "id": "humboldt-university-of-berlin",
    "name": "Humboldt University of Berlin",
    "country": "Europe",
    "city": "Berlin, Германия",
    "qs": 120,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Humanities",
      "Sciences",
      "Law"
    ],
    "overview": "Классический университет Берлина с сильными науками и гуманитарными программами.",
    "strategy": "Через uni-assist; нужен язык."
  },
  {
    "id": "freie-universit-t-berlin",
    "name": "Freie Universität Berlin",
    "country": "Europe",
    "city": "Berlin, Германия",
    "qs": 98,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Social Sciences",
      "Humanities",
      "Sciences"
    ],
    "overview": "Исследовательский университет с международной средой и гуманитарным профилем.",
    "strategy": "Через uni-assist."
  },
  {
    "id": "technische-universit-t-berlin",
    "name": "Technische Universität Berlin",
    "country": "Europe",
    "city": "Berlin, Германия",
    "qs": 155,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Architecture"
    ],
    "overview": "Крупнейший технический университет Берлина: инженерия, IT, архитектура.",
    "strategy": "Дешёвый вариант в столице; немецкий нужен."
  },
  {
    "id": "rwth-aachen-university",
    "name": "RWTH Aachen University",
    "country": "Europe",
    "city": "Aachen, Германия",
    "qs": 106,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Mechanical Engineering",
      "Electrical Engineering",
      "CS"
    ],
    "overview": "Один из лучших технических университетов Европы: машиностроение, электроника.",
    "strategy": "Сильная математика; немецкий для большинства программ."
  },
  {
    "id": "karlsruhe-institute-of-technology",
    "name": "Karlsruhe Institute of Technology (KIT)",
    "country": "Europe",
    "city": "Karlsruhe, Германия",
    "qs": 123,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "€1,500/семестр для non-EU; проживание ~€12k",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Informatics",
      "Physics",
      "Engineering"
    ],
    "overview": "Технический университет с сильной физикой и информатикой.",
    "strategy": "Подходит для IT/инженерии; немецкий C1."
  },
  {
    "id": "university-of-freiburg",
    "name": "University of Freiburg",
    "country": "Europe",
    "city": "Freiburg, Германия",
    "qs": 175,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "€1,500/семестр для non-EU; проживание ~€12k",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Biology",
      "Humanities",
      "Medicine"
    ],
    "overview": "Классический исследовательский университет; сильные науки и гуманитарные.",
    "strategy": "Немецкий C1."
  },
  {
    "id": "tu-dresden",
    "name": "TU Dresden",
    "country": "Europe",
    "city": "Dresden, Германия",
    "qs": 190,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Natural Sciences"
    ],
    "overview": "Один из «университетов отличия» с сильной инженерией и IT.",
    "strategy": "Дешёвый технический вариант; немецкий нужен."
  },
  {
    "id": "university-of-hamburg",
    "name": "University of Hamburg",
    "country": "Europe",
    "city": "Hamburg, Германия",
    "qs": 190,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "Госвузы: €0–350/семестр (сбор); Баден-Вюртемберг — €1,500/семестр для non-EU; проживание ~€12k/год",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Social Sciences",
      "Natural Sciences",
      "Law"
    ],
    "overview": "Крупный университет с сильными социальными и естественными науками.",
    "strategy": "Через uni-assist."
  },
  {
    "id": "university-of-t-bingen",
    "name": "University of Tübingen",
    "country": "Europe",
    "city": "Tübingen, Германия",
    "qs": 160,
    "gpa": "—",
    "english": "Аттестат РК + 1 год вуза или Studienkolleg; либо IB/A-level; немецкий B2–C1 (или IELTS 6.0–6.5 для англ. программ)",
    "aid": "DAAD, Deutschlandstipendium (merit); для non-EU нужен блокированный счёт ~€12k",
    "tuition": "€1,500/семестр для non-EU; проживание ~€11k",
    "deadlines": [
      {
        "label": "WS 2027/28",
        "date": "2027-07-15"
      }
    ],
    "programs": [
      "Neuroscience",
      "AI",
      "Humanities"
    ],
    "overview": "Академический университет с сильными нейронауками, ИИ и гуманитарными.",
    "strategy": "Немецкий C1."
  },
  {
    "id": "delft-university-of-technology",
    "name": "Delft University of Technology",
    "country": "Europe",
    "city": "Delft, Нидерланды",
    "qs": 47,
    "gpa": "—",
    "english": "IB/A-level/AP + сильная математика и физика; IELTS 6.5",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€18–20k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Aerospace",
      "Engineering",
      "Architecture",
      "CS"
    ],
    "overview": "Лучший технический вуз Нидерландов: аэрокосмос, инженерия, архитектура.",
    "strategy": "Сильная математика; ранний дедлайн."
  },
  {
    "id": "university-of-amsterdam",
    "name": "University of Amsterdam",
    "country": "Europe",
    "city": "Amsterdam, Нидерланды",
    "qs": 53,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€12–16k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Economics",
      "Psychology",
      "Law",
      "AI"
    ],
    "overview": "Гуманитарные, социальные науки, экономика; англоязычные программы.",
    "strategy": "Numerus fixus: ранняя подача."
  },
  {
    "id": "leiden-university",
    "name": "Leiden University",
    "country": "Europe",
    "city": "Leiden, Нидерланды",
    "qs": 76,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€12–18k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Law",
      "International Relations",
      "Archaeology"
    ],
    "overview": "Старейший университет Нидерландов; сильны право, IR, гуманитарные.",
    "strategy": "Подходит для гуманитарных программ."
  },
  {
    "id": "utrecht-university",
    "name": "Utrecht University",
    "country": "Europe",
    "city": "Utrecht, Нидерланды",
    "qs": 83,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€12–18k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Life Sciences",
      "Law",
      "Economics"
    ],
    "overview": "Сильные науки о жизни, право, экономика; университетский город.",
    "strategy": "Широкий выбор программ."
  },
  {
    "id": "eindhoven-university-of-technology",
    "name": "Eindhoven University of Technology",
    "country": "Europe",
    "city": "Eindhoven, Нидерланды",
    "qs": 140,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€13–16k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Engineering",
      "Applied Physics",
      "Data Science"
    ],
    "overview": "Технический вуз с тесными связями с индустрией (Philips, ASML).",
    "strategy": "Сильная математика/физика."
  },
  {
    "id": "university-of-groningen",
    "name": "University of Groningen",
    "country": "Europe",
    "city": "Groningen, Нидерланды",
    "qs": 135,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€12–16k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Science",
      "Economics",
      "Psychology"
    ],
    "overview": "Сильные науки и международные программы; недорогой город.",
    "strategy": "Хороший вариант по соотношению цены и качества."
  },
  {
    "id": "wageningen-university",
    "name": "Wageningen University",
    "country": "Europe",
    "city": "Wageningen, Нидерланды",
    "qs": 150,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€13–18k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Agriculture",
      "Food Technology",
      "Environmental Sciences"
    ],
    "overview": "Мировой лидер по агро- и пищевым наукам.",
    "strategy": "Для агро- и экологических направлений."
  },
  {
    "id": "erasmus-university-rotterdam",
    "name": "Erasmus University Rotterdam",
    "country": "Europe",
    "city": "Rotterdam, Нидерланды",
    "qs": 190,
    "gpa": "—",
    "english": "IB / A-level / AP или Foundation (аттестат РК обычно недостаточен); IELTS 6.5–7.0",
    "aid": "Ограниченные merit-стипендии вузов",
    "tuition": "~€12–17k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      },
      {
        "label": "остальные программы",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Business",
      "Economics",
      "Law"
    ],
    "overview": "Сильные бизнес (RSM), экономика, право.",
    "strategy": "Для бизнес-программ; численность мест ограничена."
  },
  {
    "id": "universit-psl",
    "name": "Université PSL (Paris Sciences et Lettres)",
    "country": "Europe",
    "city": "Paris, Франция",
    "qs": 24,
    "gpa": "—",
    "english": "Аттестат + французский B2/C1 (программы на фр.) или IB/A-level; на англ. — IELTS 6.5",
    "aid": "Стипендии Campus France, Eiffel (master), CROUS жильё",
    "tuition": "~€3–14k/год (по программе)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Sciences",
      "Economics",
      "Humanities"
    ],
    "overview": "Объединение ENS, Dauphine, Mines и др.; элитные науки и гуманитарные.",
    "strategy": "Конкурсный отбор; сильные академические показатели."
  },
  {
    "id": "institut-polytechnique-de-paris",
    "name": "Institut Polytechnique de Paris (IP Paris)",
    "country": "Europe",
    "city": "Palaiseau, Франция",
    "qs": 41,
    "gpa": "—",
    "english": "Аттестат + французский B2/C1 (программы на фр.) или IB/A-level; на англ. — IELTS 6.5",
    "aid": "Стипендии Campus France, Eiffel (master), CROUS жильё",
    "tuition": "~€2,770–12k/год (по школе)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Engineering",
      "AI",
      "Math",
      "Physics"
    ],
    "overview": "Альянс Ecole Polytechnique, Télécom и др.; сильные инженерия и ИИ.",
    "strategy": "Отбор через concours/досье."
  },
  {
    "id": "sorbonne-university",
    "name": "Sorbonne University",
    "country": "Europe",
    "city": "Paris, Франция",
    "qs": 72,
    "gpa": "—",
    "english": "Аттестат + французский B2/C1 (программы на фр.) или IB/A-level; на англ. — IELTS 6.5",
    "aid": "Стипендии Campus France, Eiffel (master), CROUS жильё",
    "tuition": "Госвузы: ~€2,770/год (Licence) для non-EU; частные/Sciences Po дороже (€10–15k+)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Sciences",
      "Medicine",
      "Humanities"
    ],
    "overview": "Исторический университет Парижа с сильными науками и медициной.",
    "strategy": "Французский B2/C1 для большинства программ."
  },
  {
    "id": "universit-paris-saclay",
    "name": "Université Paris-Saclay",
    "country": "Europe",
    "city": "Orsay, Франция",
    "qs": 70,
    "gpa": "—",
    "english": "Аттестат + французский B2/C1 (программы на фр.) или IB/A-level; на англ. — IELTS 6.5",
    "aid": "Стипендии Campus France, Eiffel (master), CROUS жильё",
    "tuition": "Госвузы: ~€2,770/год (Licence) для non-EU; частные/Sciences Po дороже (€10–15k+)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Physics",
      "Math",
      "Life Sciences"
    ],
    "overview": "Крупнейший научный кластер Франции; сильные физика, математика, науки о жизни.",
    "strategy": "Сильные естественные науки."
  },
  {
    "id": "sciences-po",
    "name": "Sciences Po",
    "country": "Europe",
    "city": "Paris, Франция",
    "qs": 190,
    "gpa": "—",
    "english": "Аттестат + французский B2/C1 (программы на фр.) или IB/A-level; на англ. — IELTS 6.5",
    "aid": "Стипендии Campus France, Eiffel (master), CROUS жильё",
    "tuition": "~€14k+/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Political Science",
      "International Relations",
      "Economics"
    ],
    "overview": "Элитная школа социальных наук: политика, IR, право, экономика.",
    "strategy": "Сильное эссе и интервью."
  },
  {
    "id": "universit-grenoble-alpes",
    "name": "Université Grenoble Alpes",
    "country": "Europe",
    "city": "Grenoble, Франция",
    "qs": 315,
    "gpa": "—",
    "english": "Аттестат + французский B2/C1 (программы на фр.) или IB/A-level; на англ. — IELTS 6.5",
    "aid": "Стипендии Campus France, Eiffel (master), CROUS жильё",
    "tuition": "Госвузы: ~€2,770/год (Licence) для non-EU; частные/Sciences Po дороже (€10–15k+)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Physics",
      "Computer Science",
      "Engineering"
    ],
    "overview": "Крупный научный университет в Альпах; сильные физика, IT.",
    "strategy": "Недорогой вариант для STEM."
  },
  {
    "id": "kth-royal-institute-of-technology",
    "name": "KTH Royal Institute of Technology",
    "country": "Europe",
    "city": "Stockholm, Швеция",
    "qs": 73,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); шведский не нужен для англ. программ",
    "aid": "Стипендии вуза (до 100% на часть), Swedish Institute (чаще master)",
    "tuition": "~SEK 160–190k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Architecture"
    ],
    "overview": "Ведущий технический вуз Скандинавии; тесная связь со стартап-экосистемой Стокгольма.",
    "strategy": "Сильная математика; ранняя подача."
  },
  {
    "id": "lund-university",
    "name": "Lund University",
    "country": "Europe",
    "city": "Lund, Швеция",
    "qs": 85,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); шведский не нужен для англ. программ",
    "aid": "Стипендии вуза (до 100% на часть), Swedish Institute (чаще master)",
    "tuition": "~SEK 100–200k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Engineering",
      "Natural Sciences",
      "Law"
    ],
    "overview": "Один из старейших университетов; сильные науки, право, инженерия.",
    "strategy": "Merit-скидки доступны."
  },
  {
    "id": "uppsala-university",
    "name": "Uppsala University",
    "country": "Europe",
    "city": "Uppsala, Швеция",
    "qs": 130,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); шведский не нужен для англ. программ",
    "aid": "Стипендии вуза (до 100% на часть), Swedish Institute (чаще master)",
    "tuition": "~SEK 120–190k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Sciences",
      "Humanities",
      "Law"
    ],
    "overview": "Старейший университет Скандинавии, сильные науки и гуманитарные.",
    "strategy": "Merit-скидки (проверить)."
  },
  {
    "id": "chalmers-university-of-technology",
    "name": "Chalmers University of Technology",
    "country": "Europe",
    "city": "Gothenburg, Швеция",
    "qs": 190,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); шведский не нужен для англ. программ",
    "aid": "Стипендии вуза (до 100% на часть), Swedish Institute (чаще master)",
    "tuition": "~SEK 140–200k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-01-15"
      }
    ],
    "programs": [
      "Engineering",
      "Architecture",
      "CS"
    ],
    "overview": "Технический университет с сильными инженерией и архитектурой.",
    "strategy": "Стипендии на часть tuition."
  },
  {
    "id": "university-of-copenhagen",
    "name": "University of Copenhagen",
    "country": "Europe",
    "city": "Copenhagen, Дания",
    "qs": 90,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); математика по профилю",
    "aid": "Merit-стипендии вузов (ограниченно)",
    "tuition": "~€10–18k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-03-15"
      }
    ],
    "programs": [
      "Life Sciences",
      "Economics",
      "Law"
    ],
    "overview": "Крупнейший университет Дании; сильные науки о жизни и социальные науки.",
    "strategy": "Подавайте до 15 марта."
  },
  {
    "id": "technical-university-of-denmark",
    "name": "Technical University of Denmark (DTU)",
    "country": "Europe",
    "city": "Lyngby, Дания",
    "qs": 104,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); математика по профилю",
    "aid": "Merit-стипендии вузов (ограниченно)",
    "tuition": "~€12–18k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-03-15"
      }
    ],
    "programs": [
      "Engineering",
      "Data Science",
      "Energy"
    ],
    "overview": "Ведущий технический вуз Дании; инженерия и науки о данных.",
    "strategy": "Сильная математика."
  },
  {
    "id": "aarhus-university",
    "name": "Aarhus University",
    "country": "Europe",
    "city": "Aarhus, Дания",
    "qs": 150,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); математика по профилю",
    "aid": "Merit-стипендии вузов (ограниченно)",
    "tuition": "~€10–18k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-03-15"
      }
    ],
    "programs": [
      "Business",
      "Sciences",
      "Social Sciences"
    ],
    "overview": "Сильные науки, бизнес и социальные науки; студенческий город.",
    "strategy": "Реалистичный вариант."
  },
  {
    "id": "university-of-helsinki",
    "name": "University of Helsinki",
    "country": "Europe",
    "city": "Helsinki, Финляндия",
    "qs": 100,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); вступительный экзамен (по программе)",
    "aid": "Scholarship programmes вузов (часто 50–100% скидка на tuition)",
    "tuition": "~€10–13k/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Sciences",
      "Education",
      "Law"
    ],
    "overview": "Крупнейший университет Финляндии; сильные науки и educational sciences.",
    "strategy": "Вступительные экзамены; merit-скидки."
  },
  {
    "id": "aalto-university",
    "name": "Aalto University",
    "country": "Europe",
    "city": "Espoo, Финляндия",
    "qs": 112,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5); вступительный экзамен (по программе)",
    "aid": "Scholarship programmes вузов (часто 50–100% скидка на tuition)",
    "tuition": "~€12–15k/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-01-01"
      }
    ],
    "programs": [
      "Engineering",
      "Design",
      "Business"
    ],
    "overview": "Дизайн, технологии и бизнес в одном кампусе; стартап-культура.",
    "strategy": "Портфолио для дизайна; scholarships."
  },
  {
    "id": "university-of-oslo",
    "name": "University of Oslo",
    "country": "Europe",
    "city": "Oslo, Норвегия",
    "qs": 130,
    "gpa": "—",
    "english": "Аттестат + норвежский B2 (bachelor в основном на норвежском); англ. — mostly master",
    "aid": "Quota Scheme (в основном master)",
    "tuition": "Для non-EEA введена плата: ~NOK 100–200k/год (проверить)",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2026-12-01"
      }
    ],
    "programs": [
      "Sciences",
      "Law",
      "Medicine"
    ],
    "overview": "Крупнейший университет Норвегии; сильные науки и право.",
    "strategy": "Требуется норвежский; подходит для будущих магистров."
  },
  {
    "id": "ku-leuven",
    "name": "KU Leuven",
    "country": "Europe",
    "city": "Leuven, Бельгия",
    "qs": 61,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5) или нидерландский/французский",
    "aid": "Ограниченные стипендии вузов",
    "tuition": "~€6–8k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Engineering",
      "Sciences",
      "Law"
    ],
    "overview": "Лучший университет Бельгии: сильные науки, инженерия и право.",
    "strategy": "Для non-EU — ранний дедлайн (визы)."
  },
  {
    "id": "ghent-university",
    "name": "Ghent University",
    "country": "Europe",
    "city": "Ghent, Бельгия",
    "qs": 130,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5) или нидерландский/французский",
    "aid": "Ограниченные стипендии вузов",
    "tuition": "~€5–7k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-04-01"
      }
    ],
    "programs": [
      "Sciences",
      "Engineering",
      "Humanities"
    ],
    "overview": "Крупный университет с сильными науками и инженерией.",
    "strategy": "Недорогой вариант."
  },
  {
    "id": "uclouvain",
    "name": "UCLouvain",
    "country": "Europe",
    "city": "Louvain-la-Neuve, Бельгия",
    "qs": 190,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5) или нидерландский/французский",
    "aid": "Ограниченные стипендии вузов",
    "tuition": "~€4–8k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-02-15"
      }
    ],
    "programs": [
      "Engineering",
      "Sciences",
      "Law"
    ],
    "overview": "Французоязычный университет с сильными науками и инженерией.",
    "strategy": "Нужен французский."
  },
  {
    "id": "vrije-universiteit-brussel",
    "name": "Vrije Universiteit Brussel (VUB)",
    "country": "Europe",
    "city": "Brussels, Бельгия",
    "qs": 290,
    "gpa": "—",
    "english": "Аттестат/IB + английский (IELTS 6.5) или нидерландский/французский",
    "aid": "Ограниченные стипендии вузов",
    "tuition": "~€4–8k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Sciences",
      "Engineering",
      "Social Sciences"
    ],
    "overview": "Интернациональный университет с англоязычными программами.",
    "strategy": "Англоязычные программы."
  },
  {
    "id": "university-of-vienna",
    "name": "University of Vienna",
    "country": "Europe",
    "city": "Vienna, Австрия",
    "qs": 137,
    "gpa": "—",
    "english": "Аттестат + немецкий B2–C1 (или IELTS для англ. программ); возможна доп. квалификация",
    "aid": "Ограниченно: стипендии вузов и ÖAD",
    "tuition": "~€1,453/семестр для non-EU + проживание ~€12k",
    "deadlines": [
      {
        "label": "Окно",
        "date": "2027-09-05"
      }
    ],
    "programs": [
      "Humanities",
      "Sciences",
      "Law"
    ],
    "overview": "Крупнейший университет Австрии; широкий выбор программ.",
    "strategy": "Нужен немецкий C1."
  },
  {
    "id": "tu-wien",
    "name": "TU Wien",
    "country": "Europe",
    "city": "Vienna, Австрия",
    "qs": 190,
    "gpa": "—",
    "english": "Аттестат + немецкий B2–C1 (или IELTS для англ. программ); возможна доп. квалификация",
    "aid": "Ограниченно: стипендии вузов и ÖAD",
    "tuition": "~€1,453/семестр для non-EU + проживание ~€12k",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-09-05"
      }
    ],
    "programs": [
      "Engineering",
      "CS",
      "Architecture"
    ],
    "overview": "Ведущий технический университет Австрии.",
    "strategy": "Немецкий B2–C1 для большинства программ."
  },
  {
    "id": "politecnico-di-milano",
    "name": "Politecnico di Milano",
    "country": "Europe",
    "city": "Milan, Италия",
    "qs": 111,
    "gpa": "—",
    "english": "Аттестат + тест (TOLC/вузовский) + английский (IELTS 6.0–6.5) или итальянский B2",
    "aid": "DSU (региональные стипендии), Invest Your Talent, merit вуза",
    "tuition": "~€4k/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-05-01"
      }
    ],
    "programs": [
      "Engineering",
      "Architecture",
      "Design"
    ],
    "overview": "Лучший технический вуз Италии; сильные дизайн, архитектура, инженерия.",
    "strategy": "Тест (TOLC/вузовский) и ранняя подача."
  },
  {
    "id": "university-of-bologna",
    "name": "University of Bologna",
    "country": "Europe",
    "city": "Bologna, Италия",
    "qs": 133,
    "gpa": "—",
    "english": "Аттестат + тест (TOLC/вузовский) + английский (IELTS 6.0–6.5) или итальянский B2",
    "aid": "DSU (региональные стипендии), Invest Your Talent, merit вуза",
    "tuition": "~€1–4k/год (по доходу/программе)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Humanities",
      "Sciences",
      "Economics"
    ],
    "overview": "Старейший университет мира (1088); сильные науки и гуманитарные.",
    "strategy": "Тест/подача рано."
  },
  {
    "id": "sapienza-university-of-rome",
    "name": "Sapienza University of Rome",
    "country": "Europe",
    "city": "Rome, Италия",
    "qs": 120,
    "gpa": "—",
    "english": "Аттестат + тест (TOLC/вузовский) + английский (IELTS 6.0–6.5) или итальянский B2",
    "aid": "DSU (региональные стипендии), Invest Your Talent, merit вуза",
    "tuition": "~€1–4k/год (по доходу/программе)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Engineering",
      "Medicine",
      "Humanities"
    ],
    "overview": "Крупнейший университет Европы по числу студентов.",
    "strategy": "Недорогой вариант."
  },
  {
    "id": "politecnico-di-torino",
    "name": "Politecnico di Torino",
    "country": "Europe",
    "city": "Turin, Италия",
    "qs": 250,
    "gpa": "—",
    "english": "Аттестат + тест (TOLC/вузовский) + английский (IELTS 6.0–6.5) или итальянский B2",
    "aid": "DSU (региональные стипендии), Invest Your Talent, merit вуза",
    "tuition": "~€2–3.5k/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-03-01"
      }
    ],
    "programs": [
      "Engineering",
      "Architecture",
      "Design"
    ],
    "overview": "Сильный технический вуз; англоязычные программы.",
    "strategy": "Тест и подача рано."
  },
  {
    "id": "university-of-barcelona",
    "name": "University of Barcelona",
    "country": "Europe",
    "city": "Barcelona, Испания",
    "qs": 100,
    "gpa": "—",
    "english": "Гомологация аттестата (UNEDasiss) + PAU/ВАО для non-EU; испанский B2 (или англ. программы)",
    "aid": "Ограниченно: Becas MAEC-AECID, вузовские стипендии",
    "tuition": "Госвузы: ~€1,000–3,000/год (non-EU)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-06-01"
      }
    ],
    "programs": [
      "Sciences",
      "Humanities",
      "Medicine"
    ],
    "overview": "Крупнейший университет Каталонии; сильные науки и гуманитарные.",
    "strategy": "Нужны гомологация и испанский."
  },
  {
    "id": "universitat-aut-noma-de-barcelona",
    "name": "Universitat Autònoma de Barcelona",
    "country": "Europe",
    "city": "Bellaterra, Испания",
    "qs": 150,
    "gpa": "—",
    "english": "Гомологация аттестата (UNEDasiss) + PAU/ВАО для non-EU; испанский B2 (или англ. программы)",
    "aid": "Ограниченно: Becas MAEC-AECID, вузовские стипендии",
    "tuition": "Госвузы: ~€1,000–3,000/год (non-EU)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-06-01"
      }
    ],
    "programs": [
      "Sciences",
      "Economics",
      "Communication"
    ],
    "overview": "Сильные науки и социальные науки; англоязычные программы.",
    "strategy": "Нужны гомологация и испанский."
  },
  {
    "id": "universitat-pompeu-fabra",
    "name": "Universitat Pompeu Fabra",
    "country": "Europe",
    "city": "Barcelona, Испания",
    "qs": 200,
    "gpa": "—",
    "english": "Гомологация аттестата (UNEDasiss) + PAU/ВАО для non-EU; испанский B2 (или англ. программы)",
    "aid": "Ограниченно: Becas MAEC-AECID, вузовские стипендии",
    "tuition": "~€2–4k/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-06-01"
      }
    ],
    "programs": [
      "Economics",
      "Political Science",
      "Data Science"
    ],
    "overview": "Сильные экономика, политология, коммуникации и data science.",
    "strategy": "Англоязычные программы."
  },
  {
    "id": "trinity-college-dublin",
    "name": "Trinity College Dublin",
    "country": "Europe",
    "city": "Dublin, Ирландия",
    "qs": 87,
    "gpa": "—",
    "english": "Аттестат/IB/A-level + IELTS 6.5; для non-EU — прямая подача/CAO",
    "aid": "Merit-стипендии вузов (ограниченно)",
    "tuition": "~€25–35k/год",
    "deadlines": [
      {
        "label": "CAO",
        "date": "2027-02-01"
      }
    ],
    "programs": [
      "Humanities",
      "Sciences",
      "Business"
    ],
    "overview": "Старейший университет Ирландии; сильные гуманитарные, науки и бизнес.",
    "strategy": "Англоязычный вариант в Европе."
  },
  {
    "id": "university-college-dublin",
    "name": "University College Dublin",
    "country": "Europe",
    "city": "Dublin, Ирландия",
    "qs": 126,
    "gpa": "—",
    "english": "Аттестат/IB/A-level + IELTS 6.5; для non-EU — прямая подача/CAO",
    "aid": "Merit-стипендии вузов (ограниченно)",
    "tuition": "~€25–35k/год",
    "deadlines": [
      {
        "label": "CAO",
        "date": "2027-02-01"
      }
    ],
    "programs": [
      "Business",
      "Engineering",
      "Veterinary"
    ],
    "overview": "Крупнейший университет Ирландии; сильные бизнес, инженерия, ветеринария.",
    "strategy": "Англоязычный вариант в Европе."
  },
  {
    "id": "university-college-cork",
    "name": "University College Cork",
    "country": "Europe",
    "city": "Cork, Ирландия",
    "qs": 290,
    "gpa": "—",
    "english": "Аттестат/IB/A-level + IELTS 6.5; для non-EU — прямая подача/CAO",
    "aid": "Merit-стипендии вузов (ограниченно)",
    "tuition": "~€22–30k/год",
    "deadlines": [
      {
        "label": "CAO",
        "date": "2027-02-01"
      }
    ],
    "programs": [
      "Life Sciences",
      "Engineering",
      "Business"
    ],
    "overview": "Сильные науки о жизни и инженерия; дружелюбный город.",
    "strategy": "Более доступный вариант в Ирландии."
  },
  {
    "id": "university-of-warsaw",
    "name": "University of Warsaw",
    "country": "Europe",
    "city": "Warsaw, Польша",
    "qs": 260,
    "gpa": "—",
    "english": "Аттестат + английский (IELTS 6.0+)",
    "aid": "Стипендии NAWA и вузов",
    "tuition": "~€2–5k/год (англ. программы)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-06-01"
      }
    ],
    "programs": [
      "Humanities",
      "Sciences",
      "Economics"
    ],
    "overview": "Крупнейший университет Польши; сильные гуманитарные и естественные науки.",
    "strategy": "Дешёвый вариант."
  },
  {
    "id": "charles-university",
    "name": "Charles University",
    "country": "Europe",
    "city": "Prague, Чехия",
    "qs": 250,
    "gpa": "—",
    "english": "Аттестат + вступительный экзамен; английский (IELTS 6.5) для EN-программ",
    "aid": "Czech Government Scholarships (TAP)",
    "tuition": "EN-программы ~€6–10k/год; чешский язык — бесплатно",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-02-28"
      }
    ],
    "programs": [
      "Medicine",
      "Sciences",
      "Humanities"
    ],
    "overview": "Старейший университет Центральной Европы; сильные медицина и науки.",
    "strategy": "Англоязычные программы — платные."
  },
  {
    "id": "university-of-lisbon",
    "name": "University of Lisbon",
    "country": "Europe",
    "city": "Lisbon, Португалия",
    "qs": 360,
    "gpa": "—",
    "english": "Аттестат + конкурсные экзамены; английский/португальский",
    "aid": "Ограниченно: вуз и Camões",
    "tuition": "~€3–7k/год (non-EU)",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-09-01"
      }
    ],
    "programs": [
      "Engineering",
      "Sciences",
      "Law"
    ],
    "overview": "Крупнейший университет Португалии; сильные науки и инженерия.",
    "strategy": "Недорогой средиземноморский вариант."
  },
  {
    "id": "university-of-tartu",
    "name": "University of Tartu",
    "country": "Europe",
    "city": "Tartu, Эстония",
    "qs": 350,
    "gpa": "—",
    "english": "Аттестат + английский (IELTS 6.0+)",
    "aid": "Dora Plus, merit-стипендии вуза",
    "tuition": "~€3–6k/год",
    "deadlines": [
      {
        "label": "Deadline",
        "date": "2027-03-15"
      }
    ],
    "programs": [
      "Computer Science",
      "Sciences",
      "Medicine"
    ],
    "overview": "Старейший и ведущий университет Эстонии; сильные IT и науки.",
    "strategy": "Низкие расходы и сильные IT."
  },
  {
    "id": "nazarbayev-university",
    "name": "Nazarbayev University (NU)",
    "country": "Kazakhstan",
    "city": "Astana",
    "qs": 400,
    "gpa": "—",
    "english": "NUFYP или IB/A-level/SAT; IELTS 6.0+; собеседование/тест",
    "aid": "Гранты NU (до 100% + стипендия) по конкурсу",
    "tuition": "~KZT 4–6M/год",
    "deadlines": [],
    "programs": [
      "Engineering",
      "CS",
      "Medicine",
      "Business",
      "Public Policy"
    ],
    "overview": "Ведущий исследовательский вуз Казахстана с англоязычным обучением и партнёрами (Duke, UCL, Wisconsin).",
    "strategy": "Лучший выбор внутри КЗ: готовьте SAT/IELTS и проекты, конкурс большой."
  },
  {
    "id": "al-farabi-kazakh-national-university",
    "name": "Al-Farabi Kazakh National University (KazNU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 160,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 900k–1.8M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Biology",
      "Physics",
      "Law",
      "International Relations",
      "IT"
    ],
    "overview": "Старейший и самый высокий по QS вуз Казахстана; сильные естественные науки, право, журналистика.",
    "strategy": "Высокий балл ЕНТ открывает грант; есть программы на англ. и двойные дипломы."
  },
  {
    "id": "l-n-gumilyov-eurasian-national-university",
    "name": "L.N. Gumilyov Eurasian National University (ENU)",
    "country": "Kazakhstan",
    "city": "Astana",
    "qs": 450,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 900k–1.8M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "IT",
      "Physics",
      "International Relations",
      "Law"
    ],
    "overview": "Крупный классический университет столицы; сильные IT, международные отношения, физика.",
    "strategy": "Хороший вариант в Астане; смотрите двойные дипломы."
  },
  {
    "id": "satbayev-university",
    "name": "Satbayev University",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 650,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1.2–1.8M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Petroleum Engineering",
      "Mining",
      "Engineering",
      "IT"
    ],
    "overview": "Ведущий технический вуз Казахстана: горное дело, нефтегаз, металлургия, инженерия.",
    "strategy": "Сильный вариант для энергетики и инженерии; много грантов."
  },
  {
    "id": "kazakh-british-technical-university",
    "name": "Kazakh-British Technical University (KBTU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 700,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5 (часть программ — англ.)",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 2.5–3.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "IT",
      "Petroleum Engineering",
      "Finance",
      "Math"
    ],
    "overview": "Технический вуз с британской моделью: IT, нефтегаз, финансы; сильные связи с индустрией.",
    "strategy": "Для IT и нефтегаза; сильный английский помогает."
  },
  {
    "id": "kimep-university",
    "name": "KIMEP University",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "—",
    "aid": "Merit-гранты KIMEP по результатам тестов",
    "tuition": "~KZT 3.5–5M/год",
    "deadlines": [
      {
        "label": "Round",
        "date": "2027-08-01"
      }
    ],
    "programs": [
      "Business",
      "Economics",
      "Law",
      "International Relations"
    ],
    "overview": "Первый вуз Центральной Азии с американской моделью: бизнес, экономика, право, IR.",
    "strategy": "Лучший вариант для бизнеса на английском; готовьте SAT/IELTS.",
    "sat": "или внутренний тест; IELTS 6.0+; англ. программы"
  },
  {
    "id": "narxoz-university",
    "name": "Narxoz University",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1.5–2.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Economics",
      "Finance",
      "Management",
      "Digital Technologies"
    ],
    "overview": "Экономика, финансы и менеджмент; много программ на англ. и двойных дипломов.",
    "strategy": "Бизнес-профиль; хорош для двойных дипломов."
  },
  {
    "id": "astana-it-university",
    "name": "Astana IT University (AITU)",
    "country": "Kazakhstan",
    "city": "Astana",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1.3–2.0M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Software Engineering",
      "Cybersecurity",
      "Data Science"
    ],
    "overview": "Современный IT-вуз в технопарке Astana Hub; образовательные программы с индустрией.",
    "strategy": "Подходит для IT; портфолио/олимпиады помогают."
  },
  {
    "id": "suleyman-demirel-university",
    "name": "Suleyman Demirel University (SDU)",
    "country": "Kazakhstan",
    "city": "Kaskelen (Almaty)",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5; IELTS для англ.",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1.8–2.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "CS",
      "Engineering",
      "Business",
      "Philology"
    ],
    "overview": "Частный университет с англоязычным обучением в IT, инженерии и бизнесе.",
    "strategy": "Хороший частный вариант с англ. программами."
  },
  {
    "id": "almaty-management-university",
    "name": "Almaty Management University (AlmaU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "—",
    "aid": "Merit-гранты AlmaU",
    "tuition": "~KZT 2–3.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Business",
      "Management",
      "Finance",
      "Marketing"
    ],
    "overview": "Бизнес-школа с международными аккредитациями (AACSB, EFMD).",
    "strategy": "Бизнес-профиль; сильные связи с компаниями.",
    "unt": "тест; IELTS"
  },
  {
    "id": "kazakh-german-university",
    "name": "Kazakh-German University (DKU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + немецкий/английский (по программе); тест",
    "aid": "DAAD и вузовские стипендии",
    "tuition": "~KZT 1.5–2.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Engineering",
      "IT",
      "Economics"
    ],
    "overview": "Университет с немецкой моделью; двойные дипломы и обмены с германскими вузами.",
    "strategy": "Хорошо для пути в Германию; учите немецкий."
  },
  {
    "id": "caspian-university",
    "name": "Caspian University",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1–2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Law",
      "Management",
      "IT"
    ],
    "overview": "Частный университет с акцентом на право, менеджмент и IT.",
    "strategy": "Универсальный вариант."
  },
  {
    "id": "turan-university",
    "name": "Turan University",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1–2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Economics",
      "Law",
      "IT",
      "Journalism"
    ],
    "overview": "Частный университет: экономика, право, IT, журналистика.",
    "strategy": "Универсальный вариант."
  },
  {
    "id": "international-information-technology-university",
    "name": "International Information Technology University (IITU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 1.3–2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "IT",
      "Cybersecurity",
      "Software Engineering"
    ],
    "overview": "Специализированный IT-университет с англоязычными программами.",
    "strategy": "Для IT; олимпиады и портфолио."
  },
  {
    "id": "abai-kazakh-national-pedagogical-university",
    "name": "Abai Kazakh National Pedagogical University",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 700k–1.2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Pedagogy",
      "Philology",
      "Physics",
      "Math"
    ],
    "overview": "Крупнейший педагогический вуз страны.",
    "strategy": "Для будущих преподавателей; много грантов."
  },
  {
    "id": "s-seifullin-kazakh-agrotechnical-research-university",
    "name": "S. Seifullin Kazakh Agrotechnical Research University",
    "country": "Kazakhstan",
    "city": "Astana",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Agronomy",
      "Engineering",
      "Veterinary Medicine"
    ],
    "overview": "Главный аграрный и технический вуз Астаны.",
    "strategy": "Для агро- и технических специальностей."
  },
  {
    "id": "e-a-buketov-karaganda-university",
    "name": "E.A. Buketov Karaganda University",
    "country": "Kazakhstan",
    "city": "Karaganda",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Physics",
      "Chemistry",
      "Law",
      "Education"
    ],
    "overview": "Классический университет Центрального Казахстана; сильные физика, химия, право.",
    "strategy": "Хорошо при высоком ЕНТ: гранты."
  },
  {
    "id": "abylkas-saginov-karaganda-technical-university",
    "name": "Abylkas Saginov Karaganda Technical University",
    "country": "Kazakhstan",
    "city": "Karaganda",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Mining",
      "Engineering",
      "Automation"
    ],
    "overview": "Технический вуз для горной, металлургической и инженерной отраслей.",
    "strategy": "Для инженерии; много грантов."
  },
  {
    "id": "d-serikbayev-east-kazakhstan-technical-university",
    "name": "D. Serikbayev East Kazakhstan Technical University",
    "country": "Kazakhstan",
    "city": "Ust-Kamenogorsk",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Engineering",
      "Metallurgy",
      "IT"
    ],
    "overview": "Технический университет Восточного Казахстана; связь с металлургической отраслью.",
    "strategy": "Для инженерных специальностей."
  },
  {
    "id": "toraighyrov-university",
    "name": "Toraighyrov University",
    "country": "Kazakhstan",
    "city": "Pavlodar",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Energy",
      "Engineering",
      "Education"
    ],
    "overview": "Крупный университет Павлодара; энергетика, инженерия, педагогика.",
    "strategy": "Региональный вариант с грантами."
  },
  {
    "id": "k-zhubanov-aktobe-regional-university",
    "name": "K. Zhubanov Aktobe Regional University",
    "country": "Kazakhstan",
    "city": "Aktobe",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 700k–1.2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Education",
      "Natural Sciences",
      "Engineering"
    ],
    "overview": "Главный университет Актюбинской области; естественные науки, педагогика.",
    "strategy": "Региональный вариант."
  },
  {
    "id": "s-utebayev-atyrau-university-of-oil-and-gas",
    "name": "S. Utebayev Atyrau University of Oil and Gas",
    "country": "Kazakhstan",
    "city": "Atyrau",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Petroleum Engineering",
      "Oil & Gas",
      "Ecology"
    ],
    "overview": "Профильный вуз для нефтегазовой отрасли; сильные связи с компаниями региона.",
    "strategy": "Прямая дорога в нефтегазовые компании региона."
  },
  {
    "id": "sh-yessenov-caspian-university-of-technologies-and-engineering",
    "name": "Sh. Yessenov Caspian University of Technologies and Engineering",
    "country": "Kazakhstan",
    "city": "Aktau",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Petroleum Engineering",
      "Marine Engineering",
      "Energy"
    ],
    "overview": "Технический университет Каспийского региона: нефтегаз, морское дело, энергетика.",
    "strategy": "Связь с нефтегазом и морской индустрией."
  },
  {
    "id": "m-auezov-south-kazakhstan-university",
    "name": "M. Auezov South Kazakhstan University",
    "country": "Kazakhstan",
    "city": "Shymkent",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 700k–1.2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Engineering",
      "Chemistry",
      "Education"
    ],
    "overview": "Крупный университет юга страны; инженерия, химия, педагогика.",
    "strategy": "Региональный вариант."
  },
  {
    "id": "korkyt-ata-kyzylorda-university",
    "name": "Korkyt Ata Kyzylorda University",
    "country": "Kazakhstan",
    "city": "Kyzylorda",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 700k–1.2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Education",
      "Engineering",
      "Humanities"
    ],
    "overview": "Региональный университет с широким спектром программ.",
    "strategy": "Региональный вариант."
  },
  {
    "id": "asfendiyarov-kazakh-national-medical-university",
    "name": "Asfendiyarov Kazakh National Medical University (KazNMU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "—",
    "aid": "Гос. гранты (по баллам), образовательный кредит",
    "tuition": "~KZT 1.5–2.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Medicine",
      "Dentistry",
      "Pharmacy",
      "Public Health"
    ],
    "overview": "Ведущий медицинский вуз Казахстана с долгой историей.",
    "strategy": "Высокий ЕНТ и сильная биология/химия.",
    "unt": "(высокие пороги по биологии/химии); тест"
  },
  {
    "id": "astana-medical-university",
    "name": "Astana Medical University",
    "country": "Kazakhstan",
    "city": "Astana",
    "qs": 1200,
    "gpa": "—",
    "english": "—",
    "aid": "Гос. гранты (по баллам), образовательный кредит",
    "tuition": "~KZT 1.5–2.5M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Medicine",
      "Dentistry",
      "Nursing",
      "Pharmacy"
    ],
    "overview": "Ведущий медицинский университет столицы.",
    "strategy": "Высокий ЕНТ и сильная биология/химия.",
    "unt": "(высокие пороги по биологии/химии); тест"
  },
  {
    "id": "maqsut-narikbayev-university",
    "name": "Maqsut Narikbayev University (MNU)",
    "country": "Kazakhstan",
    "city": "Astana",
    "qs": 1200,
    "gpa": "—",
    "english": "—",
    "aid": "Merit-гранты вуза",
    "tuition": "~KZT 2–3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Law",
      "International Law",
      "Economics"
    ],
    "overview": "Ведущий юридический вуз страны; обучение на английском по ряду программ.",
    "strategy": "Для будущих юристов; готовьте английский.",
    "unt": "тест; IELTS для англ. программ"
  },
  {
    "id": "kozybayev-north-kazakhstan-university",
    "name": "Kozybayev North Kazakhstan University",
    "country": "Kazakhstan",
    "city": "Petropavlovsk",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 700k–1.2M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Education",
      "Engineering",
      "Agriculture"
    ],
    "overview": "Региональный университет Северного Казахстана.",
    "strategy": "Региональный вариант."
  },
  {
    "id": "kazakh-national-agrarian-research-university",
    "name": "Kazakh National Agrarian Research University (KazNARU)",
    "country": "Kazakhstan",
    "city": "Almaty",
    "qs": 1200,
    "gpa": "—",
    "english": "Аттестат + ЕНТ (балл не ниже порога специальности); для англ. программ — IELTS 5.5–6.5",
    "aid": "Гос. грант по баллам ЕНТ (бесплатное обучение), образовательный кредит, внутренние скидки",
    "tuition": "~KZT 800k–1.3M/год",
    "deadlines": [
      {
        "label": "Приём документов",
        "date": "2027-07-25"
      }
    ],
    "programs": [
      "Agronomy",
      "Veterinary Medicine",
      "Forestry",
      "Ecology"
    ],
    "overview": "Главный аграрный научный университет страны.",
    "strategy": "Для агро-специальностей."
  }
];

export const UNIVERSITIES: University[] = RAW.map((u, i) => ({
  ...u,
  id: u.id ?? u.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  photos: photos(i),
}));

export const COUNTRY_LIST: Country[] = ["USA", "Hong Kong", "Kazakhstan", "Europe"];
