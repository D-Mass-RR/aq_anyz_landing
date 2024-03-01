/** Core **/
import { FC } from "react";

/** Components **/
import { Header } from "../components";
import {
  MainSection,
  AdvantagesSection,
  AboutSection,
  ProductsSection,
  ReviewsSection,
  MapSection,
} from "../components/sections";

/** Styles **/
import "swiper/css";
import "../styles/main.css";

const HomePage: FC = () => {
  return (
    <main className="h-full overflow-y-hidden overflow-x-hidden tracking-tight leading-tight">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <ProductsSection />
      <AboutSection />
      <ReviewsSection />
      <MapSection />
      <section id="#vacancies"></section>
      <footer id="#footer"></footer>
    </main>
  );
};

export default HomePage;
