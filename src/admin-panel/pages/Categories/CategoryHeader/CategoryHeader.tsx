import { FC } from "react";

import styles from "./CategoryHeader.module.scss";

interface CategoryHeaderProps {
  title: Array<string>;
}

const CategoryHeader: FC<CategoryHeaderProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subtitles}>
        {title.map((title, index) => (
          <h2 key={title + index} className={styles.subtitle}>
            {title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default CategoryHeader;
