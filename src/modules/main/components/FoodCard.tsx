import { FC } from "react";
import { IFood } from "../@types";

type Props = IFood;
const FoodCard: FC<Props> = ({ image, title, desc, price }) => {
  return (
    <div className="shadow-[0px_3px_14px_0px_#D4D4D440] relative min-w-[25rem] rounded-2xl">
      <img src={image} alt={image} className="w-full rounded-2xl" />
      <div className="rounded-2xl pt-4 pb-4 px-6 w-full h-[45%] absolute bottom-0 bg-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-lg text-black">{title}</h1>
          <h2 className="text-red font-bold text-lg ">{price}</h2>
        </div>
        <div>
          <p className="text-sm text-[#9F9F9F] leading-tight">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export { FoodCard };
