/** Core **/
import { FC, useState } from "react";

/** Components **/
import { Typography } from "components/Typography.tsx";

/** Assets **/
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { HeaderLink } from "./HeaderLink.tsx";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="absolute z-50 w-full">
      <nav>
        <div className="max-w-8xl mx-auto">
          <div className="flex mx-auto justify-between w-full px-8 lg:px-16">
            <div className="flex items-center w-full justify-between gap-16 lg:mt-12 mt-4">
              <Logo />
              {/* primary */}
              <div className="hidden h-full text-white text-base lg:flex gap-16 items-end">
                <HeaderLink to="menu">
                  <Typography>Меню</Typography>
                </HeaderLink>
                <HeaderLink to="products">
                  <Typography>Продукция</Typography>
                </HeaderLink>
                <HeaderLink to="about">
                  <Typography>О нас</Typography>
                </HeaderLink>
                <HeaderLink to="about">
                  <Typography>Карьера</Typography>
                </HeaderLink>
                <HeaderLink to="about">
                  <Typography>Контакты</Typography>
                </HeaderLink>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="flex gap-6">
              <div className="lg:hidden flex items-center pt-4">
                <button onClick={() => setOpen((prev) => !prev)}>
                  <Bars3Icon className="h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`absolute mt-2 w-full bg-white overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !open ? "h-0" : "h-72"
          }`}
        >
          <div className="px-8 pt-4 text-lg">
            <div className="flex flex-col gap-4 font-bold tracking-wider">
              <HeaderLink to="menu">
                <Typography>Меню</Typography>
              </HeaderLink>
              <HeaderLink to="menu">
                <Typography>Продукция</Typography>
              </HeaderLink>
              <HeaderLink to="menu">
                <Typography>О нас</Typography>
              </HeaderLink>
              <HeaderLink to="menu">
                <Typography>Карьера</Typography>
              </HeaderLink>
              <HeaderLink to="menu">
                <Typography>Контакты</Typography>
              </HeaderLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
