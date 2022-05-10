import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import { mainCategories } from "../../../utils/categories";

import MenuBlock from "./menu/Menu";

import styles from "./Catalog.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const Catalog: FC = () => {
  return (
    <div className={styles.container}>
      <MenuBlock />
      <div className={styles.categories}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          className="mySwiper"
          modules={[Navigation]}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
            },
            1400: {
              width: 1050,
              slidesPerView: 4,
            },
          }}
        >
          {mainCategories.map((category) => (
            <SwiperSlide key={category.id}>
              {" "}
              <Link to={`/`}>{category.title}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Catalog;
