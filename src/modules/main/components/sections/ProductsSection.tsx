/** Core **/
import { FC } from "react";

/** Assets **/
import cakeImg from "../../../../assets/images/cake.png";
import meatImg from "../../../../assets/images/meat.png";
import fastfoodImg from "../../../../assets/images/fastfood.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ProductsSection: FC = () => {
  return (
    <section
      id="#products"
      className="bg-gradient-to-l px-20 pt-24 w-full from-red to-light-red h-[140vh]"
    >
      <div className="products_grid gap-6 max-h-[9.5rem]">
        <div className="products_grid__haeding px-8 py-6 rounded-2xl bg-opacity-30 text-white w-full bg-[#FFFFFF40] font-bold text-2xl">
          <h1 className="leading-tight">
            3 вида{" "}
            <h1 className="text-white text-opacity-30">нашей продукции</h1>
          </h1>
        </div>
        <div className="products_grid__cake flex justify-between bg-white p-4 rounded-2xl h-[42rem]">
          <div className="h-full w-1/2">
            <img
              src={cakeImg}
              alt="tatsy cake!"
              className="h-[100%] object-cover rounded-2xl"
            />
          </div>
          <div className="text-black w-1/2 px-6 py-3 flex-col justify-between h-[100%]">
            <div className="h-1/6 text-xl font-bold leading-8">
              <h1>Кондитерские изделия</h1>
            </div>
            <div className="items-end h-4/5 text-lg align-text-bottom leading-tight text-[#9B9B9B] justify-center flex">
              <p>
                Восхитительные торты, пирожные, печенье и множество других
                сладостей, созданные нашими мастерами, станут прекрасным
                дополнением к вашему чаепитию или особому событию.
              </p>
            </div>
          </div>
        </div>
        <div className="products_grid__foods bg-white flex px-3.5 py-3.5 rounded-2xl">
          <img
            src={meatImg}
            alt="juicy meat"
            className="max-w-[20rem] rounded-2xl object-cover"
          />
          <div className="text-black w-1/2 px-6 py-3 justify-between h-[100%]">
            <div className="h-1/6 text-xl font-bold mb-2 leading-8">
              <h1>Блюда</h1>
            </div>
            <div className="items-end h-4/5 text-lg align-text-bottom leading-tight text-[#9B9B9B] justify-center flex">
              <p>
                Каждое блюдо создано, чтобы удовлетворить самые изысканные
                вкусовые предпочтения.
              </p>
            </div>
          </div>
        </div>
        <div className="products_grid__fastfoods h-fit bg-white flex px-3.5 py-3.5 rounded-2xl">
          <img
            src={fastfoodImg}
            alt="juicy meat"
            className="max-w-[20rem] rounded-2xl object-cover"
          />
          <div className="text-black w-1/2 px-6 py-3 justify-between h-[100%]">
            <div className="h-1/6 text-xl font-bold mb-12 leading-8">
              <h1>Полуфабрикаты</h1>
            </div>
            <div className="items-end h-4/5 text-lg align-text-bottom leading-tight text-[#9B9B9B] justify-center flex">
              <p>
                Наши полуфабрикаты — это идеальное решение для тех, кто любит
                готовить дома, но ценит свое время.
              </p>
            </div>
          </div>
        </div>
        <div className="products_grid__more">
          <div className="px-8 py-6 h-full max-h-28 flex items-center justify-between rounded-2xl bg-opacity-30 text-white w-full bg-[#FFFFFF40] text-lg">
            <p className="w-2/3">Посмотреть нашу продукцию подробнее</p>
            <div className="rounded-full w-[3.4rem] h-[3.4rem] bg-red flex items-center justify-center">
              <ArrowRightIcon className="h-9 w-9 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductsSection };
