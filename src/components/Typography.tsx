import { FC } from "react";
import { TypographyTypes } from "../@types/components.ts";
import { COLORS } from "../theme/";

type Props = {
  type?: TypographyTypes;
  size?: number;
  color?: typeof COLORS;
  children: string;
};
const Typography: FC<Props> = ({ children }) => {
  return <span>{children}</span>;
};

export { Typography };
