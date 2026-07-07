export type Locale = "en" | "ru" | "tg";

export const locales: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
  { id: "tg", label: "TG" },
];

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    work: string;
    contact: string;
    cta: string;
  };
  footer: {
    tagline: string;
    siteCol: string;
    followCol: string;
    rights: string;
    builtWith: string;
  };
  settings: {
    title: string;
    theme: string;
    light: string;
    dark: string;
    system: string;
    language: string;
    accent: string;
    customColor: string;
    font: string;
    fontSans: string;
    fontSerif: string;
    fontMono: string;
  };
  home: {
    badge: string;
    h1Start: string;
    h1Highlight: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsLabels: string[];
    featuresTitle: string;
    featuresSub: string;
    features: { title: string; desc: string }[];
    processTitle: string;
    processSub: string;
    steps: { title: string; desc: string }[];
    testimonialsTitle: string;
    testimonials: { quote: string; name: string; role: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
  };
  about: {
    kicker: string;
    h1: string;
    sub: string;
    storyKicker: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
    timelineTitle: string;
    timeline: { year: string; text: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
  };
  work: {
    kicker: string;
    h1: string;
    sub: string;
    servicesTitle: string;
    services: { title: string; desc: string }[];
    processTitle: string;
    process: { title: string; desc: string }[];
    portfolioTitle: string;
    projects: { name: string; tag: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
  };
  contact: {
    kicker: string;
    h1: string;
    sub: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      budget: string;
      budgetOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      sentTitle: string;
      sentDesc: string;
    };
    info: { label: string; value: string }[];
    callout: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaSub: string;
  };
}

const en: Dictionary = {
  nav: { home: "Home", about: "About", work: "Work", contact: "Contact", cta: "Start a project" },
  footer: {
    tagline:
      "A small studio helping teams design and ship products that feel obvious in hindsight.",
    siteCol: "Site",
    followCol: "Follow",
    rights: "Lumen Studio. All rights reserved.",
    builtWith: "Designed & built with Next.js",
  },
  settings: {
    title: "Settings",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    language: "Language",
    accent: "Accent color",
    customColor: "Custom",
    font: "Font",
    fontSans: "Sans",
    fontSerif: "Serif",
    fontMono: "Mono",
  },
  home: {
    badge: "Now booking projects for Q3",
    h1Start: "Product design that makes people ",
    h1Highlight: "want to use it",
    sub: "Lumen is a small studio that partners with teams to design and ship digital products — from first sketch to production.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    statsLabels: ["Projects shipped", "Happy clients", "Years in business", "Client retention"],
    featuresTitle: "Everything you need, nothing you don't",
    featuresSub: "We keep the process lean so more of the budget goes into the product itself.",
    features: [
      { title: "Strategy first", desc: "We start with the problem, not the pixels — clear goals before any screen gets drawn." },
      { title: "Design systems", desc: "Reusable components and tokens so your product stays consistent as it grows." },
      { title: "Rapid prototyping", desc: "Clickable prototypes in days, not weeks, so you can test ideas before building them." },
      { title: "Engineering handoff", desc: "Specs, assets, and docs your engineers actually want to receive." },
    ],
    processTitle: "How we work",
    processSub: "A simple four-step loop we repeat until the product is right.",
    steps: [
      { title: "Discover", desc: "Workshops and research to align on the real problem." },
      { title: "Design", desc: "Wireframes, prototypes, and visual design in tight loops." },
      { title: "Build", desc: "Production-ready components handed off to your team." },
      { title: "Refine", desc: "We watch how it's used and iterate with real data." },
    ],
    testimonialsTitle: "Don't just take our word for it",
    testimonials: [
      { quote: "Lumen took a messy internal tool and turned it into something our whole team actually enjoys using.", name: "Amira Chen", role: "VP Product, Northwind" },
      { quote: "The fastest, clearest design process we've run. Every deliverable was ready for engineering the same day.", name: "Daniel Kruger", role: "CTO, Fieldbase" },
      { quote: "They didn't just make it prettier — they made it make sense. Support tickets dropped 30% after launch.", name: "Priya Nair", role: "Founder, Loop" },
    ],
    ctaTitle: "Got a product idea worth building well?",
    ctaSub: "Let's talk about it — no pitch decks required.",
    ctaButton: "Get in touch",
  },
  about: {
    kicker: "About us",
    h1: "We're a studio that finishes what it starts",
    sub: "Lumen exists because too many good products die in a slide deck. We keep the team small so every project gets real attention, from first sketch to shipped feature.",
    storyKicker: "Our story",
    storyTitle: "Started at a kitchen table, still run that way",
    storyP1: "Lumen started as a two-person side project: a designer and an engineer who kept getting asked to fix products that looked fine but didn't work. Nine years later the team is bigger, but the approach hasn't changed — understand the problem deeply, prototype fast, and stay involved until it ships.",
    storyP2: "We turn down more work than we take, on purpose. It's the only way to keep every engagement this hands-on.",
    valuesTitle: "What we hold ourselves to",
    values: [
      { title: "Clarity over cleverness", desc: "If a user has to think twice, we haven't finished the job." },
      { title: "Small, senior team", desc: "You work directly with the people doing the design, always." },
      { title: "Show, don't tell", desc: "We prototype early so decisions are made on real interactions." },
      { title: "Own the outcome", desc: "We measure success by what ships and what it changes, not hours logged." },
    ],
    timelineTitle: "Nine years, one focus",
    timeline: [
      { year: "2017", text: "Founded by two designers tired of decks nobody read." },
      { year: "2019", text: "Grew to a five-person studio working with early-stage startups." },
      { year: "2021", text: "Shifted focus entirely to product design systems and handoff." },
      { year: "2023", text: "Opened a small engineering wing to ship, not just design." },
      { year: "2026", text: "120+ projects later, still a deliberately small team." },
    ],
    ctaTitle: "Like the sound of that?",
    ctaSub: "Let's see if we're a fit for your next project.",
    ctaButton: "Say hello",
  },
  work: {
    kicker: "Work",
    h1: "What we do, and what we've made with it",
    sub: "From a single audit to a full product build — here's the range of work we take on, and a few recent projects.",
    servicesTitle: "Services",
    services: [
      { title: "Product design", desc: "End-to-end UX and UI for web and mobile products, from research to final pixel." },
      { title: "Design systems", desc: "Component libraries and tokens that keep design and engineering in sync." },
      { title: "Brand & identity", desc: "Logo, type, and visual language that holds up across every surface." },
      { title: "Prototyping", desc: "Interactive prototypes for user testing and stakeholder buy-in." },
      { title: "Front-end build", desc: "Production-ready components in React, handed off with docs." },
      { title: "Design audits", desc: "A focused review of an existing product with a prioritized fix list." },
    ],
    processTitle: "How a project runs",
    process: [
      { title: "Kickoff", desc: "A working session to define scope, goals, and success metrics." },
      { title: "Exploration", desc: "Multiple directions explored quickly, narrowed with real feedback." },
      { title: "Design", desc: "High-fidelity screens and a prototype you can click through." },
      { title: "Delivery", desc: "Specs, assets, and components ready for your engineers." },
    ],
    portfolioTitle: "Selected projects",
    projects: [
      { name: "Northwind", tag: "Fintech dashboard" },
      { name: "Fieldbase", tag: "Field ops platform" },
      { name: "Loop", tag: "Community app" },
      { name: "Ardent", tag: "E-commerce redesign" },
      { name: "Harbor", tag: "Logistics tool" },
      { name: "Kite", tag: "Design system" },
    ],
    ctaTitle: "See your project up here next?",
    ctaSub: "Tell us what you're building — we'll tell you if we can help.",
    ctaButton: "Start a project",
  },
  contact: {
    kicker: "Contact",
    h1: "Let's talk about your project",
    sub: "Tell us a bit about what you're building. We reply to every message ourselves, usually within a day.",
    form: {
      name: "Name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "jane@company.com",
      budget: "Budget range",
      budgetOptions: ["Under $10k", "$10k – $30k", "$30k – $75k", "$75k+"],
      message: "Project details",
      messagePlaceholder: "Tell us a bit about what you're building...",
      submit: "Send message",
      submitting: "Sending...",
      sentTitle: "Message sent",
      sentDesc: "Thanks for reaching out — we'll reply within one business day.",
    },
    info: [
      { label: "Email", value: "hello@lumen.studio" },
      { label: "Phone", value: "+1 (555) 012-3456" },
      { label: "Studio", value: "Brooklyn, NY — by appointment" },
    ],
    callout: "Prefer a call? Book 20 minutes with our team and skip the form entirely.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "How long does a typical project take?", a: "Most engagements run 4–10 weeks depending on scope, from a focused audit to a full product design build." },
      { q: "Do you also build the front-end?", a: "Yes — we have a small engineering wing that can hand off production-ready React components alongside the designs." },
      { q: "What does the pricing look like?", a: "We scope fixed-price engagements after the kickoff call so you know the cost upfront, no hourly surprises." },
      { q: "Can you work with our existing design system?", a: "Absolutely. We regularly extend existing systems rather than starting from scratch." },
    ],
    ctaTitle: "Still deciding?",
    ctaSub: "No pressure — reach out whenever you're ready. We'll be here.",
  },
};

