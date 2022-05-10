import React, { FC } from "react";

import Hits from "./hits/Hits";

import styles from "./Home.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import Promotions from "./promotions/Promotions";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hits />
      <Promotions />
    </div>
  );
};

export default Home;
