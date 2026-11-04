import type { FooterNavigationGroup } from "../types/footer";

export const footerNavigationGroups: FooterNavigationGroup[] = [
  {
    title: "Покупателям",
    links: [
      { label: "Как купить", href: "/buyers/how-to-buy" },
      { label: "Безопасная сделка", href: "/buyers/safe-deal" },
      { label: "Доставка", href: "/buyers/delivery" },
      { label: "Помощь", href: "/help" },
    ],
  },
  {
    title: "Продавцам",
    links: [
      { label: "Как продать", href: "/sellers/how-to-sell" },
      { label: "Размещение объявлений", href: "/sellers/listings" },
      { label: "Правила публикации", href: "/sellers/rules" },
      { label: "Для магазинов", href: "/business" },
    ],
  },
  {
    title: "О Vendo",
    links: [
      { label: "О проекте", href: "/about" },
      { label: "Вакансии", href: "/careers" },
      { label: "Контакты", href: "/contacts" },
    ],
  },
];
