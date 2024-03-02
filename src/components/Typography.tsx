/** Core **/
import { FC, ReactNode } from "react";

/** Types **/
import { TypographyTypes } from "../theme/typography";
import { ValueOf } from "../@types/helpers.ts";

type Props = {
  children: ReactNode;
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
