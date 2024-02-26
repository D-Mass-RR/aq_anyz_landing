/** Core **/
import { FC } from "react";

/** Components **/
import { Header, FullPageSlider, Button } from "../components";

const HomePage: FC = () => {
  return (
    <main className="h-full">
      <Header />
      <section className="bg-black">
        <FullPageSlider />
        <Button className={"bg-gradient-to-b from-red to-light-red"}>
          Press me
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
