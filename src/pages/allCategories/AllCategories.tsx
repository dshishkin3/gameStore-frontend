import { FC } from "react";
import { Link } from "react-router-dom";

import { useCategories } from "../../hooks/useCategories";

import PageTitle from "../../components/ui/pageTitle/PageTitle";

import styles from "./AllCategories.module.scss";
import { MyLoaderCategory } from "../../components/ui/contentLoader/ContentLoader";
import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";

const AllCategories: FC = () => {
  const { categories, isLoading } = useCategories();

  return (
    <div>
      <ActiveLastBreadcrumb />
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
    </div>
  );
};

export default AllCategories;
