/** Core **/
import { FC } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/** Assets **/
import img1 from "../../../assets/images/bg_image1.png";
import img2 from "../../../assets/images/bg_image2.png";
import img3 from "../../../assets/images/bg_image3.png";

/** Styles **/
import "swiper/css";

const bg_images = [img1, img2, img3];

// type Props = undefined;
const FullPageSlider: FC = () => {
  return (
    <Swiper
      allowSlideNext={false}
      allowSlidePrev={false}
      watchSlidesProgress={true}
      modules={[Controller]}
      slidesPerView={1}
    >
      {bg_images.map((item, index) => (
        <SwiperSlide
          className="grid backdrop:blur-lg md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10 w-full z-0"
          key={index}
        >
          <img src={item} alt={item} className="brightness-50 blur-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { FullPageSlider };
