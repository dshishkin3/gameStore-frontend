import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./BackButton.module.scss";

const BackButton: FC = () => {
  let navigate = useNavigate();

  return (
    <button className={styles.container} onClick={() => navigate(-1)}>
      <ArrowBackIcon /> Вернуться назад
    </button>
  );
};

export default BackButton;
