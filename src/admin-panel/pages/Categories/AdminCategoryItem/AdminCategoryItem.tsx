import { FC } from "react";
import { Link } from "react-router-dom";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { ICategory } from "../../../../utils/interfaces";

import AdminSubcategory from "../AdminSubcategory/AdminSubcategory";

import styles from "./AdminCategoryItem.module.scss";

interface AdminCategoryProps {
  product: ICategory[];
}
const AdminCategoryItem: FC<AdminCategoryProps> = ({ product }) => {
  return (
    <div className={styles.body}>
      {product.map((obj) => (
        <Link
          to={`/admin/categories/${obj.title}`}
          key={obj._id}
          className={styles.column}
        >
          <div className={styles.categorie}>
            <div className={styles.image}>
              <img src={obj.urlImg} alt="" />
            </div>
            <h3 className={styles.title}>{obj.title}</h3>
          </div>
          <div className={styles.subcategorie}>
            {obj.subcategories.slice(0, 3).map((elem, index) => (
              <AdminSubcategory
                key={obj._id + index}
                urlImg={elem.urlImg}
                title={elem.title}
              />
            ))}
          </div>
          <div className={styles.toCategorie}>
            <div className={styles.btn}>
              <span>Перейти на страницу категории</span>
              <span className={styles.arrow}>
                <ArrowForwardIosSharpIcon />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AdminCategoryItem;
