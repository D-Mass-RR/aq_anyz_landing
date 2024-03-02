/** Core **/
import { FC } from "react";

/** Assets **/
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as TikTok } from "assets/svg/tiktok.svg";
import { ReactComponent as Insta } from "assets/svg/insta.svg";

/** Components **/
import { HeaderLink } from "./Header/HeaderLink.tsx";
import { Typography } from "components/Typography.tsx";

const Footer: FC = () => {
  return (
    <footer
      id="#footer"
      className="relative bottom-0 footer_gradient w-full h-[35vh] py-[40px] px-[80px]"
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="flex items-center">
          <a href="https://www.instagram.com/aq_anyz/">
            <Insta className="mr-4 cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@aqanyzvd">
            <TikTok className="cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="border-b-[1px] my-8 border-[#2D2D2D]" />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex w-2/5 justify-between">
          <HeaderLink to="#menu">
            <Typography className="text-white">Меню</Typography>
          </HeaderLink>
          <HeaderLink to="products">
            <Typography className="text-white">Продукция</Typography>
          </HeaderLink>
          <HeaderLink to="about">
            <Typography className="text-white">О нас</Typography>
          </HeaderLink>
          <HeaderLink to="#">
            <Typography className="text-white">Карьера</Typography>
          </HeaderLink>
          <HeaderLink to="map">
            <Typography className="text-white">Контакты</Typography>
          </HeaderLink>
        </div>
        <div className="relative bottom-0 mt-12">
          <p className="text-[#626262]">
            ТОО “Aq Anyz”© 2024 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
