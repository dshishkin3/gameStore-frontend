import { ChangeEvent, FC } from "react";

import styles from "./CategoriesForm.module.scss";

interface CategoriesFormProps {
  title: string;
  setTitle: (arg0: ChangeEvent<HTMLInputElement>) => void;
  urlImg: string;
  setUrlImg: (arg0: any) => void;
}
const CategoriesForm: FC<CategoriesFormProps> = ({
  title,
  setTitle,
  urlImg,
  setUrlImg,
}) => {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <input
          onChange={setUrlImg}
          type="text"
          value={urlImg}
          name="urlImg"
          placeholder="Укажите ссылку на изображение"
        />
      </div>
      <div className={styles.input}>
        <input
          onChange={setTitle}
          type="text"
          value={title}
          name="title"
          placeholder="Наименование категории"
        />
      </div>
    </form>
  );
};

export default CategoriesForm;
