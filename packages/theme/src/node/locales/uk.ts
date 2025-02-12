import type { HopeThemeLocaleData } from "../../shared";

export const ukLocale: HopeThemeLocaleData = {
  lang: "uk-UA",

  navbarLocales: {
    langName: "Українська",
    selectLangText: "Мова",
    selectLangAriaLabel: "Оберіть мову",
  },

  metaLocales: {
    author: "Автор",
    date: "Дата написання",
    origin: "Оригінал",
    views: "Перегляди сторінки",
    category: "Категорія",
    tag: "Теги",
    readingTime: "Час читання",
    words: "Слова",
    toc: "On This Page",
    prev: "Prev",
    next: "Next",
    lastUpdated: "Останнє оновлення",
    contributors: "Автори",
    editLink: "Редагувати цю сторінку",
  },

  blogLocales: {
    article: "Статті",
    articleList: "Список статей",
    category: "Категорія",
    tag: "Теги",
    timeline: "Хронологія",
    timelineTitle: "Вчора ще раз!",
    all: "Bce",
    intro: "Особистий вступ",
    star: "Зірка",
    slides: "Слайди",
    encrypt: "Зашифровано",
  },

  paginationLocales: {
    prev: "Попередня",
    next: "Далі",
    navigate: "Перейти до",
    action: "Перейти",
    errorText: "Будь ласка, введіть число від 1 до $page !",
  },

  outlookLocales: {
    themeColor: "Колір теми",
    darkmode: "Тематичний режим",
    fullscreen: "Full Screen",
  },

  encryptLocales: {
    title: "Будь ласка, введіть пароль",
    errorHint: "Будь ласка, введіть правильний пароль!",
  },

  routeLocales: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "404msg": [
      "Тут немає нічого.",
      "Як ми сюди потрапили?",
      'Це "4-0-4".',
      "Схоже, у нас є непрацюючі посилання.",
    ],
    back: "Повернутися назад",
    home: "Повернутися на головну",
    openInNewWindow: "Open in new window",
  },
};
