/** Core **/
import { FC } from "react";

/** Components **/
import { Footer, Header } from "../components";
import {
  MainSection,
  AdvantagesSection,
  AboutSection,
  ProductsSection,
  MapSection,
} from "../components/sections";

/** Styles **/
import "swiper/css";
import "../styles/main.css";
import { MenuSection } from "../components/sections/MenuSection.tsx";

const HomePage: FC = () => {
  return (
    <main className="h-full overflow-y-hidden overflow-x-hidden bg-[#f9f9f9] tracking-tight leading-tight">
      <Header />
      <MainSection />
      <AdvantagesSection />
      <MenuSection />
      <ProductsSection />
      <AboutSection />
      <MapSection />
      <section id="#vacancies"></section>
      <Footer />
    </main>
  );
};

export default HomePage;
