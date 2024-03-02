/** Core **/
import { FC, PropsWithChildren } from "react";

import { scrollById } from "../../../../utils";

type Props = {
  to?: string;
} & PropsWithChildren;
const HeaderLink: FC<Props> = ({ to, children }) => {
  return (
    <a
      onClick={() => scrollById({ id: to })}
      className="relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
    >
      {children}
    </a>
  );
};

export { HeaderLink };
