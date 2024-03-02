/** Core **/
import { FC } from "react";

/** Types **/
import { IMapData } from "../@types/data.ts";

/** Components **/
import {
  MapPinIcon,
  CalendarDaysIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./index.ts";

type Props = IMapData;

const MapCard: FC<Props> = ({
  image,
  icon,
  title,
  several_branches,
  address_list,
  schedule,
}) => {
  // Handlers
  const goTo2Gis = () => {
    window.location.replace("https://2gis.kz/astana");
  };
  return (
    <div className="flex flex-row w-fit">
      <div className="w-1/2 mr-4">
        <img src={image} alt="map" />
      </div>
      <div className="w-1/2 ml-4 ">
        <div className="h-[70%] bg-white rounded-2xl p-8">
          <div className="flex mb-8">
            <img
              src={icon}
              alt={icon}
              className="rounded-full w-16 h-16 mr-3.5 "
            />
            <div className="text-lg">
              <h1 className="text-lg font-bold">{title}</h1>
              {several_branches && (
                <p className="text-red font-light">
                  {several_branches + " филиала"}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            {address_list.map((item, index) => (
              <p
                className="flex items-center font-light mb-2 text-lg"
                key={index}
              >
                <MapPinIcon className="h-6 w-6 text-gray-500 mr-2 " />
                {item}
              </p>
            ))}
          </div>
          <div className="flex">
            <CalendarDaysIcon className="h-6 w-6 mr-2 text-gray-500" />
            <div className="text-lg">
              {schedule.map((item, index) => (
                <p className="mb-2" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3.5 w-full">
          <Button.Default
            icon={<PhoneIcon className="w-6 h-6 text-gray-500 mr-2" />}
          >
            Контакты
          </Button.Default>
          <Button.Default
            onClick={goTo2Gis}
            color={"default"}
            icon={<MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />}
          >
            Перейти в 2GIS
          </Button.Default>
        </div>
      </div>
    </div>
  );
};

export { MapCard };
