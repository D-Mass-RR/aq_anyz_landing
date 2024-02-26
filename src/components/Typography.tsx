import { FC } from "react";
import { COLORS } from "../theme/";
import { FONT_SIZES } from "../theme/fontSizes.ts";

type Props = {
  size?: FONT_SIZES | number;
  color?: typeof COLORS;
  children: string;
  styles?: string;
};
const Typography: FC<Props> = ({ children, styles }) => {
  return <span className={styles}>{children}</span>;
};

export { Typography };
