/** Core **/
import { FC, Ref } from "react";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

/** Assets **/
import img1 from "../../../assets/images/bg_image1.png";
import img2 from "../../../assets/images/bg_image2.png";
import img3 from "../../../assets/images/bg_image3.png";

/** Styles **/
import "swiper/css";

const bg_images = [img1, img2, img3];

type Props = {
  sliderRef: Ref<SwiperRef>;
};

const FullPageSlider: FC<Props> = ({ sliderRef }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
      <Swiper
        ref={sliderRef}
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        loopPreventsSliding={false}
        navigation={{ enabled: true }}
        effect={"slide"}
        loop
        allowTouchMove={false}
        noSwiping
      >
        {bg_images.map((item, index) => (
          <SwiperSlide className="bg-black sm:max-h-96 z-0" key={index}>
            <img
              src={item}
              alt={item}
              className="h-[100vh] w-full brightness-75 blur-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { FullPageSlider };
