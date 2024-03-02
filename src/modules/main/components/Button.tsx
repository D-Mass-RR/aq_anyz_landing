/** Core **/
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

/** Types **/
import { ButtonTypes } from "../@types";

/** Components **/
import { Typography } from "components/Typography.tsx";

type Props = ComponentPropsWithoutRef<"button"> & {
  children: string;
  /**
   *@ignore not used
   * **/
  variant?: ButtonTypes;

  color?: "gradient" | "default";
  icon?: ReactNode;
};

// TODO: remove margin from button
const Primary: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={
        className +
        " text-white py-4 w-full sm:w-60 mb-[20px] cursor-pointer hover:opacity-80 transition duration-200 ease-in-out rounded-2xl gradient "
      }
      onClick={onClick}
    >
      <Typography className="font-semibold text-lg sm:text-base">
        {children}
      </Typography>
    </button>
  );
};
const Secondary: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={
        "text-white py-4 w-full sm:w-60 mb-[20px] bg-opacity-10 rounded-2xl bg-white " +
        className
      }
      onClick={onClick}
    >
      <Typography className="font-normal text-white text-lg sm:text-base">
        {children}
      </Typography>
    </button>
  );
};

const Default: FC<Props> = ({
  children,
  onClick,
  icon,
  color = "gradient",
}) => {
  return (
    <button
      className={
        "text-white py-2 w-full h-fit sm:w-60 mb-[10px] rounded-xl flex items-center justify-center " +
        (color === "gradient" ? "gradient" : "bg-black")
      }
      onClick={onClick}
    >
      {icon}
      <Typography className="font-normal text-white text-lg sm:text-base">
        {children}
      </Typography>
    </button>
  );
};

/**
 * @example
 * ```jsx
 * <Button.Primanry>Click Me</Button.Primanry>
 * <Button.Secondary>Tap Me</Button.Secondary>
 * ```
 * **/
const Button = {
  Primary,
  Secondary,
  Default,
};

export { Button };
