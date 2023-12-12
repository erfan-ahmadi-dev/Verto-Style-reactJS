import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "../../ui/card/Card";

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
        {data.map((item) => {
          return (
            <SwiperSlide className="w-auto p-4 animate-fade">
              <Card isLoading={true} data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
