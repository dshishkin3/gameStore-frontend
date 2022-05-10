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
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          className="mySwiper"
          style={{ maxWidth: 1050 }}
          modules={[Navigation]}
        >
          {mainCategories.map((category) => (
            <SwiperSlide key={category.id}>
              {" "}
              <Link to={`category/${category.title}`}>{category.title}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Catalog;
