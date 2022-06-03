import { FC } from "react";

import styles from "./AdminSubcategory.module.scss";

interface AdminSubcategoryProps {
  urlImg: string;
  title: string;
}

const AdminSubcategory: FC<AdminSubcategoryProps> = ({ urlImg, title }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={urlImg} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default AdminSubcategory;
