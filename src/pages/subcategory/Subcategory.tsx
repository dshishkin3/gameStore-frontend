import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";
import { MyLoaderCategory } from "../../components/ui/contentLoader/ContentLoader";
import PageTitle from "../../components/ui/pageTitle/PageTitle";
import SeeMore from "../../components/ui/seeMore/SeeMore";

import { useCategories } from "../../hooks/useCategories";

import styles from "./Subcategory.module.scss";

const Subcategory: FC = () => {
  let { name } = useParams<string>();

  const { category, getCategory, isLoadingCategory } = useCategories();

  const [maxItems, setMaxItems] = useState(14);

  useEffect(() => {
    if (name !== undefined) {
      getCategory(name);
    }
  }, [name]);

  return (
    <div>
      <ActiveLastBreadcrumb title={["Каталог товаров", String(name)]} />
      <PageTitle title={String(name)} />
      <div className={styles.categories}>
        {isLoadingCategory ? (
          <MyLoaderCategory />
        ) : (
          category.subcategories.slice(0, maxItems).map((item, i) => (
            <Link
              to={`/category/${item.title}`}
              className={styles.category}
              key={item.title + i}
            >
              <img src={item.urlImg} alt="" />
              <p>{item.title}</p>
            </Link>
          ))
        )}
      </div>
      {!isLoadingCategory &&
        category.subcategories.length > 14 &&
        category.subcategories.length > maxItems && (
          <SeeMore onClick={() => setMaxItems(maxItems + 14)} />
        )}
    </div>
  );
};

export default Subcategory;
