/** Core **/
import { FC, useState } from "react";

/** Components **/
import { Typography } from "components/Typography.tsx";

/** Assets **/
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="absolute z-50 w-full">
      <nav>
        <div className="max-w-8xl mx-auto">
          <div className="flex mx-auto justify-between w-full px-8 lg:px-16">
            {/* Primary menu and logo */}
            <div className="flex items-center w-full justify-between gap-16 lg:mt-12 mt-4">
              <Logo />
              {/* primary */}
              <div className="hidden h-full text-white text-base lg:flex gap-16 items-end">
                <a
                  href="#"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Меню
                </a>
                <a
                  href="#"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  <Typography>Продукция</Typography>
                </a>
                <a
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  href="#"
                >
                  <Typography>О нас</Typography>
                </a>
                <a
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  href="#"
                >
                  <Typography>Карьера</Typography>
                </a>
                <a
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  href="#"
                >
                  <Typography>Контакты</Typography>
                </a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
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
              <a href="#">
                <Typography>Меню</Typography>
              </a>
              <a href="#">
                <Typography>Продукция</Typography>
              </a>
              <a href="#">
                <Typography>О нас</Typography>
              </a>
              <a href="#">
                <Typography>Карьера</Typography>
              </a>
              <a href="#">
                <Typography>Контакты</Typography>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
