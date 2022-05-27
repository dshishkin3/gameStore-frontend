import React, { FC } from "react";

import styles from "./SeeMore.module.scss";

interface ISeeMoreProps {
  onClick: () => void;
}
const SeeMore: FC<ISeeMoreProps> = ({ onClick }) => {
  return (
    <div className={styles.more}>
      <button className={styles.moreButton} onClick={onClick}>
        Показать ещё
      </button>
    </div>
  );
};

export default SeeMore;
