import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Card from "../../components/ui/card/Card";
import MyLoader from "../../components/ui/contentLoader/ContentLoader";

import { IProduct } from "../../utils/interfaces";

import styles from "./Home.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const Home: FC = () => {
  const [hits, setHits] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getHits();
  }, []);

  const getHits = async () => {
    const res = await axios.get(
      "http://game-store12.herokuapp.com/api/products/hits"
    );
    setHits(res.data);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Хиты продаж</p>
      <div className={styles.hits}>
        {loading ? (
          <MyLoader />
        ) : (
          <Swiper
            slidesPerView={4}
            spaceBetween={70}
            navigation={true}
            className="mySwiper"
            style={{ maxWidth: 1550 }}
            modules={[Navigation]}
          >
            {hits.map((product) => (
              <SwiperSlide key={product._id}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Home;
