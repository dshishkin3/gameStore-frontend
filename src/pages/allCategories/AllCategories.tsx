import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCategories } from "../../hooks/useCategories";

import PageTitle from "../../components/ui/pageTitle/PageTitle";
import { MyLoaderCategory } from "../../components/ui/contentLoader/ContentLoader";
import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";
import PaginationControl from "../../admin-panel/components/ui/pagination/Pagination";

import styles from "./AllCategories.module.scss";

const AllCategories: FC = () => {
  const { categories, getCategories, isLoading } = useCategories();

  const [page, setPage] = useState<number>(1);

  const init = Math.round(categories.count / 8);

  useEffect(() => {
    getCategories(page, 14);
  }, [page]);

  return (
    <div style={{ flex: "1 0 auto" }}>
      <ActiveLastBreadcrumb title={["Каталог товаров"]} />
      <PageTitle title="Все категории" />
      <div className={styles.categories}>
        {isLoading ? (
          <MyLoaderCategory />
        ) : (
          categories.categories.map((category) => (
            <Link
              to={`/subcategory/${category.title}`}
              className={styles.category}
              key={category._id}
            >
              <img src={category.urlImg} alt="" />
              <p>{category.title}</p>
            </Link>
          ))
        )}
      </div>
      <div className={styles.pagination}>
        <PaginationControl count={init} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default AllCategories;
