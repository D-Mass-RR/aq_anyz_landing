import { ComponentPropsWithoutRef, FC } from "react";
import { ButtonTypes } from "../@types";
import { Typography } from "components/Typography.tsx";

type Props = ComponentPropsWithoutRef<"button"> & {
  children: string;
  variant?: ButtonTypes;
};

const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={className + " text-white py-4 "} onClick={onClick}>
      <Typography className="font-semibold text-lg sm:text-base">
        {children}
      </Typography>
    </button>
  );
};

export { Button };
