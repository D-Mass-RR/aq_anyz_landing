/** Core **/
import { FC } from "react";

/** Assets **/
import { ReactComponent as Dashes } from "assets/svg/dashes.svg";
import { ReactComponent as Menu } from "assets/svg/menu.svg";
import { ReactComponent as Calendar } from "assets/svg/calendar.svg";
import { ReactComponent as Delivery } from "assets/svg/delivery.svg";

const AdvantagesSection: FC = () => {
  return (
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
  );
};
export { AdvantagesSection };
