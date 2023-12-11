import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { slide1, slide2, slide3 } from "../../../assets/images";
import "swiper/css";
import "swiper/css/navigation";
function MainSlider() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-size": "1rem",
      }}
      className="w-full h-auto flex"
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      direction="horizontal"
    >
      <SwiperSlide className="flex">
        <img src={slide1} alt="friday discount" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="women clothes" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="men shoes" loading="lazy" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
