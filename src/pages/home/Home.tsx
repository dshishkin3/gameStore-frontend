import { FC, useEffect } from "react";

import Hits from "./hits/Hits";
import Promotions from "./promotions/Promotions";
import Map from "./map/Map";

import styles from "./Home.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useAuth } from "../../hooks/useAuth";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hits />
      <Promotions />
      <Map />
    </div>
  );
};

export default Home;
