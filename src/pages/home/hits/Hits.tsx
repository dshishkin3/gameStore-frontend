import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { IProduct } from "../../../utils/interfaces";

import Card from "../../../components/ui/card/Card";
import MyLoader from "../../../components/ui/contentLoader/ContentLoader";

import styles from "../Home.module.scss";

const Hits: FC = () => {
  const [hits, setHits] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getHits();
  }, []);

  const getHits = async () => {
    const res = await axios.get<IProduct[]>(
      "http://game-store12.herokuapp.com/api/products/hits"
    );
    setHits(res.data);
    setLoading(false);
  };

  return (
    <div className={styles.hits}>
      <p className={styles.title}>Хиты продаж</p>
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
          {hits.map((product) => (
            <SwiperSlide key={product._id}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Hits;
