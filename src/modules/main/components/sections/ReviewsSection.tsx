import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import avaImg from "../../../../assets/images/ava1.png";
import { ReactComponent as StarIcon } from "../../../../assets/svg/star.svg";

const ReviewsSection: FC = () => {
  return (
    <section className="h-[50vh] w-full bg-[#f9f9f9]" id="#reviews">
      <div className={"w-full"}>
        <Swiper
          slidesPerView={3}
          grabCursor
          loop
          centeredSlides={true}
          centeredSlidesBounds
          centerInsufficientSlides
          modules={[Navigation]}
          navigation={{
            enabled: true,
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          // onScrollbarDragStart={(swiper, event, ) => }
        >
          <SwiperSlide className="max-w-[40rem] w-full flex justify-start">
            <div className="w-fit p-5 bg-white flex">
              <div className="flex">
                <img
                  src={avaImg}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
                <p className="font-bold">Нургуль Нуркаева</p>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full flex justify-between px-60">
          <button className="custom-prev relative bottom-12 w-20 h-20 rounded-full bg-black" />
          <button className="custom-next relative bottom-12 w-20 h-20 rounded-full bg-black" />
        </div>
      </div>
    </section>
  );
};

export { ReviewsSection };
