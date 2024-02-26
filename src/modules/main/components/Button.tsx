import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  children: string;
};

const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
