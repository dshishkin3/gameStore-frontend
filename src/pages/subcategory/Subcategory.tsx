import { FC } from "react";
import { useParams, Link } from "react-router-dom";

import PageTitle from "../../components/ui/pageTitle/PageTitle";
import { useCategories } from "../../hooks/useCategories";

import styles from "./Subcategory.module.scss";

const Subcategory: FC = () => {
  let { name } = useParams();

  const { categories } = useCategories();

  const category = categories.filter((item) => item.title === name);

  return (
    <div>
      <PageTitle title={String(name)} />
      <div className={styles.categories}>
        {category[0].subcategories.map((item) => (
          <Link
            to={`/category/${item.title}`}
            className={styles.category}
            key={item.id}
          >
            <img src={item.urlImg} alt="" />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subcategory;
