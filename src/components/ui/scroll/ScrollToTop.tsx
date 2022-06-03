import { FC, useEffect, useState } from "react";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import cn from "classnames";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop: FC = () => {
  const [isVisable, setIsVisable] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
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
      className={cn(styles.scrollToTop, { [styles.scrollActive]: isVisable })}
      onClick={scrollToTop}
    >
      <ArrowUpwardSharpIcon color="success" />
    </span>
  );
};
export default ScrollToTop;