const ru: Dictionary = {
  nav: { home: "Главная", about: "О нас", work: "Работы", contact: "Контакты", cta: "Начать проект" },
  footer: {
    tagline: "Небольшая студия, которая помогает командам проектировать и выпускать продукты, кажущиеся очевидными только задним числом.",
    siteCol: "Сайт",
    followCol: "Мы в сети",
    rights: "Lumen Studio. Все права защищены.",
    builtWith: "Дизайн и разработка на Next.js",
  },
  settings: {
    title: "Настройки",
    theme: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    system: "Системная",
    language: "Язык",
    accent: "Акцентный цвет",
    customColor: "Свой цвет",
    font: "Шрифт",
    fontSans: "Обычный",
    fontSerif: "С засечками",
    fontMono: "Моноширинный",
  },
  home: {
    badge: "Сейчас набираем проекты на III квартал",
    h1Start: "Дизайн продукта, который заставляет людей ",
    h1Highlight: "захотеть им пользоваться",
    sub: "Lumen — небольшая студия, которая вместе с командами проектирует и выпускает цифровые продукты — от первого наброска до продакшена.",
    ctaPrimary: "Начать проект",
    ctaSecondary: "Смотреть работы",
    statsLabels: ["Проектов выпущено", "Довольных клиентов", "Лет на рынке", "Удержание клиентов"],
    featuresTitle: "Всё, что нужно, и ничего лишнего",
    featuresSub: "Мы держим процесс компактным, чтобы бюджет шёл на сам продукт.",
    features: [
      { title: "Сначала стратегия", desc: "Начинаем с проблемы, а не с пикселей — ясные цели прежде, чем появится хоть один экран." },
      { title: "Дизайн-системы", desc: "Переиспользуемые компоненты и токены, чтобы продукт оставался последовательным по мере роста." },
      { title: "Быстрое прототипирование", desc: "Кликабельные прототипы за дни, а не недели, чтобы проверять идеи до разработки." },
      { title: "Передача разработчикам", desc: "Спецификации, ассеты и документация, которые инженеры реально хотят получить." },
    ],
    processTitle: "Как мы работаем",
    processSub: "Простой цикл из четырёх шагов, который мы повторяем, пока продукт не станет правильным.",
    steps: [
      { title: "Исследование", desc: "Воркшопы и research, чтобы сойтись на реальной проблеме." },
      { title: "Дизайн", desc: "Вайрфреймы, прототипы и визуальный дизайн в быстрых итерациях." },
      { title: "Разработка", desc: "Готовые к продакшену компоненты передаются вашей команде." },
      { title: "Доработка", desc: "Смотрим, как продукт используют, и дорабатываем на реальных данных." },
    ],
    testimonialsTitle: "Не верьте нам на слово",
    testimonials: [
      { quote: "Lumen превратили наш запутанный внутренний инструмент в то, чем вся команда пользуется с удовольствием.", name: "Амира Чен", role: "VP Product, Northwind" },
      { quote: "Самый быстрый и понятный процесс дизайна из всех, что мы проходили. Каждая передача была готова для разработки в тот же день.", name: "Дэниел Крюгер", role: "CTO, Fieldbase" },
      { quote: "Они не просто сделали красивее — они сделали понятнее. После запуска количество обращений в поддержку упало на 30%.", name: "Прия Наир", role: "Основатель, Loop" },
    ],
    ctaTitle: "Есть идея продукта, которую стоит сделать хорошо?",
    ctaSub: "Давайте обсудим — презентации не нужны.",
    ctaButton: "Связаться с нами",
  },
  about: {
    kicker: "О нас",
    h1: "Мы студия, которая доводит начатое до конца",
    sub: "Lumen существует, потому что слишком много хороших продуктов умирает в презентации. Мы держим команду маленькой, чтобы каждый проект получал настоящее внимание — от первого наброска до фичи в продакшене.",
    storyKicker: "Наша история",
    storyTitle: "Начали за кухонным столом — и до сих пор так работаем",
    storyP1: "Lumen начиналась как проект на двоих: дизайнер и инженер, которых постоянно просили починить продукты, выглядевшие неплохо, но не работавшие. Девять лет спустя команда выросла, но подход не изменился — глубоко разобраться в проблеме, быстро прототипировать и оставаться вовлечёнными до самого запуска.",
    storyP2: "Мы намеренно отказываемся от большего числа проектов, чем берём. Это единственный способ оставаться настолько вовлечёнными в каждый из них.",
    valuesTitle: "На что мы себя равняем",
    values: [
      { title: "Ясность важнее хитроумности", desc: "Если пользователю приходится думать дважды — значит, работа ещё не закончена." },
      { title: "Маленькая, опытная команда", desc: "Вы работаете напрямую с теми, кто делает дизайн, — всегда." },
      { title: "Показывать, а не рассказывать", desc: "Мы прототипируем рано, чтобы решения принимались на основе реальных взаимодействий." },
      { title: "Отвечаем за результат", desc: "Мы измеряем успех тем, что выходит в свет и что это меняет, а не потраченными часами." },
    ],
    timelineTitle: "Девять лет, один фокус",
    timeline: [
      { year: "2017", text: "Основана двумя дизайнерами, уставшими от презентаций, которые никто не читает." },
      { year: "2019", text: "Выросли до команды из пяти человек, работающей с ранними стартапами." },
      { year: "2021", text: "Полностью сосредоточились на дизайн-системах и передаче в разработку." },
      { year: "2023", text: "Открыли небольшое инженерное направление, чтобы не только проектировать, но и выпускать." },
      { year: "2026", text: "120+ проектов спустя мы всё ещё осознанно маленькая команда." },
    ],
    ctaTitle: "Похоже на то, что вам нужно?",
    ctaSub: "Давайте посмотрим, подходим ли мы для вашего следующего проекта.",
    ctaButton: "Написать нам",
  },
  work: {
    kicker: "Работы",
    h1: "Чем мы занимаемся и что уже сделали",
    sub: "От разового аудита до полной разработки продукта — вот диапазон нашей работы и несколько недавних проектов.",
    servicesTitle: "Услуги",
    services: [
      { title: "Дизайн продукта", desc: "Полный цикл UX/UI для веб- и мобильных продуктов — от исследования до финального пикселя." },
      { title: "Дизайн-системы", desc: "Библиотеки компонентов и токены, которые держат дизайн и разработку в синхроне." },
      { title: "Бренд и айдентика", desc: "Логотип, шрифты и визуальный язык, устойчивые на любых носителях." },
      { title: "Прототипирование", desc: "Интерактивные прототипы для тестирования с пользователями и защиты перед стейкхолдерами." },
      { title: "Frontend-разработка", desc: "Готовые к продакшену компоненты на React с документацией." },
      { title: "Дизайн-аудит", desc: "Целевой обзор существующего продукта со списком приоритетных доработок." },
    ],
    processTitle: "Как проходит проект",
    process: [
      { title: "Старт", desc: "Рабочая сессия для определения объёма, целей и метрик успеха." },
      { title: "Поиск направления", desc: "Быстро прорабатываем несколько направлений, сужая их по реальной обратной связи." },
      { title: "Дизайн", desc: "Экраны высокой детализации и прототип, который можно прокликать." },
      { title: "Передача", desc: "Спецификации, ассеты и компоненты, готовые для ваших инженеров." },
    ],
    portfolioTitle: "Избранные проекты",
    projects: [
      { name: "Northwind", tag: "Финтех-дашборд" },
      { name: "Fieldbase", tag: "Платформа для полевых работ" },
      { name: "Loop", tag: "Приложение для сообщества" },
      { name: "Ardent", tag: "Редизайн e-commerce" },
      { name: "Harbor", tag: "Логистический инструмент" },
      { name: "Kite", tag: "Дизайн-система" },
    ],
    ctaTitle: "Хотите увидеть свой проект здесь?",
    ctaSub: "Расскажите, что вы создаёте — мы скажем, сможем ли помочь.",
    ctaButton: "Начать проект",
  },
  contact: {
    kicker: "Контакты",
    h1: "Давайте обсудим ваш проект",
    sub: "Расскажите немного о том, что вы создаёте. Мы отвечаем на каждое сообщение лично, обычно в течение дня.",
    form: {
      name: "Имя",
      namePlaceholder: "Иван Иванов",
      email: "Email",
      emailPlaceholder: "ivan@company.com",
      budget: "Бюджет",
      budgetOptions: ["До $10k", "$10k – $30k", "$30k – $75k", "$75k+"],
      message: "Детали проекта",
      messagePlaceholder: "Расскажите немного о том, что вы создаёте...",
      submit: "Отправить сообщение",
      submitting: "Отправка...",
      sentTitle: "Сообщение отправлено",
      sentDesc: "Спасибо, что написали — мы ответим в течение одного рабочего дня.",
    },
    info: [
      { label: "Email", value: "hello@lumen.studio" },
      { label: "Телефон", value: "+1 (555) 012-3456" },
      { label: "Студия", value: "Бруклин, Нью-Йорк — по предварительной записи" },
    ],
    callout: "Предпочитаете звонок? Забронируйте 20 минут с нашей командой и пропустите форму.",
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      { q: "Сколько длится типичный проект?", a: "Большинство проектов занимают 4–10 недель в зависимости от объёма — от точечного аудита до полного дизайна продукта." },
      { q: "Вы также занимаетесь фронтендом?", a: "Да — у нас есть небольшая инженерная команда, которая может передать готовые к продакшену компоненты на React вместе с дизайном." },
      { q: "Как выглядит ценообразование?", a: "Мы фиксируем стоимость проекта после звонка-старта, чтобы вы знали цену заранее, без почасовых сюрпризов." },
      { q: "Можете работать с нашей существующей дизайн-системой?", a: "Разумеется. Мы регулярно расширяем существующие системы, а не начинаем с нуля." },
    ],
    ctaTitle: "Всё ещё думаете?",
    ctaSub: "Никакого давления — напишите, когда будете готовы. Мы будем на связи.",
  },
};

