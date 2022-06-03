import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

import styles from "./Wrapper.module.scss";

interface IWrapperProps {
  children: ReactNode;
  title: string;
  backBtn?: boolean;
}

const Wrapper: FC<IWrapperProps> = ({ children, title, backBtn }) => {
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {backBtn && (
          <button className={styles.leftArrow} onClick={() => navigate(-1)}>
            <ChevronLeftOutlinedIcon color="disabled" fontSize="medium" />
          </button>
        )}
        <p className={styles.title}>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
