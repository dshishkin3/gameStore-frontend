import React, { FC } from "react";

import Wrapper from "../../components/ui/wrapper/Wrapper";

import styles from "./Home.module.scss";

const AdminHome: FC = () => {
  return (
    <Wrapper title="">
      <p className={styles.title}>Небольшая инструкция по админ панели</p>

      <ul className={styles.block}>
        <p className={styles.blockTitle}>Авторизация:</p>
        <li className={styles.list}>game-store.ru/admin/auth</li>
        <li className={styles.list}>
          В админ панели стараться не обновлять страницу, т.к придется
          переавторизовываться
        </li>
      </ul>
      <ul className={styles.block}>
        <p className={styles.blockTitle}>Редактирование товаров:</p>
        <li className={styles.list}>
          Обязательно проверить, чтобы все поля были заполнены{" "}
        </li>
        <li className={styles.list}>
          После изменений не забыть нажать “сохранить изменения”
        </li>
      </ul>
    </Wrapper>
  );
};

export default AdminHome;
