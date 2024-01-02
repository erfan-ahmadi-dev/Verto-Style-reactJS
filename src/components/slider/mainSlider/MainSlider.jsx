import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { slide1, slide2, slide3 } from "../../../assets/images";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { SUB_CATEGOREIS_LINK } from "../../../utils/Constants";
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
        <Link to={`products/${SUB_CATEGOREIS_LINK[0].link}`}>
          <img src={slide1} alt="friday discount" loading="lazy" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`products/${SUB_CATEGOREIS_LINK[2].link}`}>
          <img src={slide2} alt="men shoes" loading="lazy" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`products/${SUB_CATEGOREIS_LINK[1].link}`}>
          <img src={slide3} alt="women clothes" loading="lazy" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
