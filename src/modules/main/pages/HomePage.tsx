/** Core **/
import { FC, useCallback, useRef, useState } from "react";

/** Components **/
import { Header, FullPageSlider, Button, FoodCard } from "../components";
import { Typography } from "components/Typography.tsx";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

/** Assets **/
import img1 from "../../../assets/images/slide1.png";
import img2 from "../../../assets/images/slide2.png";
import img3 from "../../../assets/images/slide3.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactComponent as Dashes } from "assets/svg/dashes.svg";
import { ReactComponent as Menu } from "assets/svg/menu.svg";
import { ReactComponent as Calendar } from "assets/svg/calendar.svg";
import { ReactComponent as Delivery } from "assets/svg/delivery.svg";
import { ReactComponent as MenuDashes } from "assets/svg/menu_dashes.svg";

/** Styles **/
import "swiper/css";
import { mock_categories, mock_food } from "../components/__mock__";

/** Data **/
const images = [img1, img2, img3];

const HomePage: FC = () => {
  // State
  const [activeItem, setActiveItem] = useState(0);

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

  const onPressItem = (id: number) => {
    setActiveItem(id);
  };
  return (
    <main className="h-full sm:overflow-x-hidden">
      <Header />
      <section
        id="#home"
        className="bg-black h-[120vh] z-10 pt-28 px-[10rem] overflow-y-hidden"
      >
        <FullPageSlider sliderRef={bgSliderRef} />
        <div className={"sm:hidden"}>
          <div
            onClick={onPrevSlide}
            className="rounded-full w-[4.3rem] h-[4.4rem] bg-[#0000004D] flex items-center justify-center absolute top-2/4 left-16 mt-[4.8rem]"
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
        <div className="flex z-10 sticky justify-between">
          <div className="px-4 max-w-xl mt-[7.8rem] pt-9 min-h-[600px]">
            <h1 className="text-white leading-tight font-extrabold font-sans text-2xl mb-[36px]">
              Попробуйте вкус Светлой Легенды!
            </h1>
            <div className="w-8/12 mb-[36px]">
              <Typography className="text-lg text-white leading-tight">
                Восточная и Европейская кухня по уникальным рецептам от нашего
                Шефа!
              </Typography>
            </div>
            <div className="flex flex-col w-80 shadow-sm">
              <Button className="w-full sm:w-60 mb-[20px] rounded-2xl bg-gradient-to-b from-red from-80% via-red via-90% to-light-red to-100%">
                Заказать доставку
              </Button>
              <Button className="w-full sm:w-60  rounded-2xl bg-gradient-to-b from-red from-70% via-red via-80% to-light-red to-90%">
                Забронировать стол
              </Button>
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
                <SwiperSlide
                  className="max-h-[590px] max-w-[445px]"
                  key={index}
                >
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
      <section className="bg-[#f9f9f9] w-full h-[150vh] px-20 py-24">
        <div>
          <div>
            <h1 className="font-bold text-black text-2xl">Наши преимущества</h1>
            <div
              className={
                "h-[2px] bg-gradient-to-r from-red to-[#D9021700] max-w-xl mt-2"
              }
            />
          </div>
          <div>
            <div className={"hidden lg:block relative top-0 left-16 z-0"}>
              <Dashes />
            </div>
            <div className="sm:flex-col sm:justify-center sm:px-2 sm:min-w-[14rem] lg:p-9 sm:py-6 lg:h-[12rem] flex items-center justify-between -mt-10 z-10 lg:ml-[10rem] bg-white rounded-2xl max-w-[30rem] shadow-[0px_3px_14px_0px_#D4D4D440]">
              <div className="lg:w-1/3 sm:mb-4 items-center lg:mr-6">
                <Menu />
              </div>
              <div className="w-full lg:items-start sm:text-center h-full justify-center">
                <h1 className="font-bold lg:text-xl text-lg leading-tight">
                  Большие порции
                </h1>
                <p className="mt-1 text-base leading-tight">
                  Все блюда по умолчанию делаются большими порциями
                </p>
              </div>
            </div>
            <div className={"hidden lg:block relative top-0 left-[22rem] z-0"}>
              <Dashes />
            </div>
            <div className="sm:flex-col sm:justify-center sm:px-2 sm:min-w-[14rem] lg:p-9 sm:py-6 lg:h-[12rem] flex items-center justify-between my-10 lg:-mt-12 lg:my-0 lg:ml-[28rem] bg-white rounded-2xl max-w-[32rem] shadow-[0px_3px_14px_0px_#D4D4D440]">
              <div className="lg:w-1/3 sm:mb-4 items-center lg:mr-6">
                <Delivery />
              </div>
              <div className="w-full lg:items-start sm:text-center h-full justify-center">
                <h1 className="font-bold lg:text-xl text-lg leading-tight">
                  Быстрая доставка
                </h1>
                <p className="mt-1 text-base leading-tight">
                  Доставка заказа занимает от 20 до 40 минут
                </p>
              </div>
            </div>
            <div className={"hidden lg:block relative top-0 left-[39rem] z-0"}>
              <Dashes />
            </div>
            <div className="sm:flex-col sm:justify-center sm:px-2 sm:min-w-[14rem] lg:p-9 sm:py-6 lg:h-[12rem] flex items-center justify-between lg:ml-[45rem] lg:-mt-12 bg-white rounded-2xl max-w-[37rem] w-full shadow-[0px_3px_14px_0px_#D4D4D440]">
              <div className="lg:w-1/3 sm:mb-4 items-center lg:mr-6">
                <Calendar />
              </div>
              <div className="w-full lg:items-start sm:text-center h-full justify-center">
                <h1 className="font-bold lg:text-xl text-lg leading-tight">
                  Работаем без выходных
                </h1>
                <p className="mt-1 text-base leading-tight">
                  Будние дни: 09:00-00:00{" "}
                </p>
                <p className="mt-1 text-base leading-tight">
                  Выходные дни: 10:00-00:00{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="#menu" className="h-[160vh] bg-[#f9f9f9] px-20 w-full">
        <div className="">
          <div className={"w-full flex lg:justify-between h-16"}>
            <div>
              <h1 className="font-bold text-black text-2xl ">Наше меню</h1>
            </div>
            <div className="items-end flex leading-none text-red justify-end w-1/2 h-full">
              <p className="text-xl font-sans align-text-bottom text-end -mr-14 leading-tight">
                Посмотреть все меню
                <div
                  className={
                    "h-[2px] bg-gradient-to-r from-red to-[#D9021700] max-w-md relative -bottom-10"
                  }
                />
              </p>
              <div className="relative right-32 top-32">
                <MenuDashes />
              </div>
            </div>
          </div>
          <div className="flex mt-[6.4rem]">
            {mock_categories.map((item) => (
              <span
                onClick={() => onPressItem(item.id)}
                key={item.id}
                className={
                  activeItem === item.id
                    ? "border-red cursor-pointer border flex text-base font-thin rounded-full mr-3.5 bg-white w-fit px-[15px] py-[5px]"
                    : "flex text-base cursor-pointer hover:shadow font-thin rounded-full mr-3.5 bg-white w-fit px-[15px] py-[5px]"
                }
              >
                {item.food}
                <p>&nbsp; {item.name}</p>
              </span>
            ))}
          </div>
          <div className="lg:grid-cols-3 grid gap-6 mt-24">
            {mock_food.map((item) => (
              <FoodCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="#about"
        className="bg-gradient-to-l from-red to-light-red h-[150vh]"
      ></section>
      <section id="#reviews"></section>
      <section id="#map"></section>
      <section id="#job"></section>
    </main>
  );
};

export default HomePage;
