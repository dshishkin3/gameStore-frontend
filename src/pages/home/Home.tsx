import { FC, useEffect } from "react";

import Hits from "./hits/Hits";
import Promotions from "./promotions/Promotions";
import Map from "./map/Map";

import styles from "./Home.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useAuth } from "../../hooks/useAuth";
import { useCategories } from "../../hooks/useCategories";

const Home: FC = () => {
  const { getCategories, isLoading } = useCategories();

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
