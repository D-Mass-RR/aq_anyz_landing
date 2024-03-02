/** Core **/
import { FC } from "react";

/** Components **/
import { MapCard } from "../MapCard.tsx";

/** Data **/
import { mock_map_data } from "../__mock__";

const MapSection: FC = () => {
  return (
    <section id="#map" className="h-[240vh] bg-[#f9f9f9]">
      <div className="px-60">
        <div className="w-full flex justify-center items-center">
          <h1 className="font-bold text-2xl mb-20">Наши филиалы</h1>
        </div>
        <div>
          {mock_map_data.map((item, index) => (
            <>
              {index === 1 && (
                <div className="border-b-[1px] my-10 border-[#D6D6D6]" />
              )}
              <MapCard key={index} {...item} />
              {index === 1 && (
                <div className="border-b-[1px] my-10 border-[#D6D6D6]" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MapSection };
