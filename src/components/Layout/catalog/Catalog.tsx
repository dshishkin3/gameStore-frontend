import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import { mainCategories } from "../../../utils/categories";

import styles from "./Catalog.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const Catalog: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        <MenuIcon fontSize="medium" />
        <p>Каталог товаров</p>
      </div>
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
