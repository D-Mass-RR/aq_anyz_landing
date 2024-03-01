/** Core **/
import { FC } from "react";

/** Components **/
import { Header } from "../components";
import {
  MainSection,
  AdvantagesSection,
  AboutSection,
  ProductsSection,
} from "../components/sections";

/** Styles **/
import "swiper/css";
import "../styles/main.css";

const HomePage: FC = () => {
  return (
    <main className="h-full overflow-y-hidden sm:overflow-x-hidden tracking-tight leading-tight">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <ProductsSection />
      <AboutSection />
      <section id="#reviews"></section>
      <section id="#map"></section>
      <section id="#job"></section>
    </main>
  );
};

export default HomePage;
