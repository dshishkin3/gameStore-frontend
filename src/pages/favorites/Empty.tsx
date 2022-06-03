import { FC } from "react";

import BackButton from "../../components/ui/backButton/BackButton";

import styles from "./Favories.module.scss";

const Empty: FC = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.content}>
        <div className={styles.item}>
          <h2 className={styles.title}>Закладок нет :(</h2>
          <p className={styles.text}>Вы ничего не добавляли в закладки</p>
        </div>
        <div className={styles.backToHomeBtn}>
          <BackButton />
        </div>
      </div>
    </div>
  );
};
export default Empty;
