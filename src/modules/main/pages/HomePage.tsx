/** Core **/
import { FC } from "react";

/** Components **/
import { Header } from "../components";
import { MainSection, AdvantagesSection } from "../components/sections";

/** Assets **/
import bgImg from "../../../assets/images/bg1.png";
import bgImg2 from "../../../assets/images/bg2.png";
import cakeImg from "../../../assets/images/cake.png";
import meatImg from "../../../assets/images/meat.png";
import fastfoodImg from "../../../assets/images/fastfood.png";
import teaImg from "../../../assets/images/tea.png";
import assetImg from "../../../assets/images/asset.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

/** Styles **/
import "swiper/css";
import "../styles/main.css";

const HomePage: FC = () => {
  return (
    <main className="h-full sm:overflow-x-hidden">
      <Header />
      <MainSection />
      <AdvantagesSection />

      <section
        id="#products"
        className="bg-gradient-to-l px-20 pt-24 w-full from-red to-light-red h-[130vh]"
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
                <ArrowRightIcon className="h-9 w-9 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="#about"
        className="bg-[#f9f9f9] w-full h-[300vh] px-20 pt-40"
      >
        <div className="flex">
          <div className="w-1/2 shadow-[0px_3px_14px_0px_#D4D4D440] py-4 px-8 rounded-2xl h-[39rem] bg-white mr-2">
            <h5 className="text-2xl font-bold text-red">О нас</h5>
            <div className="mt-20 text-lg leading-tight">
              <p className="mb-6">
                Мы работаем на рынке Казахстана уже более 10 лет. За это время
                жители и гости страны успели по достоинству оценить нашу кухню,
                а о некоторых ее блюдах уже впору слагать легенды!
              </p>
              <p className="mb-6">
                Все эти годы вы были знакомы с семьей наших ресторанов под
                такими названиями как:{" "}
                <span className="text-red">«Восточный двор»</span>,{" "}
                <span className="text-red"> «Узбечка №1»</span> и{" "}
                <span className="text-red">«Z-1»</span>.
              </p>
              <p>
                Сохраняя самое лучшее от каждого из них, мы с радостью сообщаем
                Вам, о перезапуске в новом формате под единым именем -{" "}
                <span className="font-bold text-red">AQ AÑYZ</span>
              </p>
            </div>
          </div>
          <div className="w-1/2 h-[38rem] ml-2">
            <div className="w-full mb-3.5 h-1/2">
              <img
                src={teaImg}
                alt="tea"
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
            <div className="w-full h-1/2">
              <img
                src={assetImg}
                alt="asset"
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className={"mt-80"}>
          <div className="absolute flex items-center justify-start w-[46rem] h-[46rem] overflow-hidden rounded-[80px] bg-red -left-36 rotate-[56deg]">
            <img
              src={bgImg}
              className="-rotate-[56deg] relative left-20 bottom-28 object-contain"
              alt="Aq anyz food"
            />
          </div>
          <div className={""}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={"mt-80"}>
          <div className="absolute mt-80 flex items-center justify-start w-[46rem] h-[46rem] overflow-hidden rounded-[80px] bg-red -right-36 rotate-[24deg]">
            <img
              src={bgImg2}
              className="-rotate-[24deg] relative right-20 top-28 object-contain"
              alt="Aq anyz food"
            />
          </div>
          <div className={""}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section id="#reviews"></section>
      <section id="#map"></section>
      <section id="#job"></section>
    </main>
  );
};

export default HomePage;
