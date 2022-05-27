import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PaginationControl from "../../admin-panel/components/ui/pagination/Pagination";
import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";
import { MyLoaderCategory } from "../../components/ui/contentLoader/ContentLoader";

import PageTitle from "../../components/ui/pageTitle/PageTitle";
import SeeMore from "../../components/ui/seeMore/SeeMore";

import { useCategories } from "../../hooks/useCategories";

import styles from "./Subcategory.module.scss";

const Subcategory: FC = () => {
  let { name } = useParams();

  const [maxItems, setMaxItems] = useState(14);

  const { categories, isLoading, getCategories } = useCategories();

  const category = categories.categories.filter((item) => item.title === name);

  return (
    <div>
      <ActiveLastBreadcrumb
        categorie={["Компьютерная периферия", String(name)]}
      />
      <PageTitle title={String(name)} />
      <div className={styles.categories}>
        {isLoading ? (
          <MyLoaderCategory />
        ) : (
          category[0].subcategories.slice(0, maxItems).map((item) => (
            <Link
              to={`/category/${item.title}`}
              className={styles.category}
              key={item.id}
            >
              <img src={item.urlImg} alt="" />
              <p>{item.title}</p>
            </Link>
          ))
        )}
      </div>
      {category[0].subcategories.length >= 14 && (
        <SeeMore onClick={() => setMaxItems(maxItems + 14)} />
      )}
    </div>
  );
};

export default Subcategory;
