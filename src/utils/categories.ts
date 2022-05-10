import { ICategory } from "./interfaces";

export const mainCategories = [
  {
    id: 1,
    title: "Компьютерная периферия",
  },
  {
    id: 2,
    title: "Комплектующие для пк",
  },
  {
    id: 3,
    title: "Компьютеры, ноутбуки",
  },
  {
    id: 4,
    title: "Игровые приставки",
  },
  {
    id: 5,
    title: "Игровые столы и кресла",
  },
  {
    id: 6,
    title: "Сетевое оборудование",
  },
];

export const categories: ICategory[] = [
  {
    id: 1,
    title: "Компьютерная периферия",
    urlImg:
      "https://c.dns-shop.ru/thumb/st4/fit_width/120/120/88f022c8921651dd34f05377c46a20d8/d8ebb6eda3210347f2614c878e5a7ebe7992469f025d2dc073464462fe875ded.png.webp",
    subcategories: [
      {
        id: 1,
        title: "Мониторы",
        urlImg:
          "https://c.dns-shop.ru/thumb/st4/fit/220/150/bdcbc06b6da109c705ed00c8e9514bd3/dc79b0f5828b2a1861f5e7af3e14971995c69d29ebc7cec796aaebe985bf912a.jpg.webp",
      },
      {
        id: 2,
        title: "Клавиатуры",
        urlImg:
          "https://c.dns-shop.ru/thumb/st4/fit/220/150/f437458416913a946697176161e0c4d7/372eee4a3c75339259f233850e4f2d4d4b6260da64076d17bd1351ade4e2d50b.jpg",
      },
      {
        id: 3,
        title: "Мыши",
        urlImg:
          "https://c.dns-shop.ru/thumb/st4/fit/220/150/67f164dd76bbb444c8c7ec7fb44719b5/52e4b832d47b0d28820658444e10500e3c1a9d4ff0372c7525bb484a78ea045e.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Офис и сеть",
    urlImg:
      "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/b0be184579c9d84dfeeffb5d6e4a4248/9c38238aadad78929943380148e8a57152528dc83d5e6590e53eb64d0fc1a2db.png",
    subcategories: [
      {
        id: 1,
        title: "Wi-Fi роутеры",
        urlImg:
          "https://c.dns-shop.ru/thumb/st1/fit/220/150/51c5c8dead3821f480f04974a03e8e98/4b36c9af4df3aca88c711ab004c927e3959c8e497cff2bcea2ecd374d4aa27e7.jpg",
      },
      {
        id: 2,
        title: "Маршрутизаторы",
        urlImg:
          "https://c.dns-shop.ru/thumb/st4/fit/220/150/babe897fcda183320416506c1d9a148f/e7594d1c9601dd029f7872b11c9b4a870faa2e851bf6f1fcf4f79050aacb60e7.jpg",
      },
    ],
  },
];
