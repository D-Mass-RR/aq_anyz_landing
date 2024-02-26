/** Core **/
import { FC } from "react";

/** Components **/
import { Header, FullPageSlider } from "../components";

const HomePage: FC = () => {
  return (
    <main className="h-full">
      <Header />
      <section className="bg-black">
        <FullPageSlider />
      </section>
    </main>
  );
};

export default HomePage;
