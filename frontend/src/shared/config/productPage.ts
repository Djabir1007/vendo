import type { ProductPageData } from "../types/productPage";

export const productPage: ProductPageData = {
  breadcrumbs: ["Москва", "Электроника", "Телефоны", "Apple"],
  images: [
    { id: 1, src: "/images/productPage/phone.svg" },
    { id: 2, src: "/images/productPage/phone.svg" },
    { id: 3, src: "/images/productPage/phone.svg" },
    { id: 4, src: "/images/productPage/phone.svg" },
    { id: 5, src: "/images/productPage/phone.svg" },
  ],
  price: "32 900 ₽",
  title: "iPhone 13, 128 ГБ, батарея 86%",
  publishedAt: "сегодня в 12:40",
  characteristics: [
    { id: 1, label: "Модель", value: "iPhone 13" },
    { id: 2, label: "Память", value: "128 ГБ" },
    { id: 3, label: "Цвет", value: "тёмная ночь" },
    { id: 4, label: "Состояние батареи", value: "86%" },
    { id: 5, label: "IMEI", value: "проверен продавцом" },
    { id: 6, label: "Гарантия", value: "14 дней от магазина" },
    { id: 7, label: "Комплект", value: "телефон, кабель, коробка" },
  ],
  description:
    "Трейд-ин, без ремонтов и замен деталей. Проверим все функции при вас, покажем IMEI в настройках и состояние батареи. Можно забрать в павильоне или договориться о встрече у метро.",
  seller: {
    initials: "А",
    name: "Трейд-ин у Артура",
    sellerType: "магазин",
    location: "Горбушкин двор",
    rating: "4,7",
    reviews: "58 отзывов",
    description:
      "Б/у смартфоны и ноутбуки, проверка IMEI при вас. На Vendo с сентября 2026.",
    productsCount: "150 товаров",
  },
  sellerProducts: [
    {
      id: 1,
      icon: "/images/productPage/laptop.svg",
      price: "17 500 ₽",
      title: "Ноутбук Lenovo ThinkPad T480, 16 ГБ",
      meta: "i5 · SSD 512 ГБ",
    },
    {
      id: 2,
      icon: "/images/productPage/headphones.svg",
      price: "9 900 ₽",
      title: "Наушники Sony WH-1000XM4",
      meta: "шумоподавление · чехол",
    },
    {
      id: 3,
      icon: "/images/productPage/phone.svg",
      price: "24 500 ₽",
      title: "iPhone 12, 64 ГБ, батарея 89%",
      meta: "IMEI проверен · гарантия",
    },
    {
      id: 4,
      icon: "/images/productPage/tablet.svg",
      price: "19 900 ₽",
      title: "iPad 9, 64 ГБ, Wi-Fi",
      meta: "как новый · коробка",
    },
  ],
};
