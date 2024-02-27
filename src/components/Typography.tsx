import { FC } from "react";
import { TypographyTypes } from "../theme/typography";
import { ValueOf } from "../@types/helpers.ts";

type Props = {
  children: string;
  variant?: ValueOf<typeof TypographyTypes>;
  className?: string;
};
const Typography: FC<Props> = ({
  children,
  variant = TypographyTypes.base,
  className,
}) => {
  return <span className={variant + className && className}>{children}</span>;
};

export { Typography };