const tg: Dictionary = {
  nav: { home: "Асосӣ", about: "Дар бораи мо", work: "Корҳо", contact: "Тамос", cta: "Оғози лоиҳа" },
  footer: {
    tagline: "Студияи хурде, ки ба дастаҳо кӯмак мекунад, то маҳсулоте тарҳрезӣ ва ба бозор бароранд, ки баъдтар оддӣ ба назар мерасад.",
    siteCol: "Сомона",
    followCol: "Пайгирӣ кунед",
    rights: "Lumen Studio. Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    builtWith: "Тарҳрезӣ ва сохта шуда бо Next.js",
  },
  settings: {
    title: "Танзимот",
    theme: "Мавзӯъ",
    light: "Равшан",
    dark: "Торик",
    system: "Системавӣ",
    language: "Забон",
    accent: "Ранги акцент",
    customColor: "Ранги дилхоҳ",
    font: "Шрифт",
    fontSans: "Оддӣ",
    fontSerif: "Серифдор",
    fontMono: "Якхела (моно)",
  },
  home: {
    badge: "Ҳоло барои семоҳаи 3 лоиҳа қабул мекунем",
    h1Start: "Тарҳрезии маҳсуле, ки одамонро водор мекунад ",
    h1Highlight: "бихоҳанд онро истифода баранд",
    sub: "Lumen студияи хурдест, ки бо дастаҳо ҳамкорӣ мекунад, то маҳсулоти рақамӣ тарҳрезӣ ва ба бозор бароранд — аз нахустин тарҳ то истеҳсолот.",
    ctaPrimary: "Оғози лоиҳа",
    ctaSecondary: "Корҳои моро бинед",
    statsLabels: ["Лоиҳаҳои иҷрошуда", "Мизоҷони қаноатманд", "Соли фаъолият", "Нигоҳдории мизоҷон"],
    featuresTitle: "Ҳама чизи лозима, ҳеҷ чизи барзиёд",
    featuresSub: "Мо равандро сода нигоҳ медорем, то буҷа бештар ба худи маҳсулот равона шавад.",
    features: [
      { title: "Аввал стратегия", desc: "Мо аз мушкилот оғоз мекунем, на аз пикселҳо — ҳадафҳои равшан пеш аз кашидани ҳар экран." },
      { title: "Системаҳои дизайн", desc: "Компонентҳо ва токенҳои такроршаванда, то маҳсулоти шумо ҳангоми рушд якхела бимонад." },
      { title: "Прототипсозии зуд", desc: "Прототипҳои интерактивӣ дар зарфи рӯзҳо, на ҳафтаҳо, то ғояҳо пеш аз сохтан санҷида шаванд." },
      { title: "Супоридан ба муҳандисон", desc: "Мушаххасот, файлҳо ва ҳуҷҷатҳое, ки муҳандисони шумо воқеан мехоҳанд гиранд." },
    ],
    processTitle: "Мо чӣ гуна кор мекунем",
    processSub: "Як давраи содаи чорқадама, ки то дуруст шудани маҳсулот такрор мекунем.",
    steps: [
      { title: "Омӯзиш", desc: "Семинар ва тадқиқот барои муайян кардани мушкилоти воқеӣ." },
      { title: "Дизайн", desc: "Вайрфрейм, прототип ва дизайни визуалӣ дар давраҳои зуд." },
      { title: "Сохтан", desc: "Компонентҳои омодаи истеҳсолот ба дастаи шумо супорида мешаванд." },
      { title: "Такмил", desc: "Мо мебинем маҳсулот чӣ гуна истифода мешавад ва бо маълумоти воқеӣ такмил медиҳем." },
    ],
    testimonialsTitle: "Танҳо ба гапи мо бовар накунед",
    testimonials: [
      { quote: "Lumen абзори дохилии печидаи моро ба чизе табдил дод, ки тамоми дастаамон воқеан аз истифодаи он лаззат мебарад.", name: "Амира Чен", role: "VP Маҳсулот, Northwind" },
      { quote: "Тезтарин ва равшантарин раванди дизайне, ки то ҳол доштем. Ҳар супориш ҳамон рӯз барои муҳандисӣ омода буд.", name: "Дэниел Крюгер", role: "CTO, Fieldbase" },
      { quote: "Онҳо на танҳо зеботар карданд — балки фаҳмотар карданд. Пас аз оғоз шумораи дархостҳои дастгирӣ 30% кам шуд.", name: "Прия Наир", role: "Асосгузор, Loop" },
    ],
    ctaTitle: "Ғояи маҳсулоте доред, ки арзиши хуб сохтанро дорад?",
    ctaSub: "Биёед дар бораи он гап занем — ба презентатсия ниёз нест.",
    ctaButton: "Тамос гиред",
  },
  about: {
    kicker: "Дар бораи мо",
    h1: "Мо студияе ҳастем, ки кори оғозкардаашро ба анҷом мерасонад",
    sub: "Lumen вуҷуд дорад, зеро бисёр маҳсулоти хуб дар слайдҳо мемиранд. Мо дастаро хурд нигоҳ медорем, то ҳар лоиҳа таваҷҷуҳи воқеӣ гирад — аз нахустин тарҳ то фичаи ба бозор баромада.",
    storyKicker: "Таърихи мо",
    storyTitle: "Аз паси мизи ошхона оғоз шуд — ва ҳанӯз ҳамин тавр кор мекунем",
    storyP1: "Lumen ҳамчун лоиҳаи дуназарӣ оғоз шуд: тарроҳ ва муҳандисе, ки доим аз онҳо мехостанд маҳсулотеро ислоҳ кунанд, ки зоҳиран хуб буд, аммо кор намекард. Нӯҳ сол баъд даста калонтар шуд, аммо равиш тағйир наёфт — фаҳмиши амиқи мушкилот, прототипсозии зуд ва мондан то лаҳзаи ба бозор баромадан.",
    storyP2: "Мо қасдан аз бештар лоиҳаҳо даст мекашем, назар ба он чи қабул мекунем. Ин ягона роҳест, ки то ин андоза дар ҳар лоиҳа даргир бимонем.",
    valuesTitle: "Мо худро ба чӣ пайбанд медонем",
    values: [
      { title: "Равшанӣ аз ҳушёрӣ муҳимтар аст", desc: "Агар корбар маҷбур шавад дубора фикр кунад — кор ҳанӯз тамом нашудааст." },
      { title: "Дастаи хурду ботаҷриба", desc: "Шумо ҳамеша бевосита бо касоне кор мекунед, ки дизайнро месозанд." },
      { title: "Нишон диҳед, на нақл кунед", desc: "Мо барвақт прототип месозем, то қарорҳо дар асоси таъсироти воқеӣ гирифта шаванд." },
      { title: "Масъулияти натиҷа", desc: "Мо муваффақиятро аз рӯи он чи ба бозор мебарояд месанҷем, на аз соатҳои сарфшуда." },
    ],
    timelineTitle: "Нӯҳ сол, як тамаркуз",
    timeline: [
      { year: "2017", text: "Аз ҷониби ду тарроҳ таъсис ёфт, ки аз презентатсияҳое, ки касе намехонад, хаста шуда буданд." },
      { year: "2019", text: "То дастаи панҷнафара бо старт-апҳои барвақт калон шуд." },
      { year: "2021", text: "Пурра ба системаҳои дизайн ва супоридан ба муҳандисӣ рӯй овард." },
      { year: "2023", text: "Як бахши хурди муҳандисӣ кушод, то на танҳо тарҳрезӣ, балки бисозад ҳам." },
      { year: "2026", text: "Пас аз зиёда аз 120 лоиҳа, ҳанӯз дастаи қасдан хурд аст." },
    ],
    ctaTitle: "Ба назаратон писанд омад?",
    ctaSub: "Биёед бубинем, ки барои лоиҳаи навбатии шумо мувофиқем ё не.",
    ctaButton: "Салом гӯед",
  },
  work: {
    kicker: "Корҳо",
    h1: "Мо чӣ кор мекунем ва бо он чӣ сохтем",
    sub: "Аз як аудити оддӣ то сохтани пурраи маҳсулот — инак доираи кори мо ва якчанд лоиҳаи охирин.",
    servicesTitle: "Хидматҳо",
    services: [
      { title: "Тарҳрезии маҳсулот", desc: "UX/UI-и пурра барои маҳсулоти веб ва мобилӣ — аз тадқиқот то пиксели ниҳоӣ." },
      { title: "Системаҳои дизайн", desc: "Китобхонаҳои компонент ва токенҳо, ки дизайн ва муҳандисиро ҳамоҳанг нигоҳ медоранд." },
      { title: "Бренд ва ҳувият", desc: "Логотип, ҳарф ва забони визуалӣ, ки дар ҳама сатҳҳо устувор аст." },
      { title: "Прототипсозӣ", desc: "Прототипҳои интерактивӣ барои санҷиши корбарон ва қонеъ кардани сармоягузорон." },
      { title: "Сохтани фронтенд", desc: "Компонентҳои омодаи истеҳсолот дар React бо ҳуҷҷатгузорӣ." },
      { title: "Аудити дизайн", desc: "Баррасии мутамарказ ба маҳсулоти мавҷуда бо рӯйхати ислоҳоти афзалиятнок." },
    ],
    processTitle: "Лоиҳа чӣ гуна пеш меравад",
    process: [
      { title: "Оғоз", desc: "Ҷаласаи корӣ барои муайян кардани доира, ҳадафҳо ва меъёрҳои муваффақият." },
      { title: "Ҷустуҷӯи самт", desc: "Якчанд самтро зуд меомӯзем ва бо фикру мулоҳизаи воқеӣ танг мекунем." },
      { title: "Дизайн", desc: "Экранҳои сифати баланд ва прототипе, ки шумо метавонед клик кунед." },
      { title: "Супоридан", desc: "Мушаххасот, файлҳо ва компонентҳои омода барои муҳандисони шумо." },
    ],
    portfolioTitle: "Лоиҳаҳои интихобшуда",
    projects: [
      { name: "Northwind", tag: "Дашборди фонтех" },
      { name: "Fieldbase", tag: "Платформаи корҳои саҳроӣ" },
      { name: "Loop", tag: "Барномаи ҷомеавӣ" },
      { name: "Ardent", tag: "Тарҳрезии дубораи e-commerce" },
      { name: "Harbor", tag: "Абзори логистикӣ" },
      { name: "Kite", tag: "Системаи дизайн" },
    ],
    ctaTitle: "Мехоҳед лоиҳаи шумо низ дар ин ҷо бошад?",
    ctaSub: "Бигӯед чӣ месозед — мо мегӯем, ки метавонем кӯмак кунем ё не.",
    ctaButton: "Оғози лоиҳа",
  },
  contact: {
    kicker: "Тамос",
    h1: "Биёед дар бораи лоиҳаи шумо гап занем",
    sub: "Каме дар бораи он чӣ месозед бигӯед. Мо шахсан ба ҳар паём ҷавоб медиҳем, одатан дар зарфи як рӯз.",
    form: {
      name: "Ном",
      namePlaceholder: "Иван Иванов",
      email: "Email",
      emailPlaceholder: "ivan@company.com",
      budget: "Буҷа",
      budgetOptions: ["То $10k", "$10k – $30k", "$30k – $75k", "$75k+"],
      message: "Тафсилоти лоиҳа",
      messagePlaceholder: "Каме дар бораи он чӣ месозед бинависед...",
      submit: "Паём фиристед",
      submitting: "Фиристодан...",
      sentTitle: "Паём фиристода шуд",
      sentDesc: "Ташаккур барои муроҷиат — мо дар зарфи як рӯзи корӣ ҷавоб медиҳем.",
    },
    info: [
      { label: "Email", value: "hello@lumen.studio" },
      { label: "Телефон", value: "+1 (555) 012-3456" },
      { label: "Студия", value: "Бруклин, Ню-Йорк — бо пешакӣ таъин" },
    ],
    callout: "Занг афзалтар аст? 20 дақиқа бо дастаи мо брон кунед ва аз пур кардани форма сарфи назар кунед.",
    faqTitle: "Саволҳои зиёд пурсидашуда",
    faqs: [
      { q: "Лоиҳаи маъмулӣ чанд вақт давом мекунад?", a: "Аксари лоиҳаҳо вобаста ба доира 4–10 ҳафта давом мекунанд — аз аудити мутамарказ то сохтани пурраи дизайни маҳсулот." },
      { q: "Оё шумо фронтендро низ месозед?", a: "Бале — мо бахши хурди муҳандисӣ дорем, ки метавонад ҳамроҳи дизайн компонентҳои омодаи истеҳсолотро дар React супорад." },
      { q: "Нархгузорӣ чӣ гуна аст?", a: "Мо баъди занги оғозин нархи собитро муайян мекунем, то шумо аз пеш нархро донед, бидуни ҳайрати соатӣ." },
      { q: "Метавонед бо системаи дизайни мавҷудаи мо кор кунед?", a: "Албатта. Мо мунтазам системаҳои мавҷударо густариш медиҳем, на аз сифр оғоз мекунем." },
    ],
    ctaTitle: "Ҳанӯз фикр мекунед?",
    ctaSub: "Ҳеҷ фишоре нест — ҳар вақт омода будед, муроҷиат кунед. Мо дар ин ҷо ҳастем.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru, tg };
