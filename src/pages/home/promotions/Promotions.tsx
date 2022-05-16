import { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import Card from "../../../components/ui/card/Card";
import { MyLoader } from "../../../components/ui/contentLoader/ContentLoader";

import { useProducts } from "../../../hooks/useProducts";

import styles from "../Home.module.scss";

const Promotions: FC = () => {
  const { promotions, getPromotions, isLoading } = useProducts();

  useEffect(() => {
    getPromotions();
  }, []);

  return (
    <div className={styles.promotions}>
      <p className={styles.title}>Акции</p>
      {isLoading ? (
        <MyLoader />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          navigation={true}
          className="mySwiper"
          style={{ maxWidth: 1550 }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
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
