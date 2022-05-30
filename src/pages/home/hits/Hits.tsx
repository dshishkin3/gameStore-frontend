import { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import { useProducts } from "../../../hooks/useProducts";

import Card from "../../../components/ui/card/Card";
import { MyLoader } from "../../../components/ui/contentLoader/ContentLoader";

import styles from "../Home.module.scss";

const Hits: FC = () => {
  const { hits, getHits, hitsIsLoading } = useProducts();

  useEffect(() => {
    getHits(1);
  }, []);

  return (
    <div className={styles.hits}>
      <p className={styles.title}>Хиты продаж</p>
      {hitsIsLoading ? (
        <MyLoader />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          navigation={true}
          className="mySwiper"
          style={{ maxWidth: 1550 }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
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
          {hits.products.map((product) => (
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
