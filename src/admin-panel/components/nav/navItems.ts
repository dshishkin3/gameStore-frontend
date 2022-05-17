import mainPage from "../../../assets/images/admin-panel/navManePage.svg";
import products from "../../../assets/images/admin-panel/navProducts.svg";
import hits from "../../../assets/images/admin-panel/navHits.svg";
import promotions from "../../../assets/images/admin-panel/navPromotions.svg";
import categories from "../../../assets/images/admin-panel/navCategories.svg";

export const navItems = [
  {
    id: 1,
    title: "Главная страница",
    link: "home",
    img: mainPage,
  },
  {
    id: 2,
    title: "Продукты",
    link: "products",
    img: products,
  },
  {
    id: 3,
    title: "Хиты",
    link: "hits",
    img: hits,
  },
  {
    id: 4,
    title: "Акции",
    link: "promotions",
    img: promotions,
  },
  {
    id: 5,
    title: "Категории",
    link: "categories",
    img: categories,
  },
];
