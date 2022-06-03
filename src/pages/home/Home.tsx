import { FC, useEffect } from "react";

import Hits from "./hits/Hits";
import Promotions from "./promotions/Promotions";
import Map from "./map/Map";

import { useCategories } from "../../hooks/useCategories";

import styles from "./Home.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const Home: FC = () => {
  const { getCategories } = useCategories();

  useEffect(() => {
    getCategories(1, 99);
  }, []);

  return (
    <div className={styles.container}>
      <Hits />
      <Promotions />
      <Map />
    </div>
  );
};

export default Home;
