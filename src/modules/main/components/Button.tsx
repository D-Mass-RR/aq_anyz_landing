import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  children: string;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export { Button };
