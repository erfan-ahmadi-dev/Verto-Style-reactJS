import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import Card from "../../ui/card/Card";
import "swiper/css";
import "swiper/css/navigation";
function ProductSlider({ data, isLoading }) {
  return (
    <div className="h-fit w-full animate-fade">
      <Swiper
        style={{
          "--swiper-navigation-size": "1rem",
        }}
        navigation={true}
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          765: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        className="mySwiper w-full h-auto my-4 select-none place-items-center items-center justify-center flex "
      >
        {isLoading
          ? [...Array(4)].map((_, index) => (
              <SwiperSlide className="w-auto p-4 animate-fade" key={index}>
                <Card isLoading={isLoading} />
              </SwiperSlide>
            ))
          : data.map((item, index) => {
              return (
                <SwiperSlide className="w-auto p-4 animate-fade" key={index}>
                  <Card isLoading={isLoading} response={item} />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
