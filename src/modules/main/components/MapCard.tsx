import { FC } from "react";

import { IMapData } from "../@types/data.ts";

type Props = IMapData;

const MapCard: FC<Props> = ({ image, icon, title, several_branches }) => {
  return (
    <div className="flex flex-row w-fit">
      <div className="w-1/2 mr-4">
        <img src={image} alt="map" />
      </div>
      <div className="w-1/2 ml-4 ">
        <div className="h-3/5 bg-white p-5">
          <div className="flex">
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
          <div></div>
          <div></div>
        </div>
        <div className="w-2/5"></div>
      </div>
    </div>
  );
};

export { MapCard };
