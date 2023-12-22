import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BASE_IMAGE_URL } from "../../../utils/Constants";

function SingleProcutSlider({ data }) {
  return (
    <Swiper
      style={{
        "--swiper-navigation-size": "1rem",
      }}
      className="w-full h-fit flex"
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      direction="horizontal"
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide className="w-auto p-4 animate-fade" key={index}>
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              src={`${BASE_IMAGE_URL}${item}`}
              alt="Product"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SingleProcutSlider;
