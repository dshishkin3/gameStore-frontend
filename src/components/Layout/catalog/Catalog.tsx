import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import { useCategories } from "../../../hooks/useCategories";

import MenuBlock from "./menu/Menu";
import { MyLoaderCategories } from "../../ui/contentLoader/ContentLoader";

import styles from "./Catalog.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const Catalog: FC = () => {
  const { isLoading, categories } = useCategories();

  return (
    <div className={styles.container}>
      <MenuBlock />
      <div className={styles.categories}>
        {isLoading ? (
          <MyLoaderCategories />
        ) : (
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
            {categories.categories.map((category) => (
              <SwiperSlide key={category._id}>
                {" "}
                <Link to={`/subcategory/${category.title}`}>
                  {category.title.length < 23
                    ? category.title
                    : category.title.slice(0, 23) + "..."}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Catalog;
