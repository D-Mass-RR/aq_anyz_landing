/** Core **/
import { FC } from "react";

/** Assets **/
import teaImg from "../../../../assets/images/tea.png";
import assetImg from "../../../../assets/images/asset.png";
import bgImg from "../../../../assets/images/bg1.png";
import bgImg2 from "../../../../assets/images/bg2.png";

const AboutSection: FC = () => {
  return (
    <section id="#about" className="bg-[#f9f9f9] w-full h-[400vh] px-20 pt-40">
      <div className="flex">
        <div className="w-1/2 shadow-[0px_3px_14px_0px_#D4D4D440] py-4 px-8 rounded-2xl h-[39rem] bg-white mr-2">
          <h5 className="text-2xl font-bold text-red">О нас</h5>
          <div className="mt-20 text-lg leading-tight">
            <p className="mb-6">
              Мы работаем на рынке Казахстана уже более 10 лет. За это время
              жители и гости страны успели по достоинству оценить нашу кухню, а
              о некоторых ее блюдах уже впору слагать легенды!
            </p>
            <p className="mb-6">
              Все эти годы вы были знакомы с семьей наших ресторанов под такими
              названиями как: <span className="text-red">«Восточный двор»</span>
              , <span className="text-red"> «Узбечка №1»</span> и{" "}
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
      <div className={"mt-60"}>
        <div className="absolute mt-24 flex items-center justify-start w-[46rem] h-[46rem] overflow-hidden rounded-[80px] bg-red -left-48 rotate-[56deg]">
          <img
            src={bgImg}
            className="-rotate-[56deg] relative left-20 bottom-28 object-contain"
            alt="Aq anyz food"
          />
        </div>
        <div className={"ml-96"}>
          <div className="bg-white rounded-2xl max-w-[47rem] p-5 w-fit mb-8">
            <h1 className="text-red font-bold text-2xl tracking-tight">
              Вкус и качество наших блюд
            </h1>
            <br />
            <br />
            <p className="text-lg leading-tight">
              Мы верим, что вкусное блюдо начинается с качественных
              ингредиентов.
            </p>
          </div>
          <div className="bg-white rounded-2xl lg:ml-32 p-5 w-fit max-w-[45rem] mb-8">
            <p className="text-lg leading-tight">
              <span className={"text-red"}>
                Наши повара тщательно отбирают только свежие и натуральные
                продукты для каждого заказа
              </span>
              , гарантируя, что каждое блюдо, выходящее из нашей кухни,
              соответствует высочайшим стандартам вкуса и качества.
            </p>
          </div>
          <div className="bg-white rounded-2xl lg:ml-60 p-5 max-w-[41rem] w-fit mb-8">
            <p className="text-lg leading-tight">
              <span className={"text-red"}>
                Наше меню разнообразно и может удовлетворить любой вкус
              </span>
              , от классических блюд до эксклюзивных авторских рецептов, каждое
              из которых готовится с душой и творческим подходом.
            </p>
          </div>
        </div>
      </div>
      <div className={"mt-96"}>
        <div className="absolute mt-24 flex items-center justify-start w-[46rem] h-[46rem] overflow-hidden rounded-[80px] bg-red -right-44 rotate-[24deg]">
          <img
            src={bgImg2}
            className="-rotate-[24deg] relative right-24 top-28 object-contain"
            alt="Aq anyz food"
          />
        </div>
        <div className="flex flex-col items-end pr-96 w-full">
          <div className="bg-white rounded-2xl max-w-[43rem] p-5 w-fit mb-8">
            <h1 className="text-red font-bold text-2xl tracking-tight">
              Сервис, предоставляемый нашими сотрудниками
            </h1>
            <br />
            <br />
            <p className="text-lg leading-tight">
              Мы понимаем, что впечатления от посещения начинаются не только с
              еды, но и с качества обслуживания.
            </p>
          </div>
          <div className="bg-white flex mr-40 justify-end rounded-2xl p-5 w-fit max-w-[41rem] mb-8">
            <p className="text-lg leading-tight">
              <span className={"text-red"}>
                Наша команда — это сердце нашего заведения.&nbsp;
              </span>
              <br />
              Каждый сотрудник, от официантов до поваров, стремится предоставить
              вам исключительный сервис, который заставит вас чувствовать себя
              особенными и желанными гостями.
            </p>
          </div>
          <div className="bg-white flex mr-72 justify-end rounded-2xl p-5 w-fit max-w-[37.5rem] mb-8">
            <p className="text-lg leading-tight">
              Наша команда — это сердце нашего заведения.&nbsp; Мы обучаем наш
              персонал быть внимательными к деталям, предупредительными и
              дружелюбными чтобы,
              <br />
              <span className={"text-red"}>
                каждый ваш визит был незабываемым.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
