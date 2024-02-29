/** Data **/
import { useState } from "react";

/** Assets **/
import { ReactComponent as MenuDashes } from "assets/svg/menu_dashes.svg";

/** Components  **/
import { FoodCard } from "../FoodCard.tsx";

/** Data **/
import { mock_categories, mock_food } from "../__mock__";

const MenuSection = () => {
  // State
  const [activeItem, setActiveItem] = useState(0);

  // Handlers
  const onPressItem = (id: number) => {
    setActiveItem(id);
  };
  return (
    <section id="#menu" className="h-[160vh] bg-[#f9f9f9] px-20 w-full">
      <div>
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
  );
};

export { MenuSection };
