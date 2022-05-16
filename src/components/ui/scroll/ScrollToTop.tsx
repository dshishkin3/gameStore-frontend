import { FC, useEffect, useState } from "react";

import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop: FC = () => {
  const [isVisable, setIsVesable] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.pageXOffset > 300) {
      setIsVesable(true);
    } else {
      setIsVesable(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <span
      className={styles.scrollToTop + isVisable && styles.scrollActive}
      onClick={scrollToTop}
    >
      <ArrowUpwardSharpIcon color="success" />
    </span>
  );
};
export default ScrollToTop;
