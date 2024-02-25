import { FC } from "react";
import { TypographyTypes } from "../@types/components.ts";
import { COLORS } from "../theme/";

type Props = {
  type?: TypographyTypes;
  size?: number;
  color?: typeof COLORS;
};
const Typography: FC<Props> = ({ type, size, color }) => {
  return <>Hello Aq Anyz!</>;
};

export default Typography;
