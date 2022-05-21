import React, { FC } from "react";

import styles from "./HeaderItems.module.scss";

interface IHeaderItemsProps {
  items: string[];
}

const HeaderItems: FC<IHeaderItemsProps> = ({ items }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerItems}>
        <div className={styles.right}>
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderItems;
