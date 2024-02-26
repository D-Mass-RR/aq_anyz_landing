import { FC, useState } from "react";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="absolute z-50 w-full">
      <nav>
        <div className="max-w-8xl mx-auto">
          <div className="flex mx-auto justify-between w-full px-16">
            {/* Primary menu and logo */}
            <div className="flex items-center w-full justify-between gap-16 lg:mt-12">
              {/* logo */}
              <Logo />
              {/* primary */}
              <div className="hidden lg:flex text-white gap-8 items-end h-full">
                <a href="#">Меню</a>
                <a href="#">Продукция</a>
                <a href="#">О нас</a>
                <a href="#">Карьера</a>
                <a href="#">Контакты</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setOpen((prev) => !prev)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !open ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
