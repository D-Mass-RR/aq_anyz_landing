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
    <div className="absolute top-0 w-full h-full bg-black z-0 ">
      <Swiper
        allowSlideNext={false}
        allowSlidePrev={false}
        watchSlidesProgress={true}
        modules={[Controller]}
        slidesPerView={1}
      >
        {bg_images.map((item, index) => (
          <SwiperSlide
            className="bg-black backdrop:blur-lg w-full sm:max-h-96 z-0"
            key={index}
          >
            <img
              src={item}
              alt={item}
              className="object-cover h-full brightness-50 blur-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { FullPageSlider };
