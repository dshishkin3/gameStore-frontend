import { FC, ReactNode } from "react";

import styles from "./Wrapper.module.scss";

interface IWrapperProps {
  children: ReactNode;
  title: string;
}

const Wrapper: FC<IWrapperProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default Wrapper;
