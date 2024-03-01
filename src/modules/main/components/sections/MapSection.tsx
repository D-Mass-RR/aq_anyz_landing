/** Core **/
import { FC } from "react";

/** Components **/
import { MapCard } from "../MapCard.tsx";

/** Data **/
import { mock_map_data } from "../__mock__";

const MapSection: FC = () => {
  return (
    <section id="#map" className={"h-[160vh] bg-[#f9f9f9]"}>
      <div className="px-60">
        <h1>Наши филиалы</h1>
        <div>
          {mock_map_data.map((item) => (
            <>
              <MapCard {...item} />
              <div className="border-b-[1px] my-8 border-[#D6D6D6]" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MapSection };
