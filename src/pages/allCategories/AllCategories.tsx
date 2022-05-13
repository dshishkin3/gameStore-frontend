import { FC } from "react";
import { Link } from "react-router-dom";

import { useCategories } from "../../hooks/useCategories";

import PageTitle from "../../components/ui/pageTitle/PageTitle";

import styles from "./AllCategories.module.scss";

const AllCategories: FC = () => {
  const { categories } = useCategories();

  return (
    <div>
      <PageTitle title="Все категории" />
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            to={`/subcategory/${category.title}`}
            className={styles.category}
            key={category._id}
          >
            <img src={category.urlImg} alt="" />
            <p>{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
