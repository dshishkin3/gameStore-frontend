import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import MyLoader from "../../../components/ui/contentLoader/ContentLoader";

import { IProduct } from "../../../utils/interfaces";
import Card from "../../../components/ui/card/Card";

import styles from "../Home.module.scss";

const Promotions: FC = () => {
  const [promotions, setPromotions] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPromotions();
  }, []);

  const getPromotions = async () => {
    const res = await axios.get(
      "http://game-store12.herokuapp.com/api/products/promotions"
    );
    setPromotions(res.data);
    setLoading(false);
  };

  return (
    <div className={styles.promotions}>
      <p className={styles.title}>Акции</p>
      {loading ? (
        <MyLoader />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          navigation={true}
          className="mySwiper"
          style={{ maxWidth: 1550 }}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {promotions.map((product) => (
            <SwiperSlide key={product._id}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Promotions;
