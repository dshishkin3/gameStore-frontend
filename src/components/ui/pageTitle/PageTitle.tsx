import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

import styles from "./PageTitle.module.scss";

interface IPageTitle {
  title: string;
}

const PageTitle: FC<IPageTitle> = ({ title }) => {
  let navigate = useNavigate();

  return (
    <div className={styles.header}>
      <button className={styles.leftArrow} onClick={() => navigate(-1)}>
        <ChevronLeftOutlinedIcon color="disabled" fontSize="medium" />
      </button>{" "}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default PageTitle;
