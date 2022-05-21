import { FC } from "react";
import PageTitle from "../../../components/ui/pageTitle/PageTitle";
import ToggleBtn from "../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../components/ui/wrapper/Wrapper";

import styles from "./AdminCategory.module.scss";

const AdminCategory: FC = () => {
  return (
    <Wrapper title={"text"}>
      <div className={styles.category}>
        <ToggleBtn type="saveBtn" text="Сохранить изменения" />
      </div>
    </Wrapper>
  );
};

export default AdminCategory;
