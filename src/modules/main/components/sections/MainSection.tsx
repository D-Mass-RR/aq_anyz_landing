/** Core **/
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { FC, useCallback, useRef } from "react";

/** Components **/
import { Typography } from "components/Typography.tsx";
import { Button } from "../Button.tsx";
import { FullPageSlider } from "../FullPageSlider.tsx";

/** Assets **/
import img1 from "../../../../assets/images/slide1.png";
import img2 from "../../../../assets/images/slide2.png";
import img3 from "../../../../assets/images/slide3.png";
const images = [img1, img2, img3];

const MainSection: FC = () => {
  // Ref
  const bgSliderRef = useRef<SwiperRef>(null);
  const sliderRef = useRef<SwiperRef>(null);

  // Handlers
  const onNextSlide = useCallback(() => {
    if (!bgSliderRef.current) return;
    if (!sliderRef.current) return;
    bgSliderRef.current.swiper.slideNext(1000, true);
    sliderRef.current.swiper.slideNext(1000, true);
  }, []);

  const onPrevSlide = useCallback(() => {
    if (!bgSliderRef.current) return;
    if (!sliderRef.current) return;
    bgSliderRef.current.swiper.slidePrev(1000, true);
    sliderRef.current.swiper.slidePrev(1000, true);
  }, []);

  return (
    <section
      id="#home"
      className="bg-black h-[120vh] z-10 pt-16 overflow-hidden  px-[10rem] overflow-y-hidden"
    >
      <FullPageSlider sliderRef={bgSliderRef} />
      <div className={"sm:hidden"}>
        <div
          onClick={onPrevSlide}
          className="rounded-full cursor-pointer w-[4.3rem] h-[4.4rem] bg-[#0000004D] flex items-center justify-center absolute top-2/4 left-16 mt-[4.8rem]"
        >
          <ChevronLeftIcon className="h-9 w-9 text-white" />
        </div>
        <div
          onClick={onNextSlide}
          className="rounded-full w-[4.3rem] h-[4.4rem] bg-[#0000004D] flex items-center justify-center absolute top-2/4 right-16 mt-[4.8rem]"
        >
          <ChevronRightIcon className="h-9 w-9 text-white" />
        </div>
      </div>
      <div className="flex z-10 sticky justify-between 2xl:px-8 lg:px-3">
        <div className="px-4 max-w-xl mt-[7.8rem] pt-9 min-h-[600px]">
          <h1 className="text-white leading-tight font-extrabold font-sans text-2xl mb-[36px]">
            Попробуйте вкус Светлой Легенды!
          </h1>
          <div className="w-8/12 mb-[36px]">
            <Typography className="text-lg text-white leading-tight">
              Восточная и Европейская кухня по уникальным <br /> рецептам от
              нашего Шефа!
            </Typography>
          </div>
          <div className="flex flex-col w-80 shadow-sm">
            <Button.Primary>Заказать доставку</Button.Primary>
            <Button.Secondary>Забронировать стол</Button.Secondary>
          </div>
          <div className={"mt-10 text-[#7D7D7D] text-base"}>
            <p>Смотрите меню ниже</p>
          </div>
          <div className="mt-0">
            <svg
              width="73"
              height="96"
              viewBox="0 0 73 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36.5" cy="36.5" r="36.5" fill="black" />
              <path
                d="M34.2929 95.7071C34.6834 96.0976 35.3166 96.0976 35.7071 95.7071L42.0711 89.3431C42.4616 88.9526 42.4616 88.3195 42.0711 87.9289C41.6805 87.5384 41.0474 87.5384 40.6569 87.9289L35 93.5858L29.3431 87.9289C28.9526 87.5384 28.3195 87.5384 27.9289 87.9289C27.5384 88.3195 27.5384 88.9526 27.9289 89.3431L34.2929 95.7071ZM34 31L34 95L36 95L36 31L34 31Z"
                fill="#CFCFCF"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-[37.5rem] mt-[7.8rem]">
          <Swiper
            slidesPerView="auto"
            ref={sliderRef}
            loop
            spaceBetween={"13px"}
          >
            {images.map((item, index) => (
              <SwiperSlide className="max-h-[590px] max-w-[445px]" key={index}>
                <img
                  className="h-[36.8rem] object-cover rounded-2xl"
                  src={item}
                  alt={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { MainSection };
