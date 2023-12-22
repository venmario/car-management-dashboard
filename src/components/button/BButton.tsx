import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { IClassName, IFontSizing } from "../../interfaces";

interface BButtonProps extends IFontSizing, IClassName {
  children: ReactNode;
}
export default function BButton({
  children,
  typo,
  fontSize,
  weight,
  className,
}: BButtonProps) {
  return (
    <Button className={`${typo}-${fontSize}-${weight} ${className}`}>
      {children}
    </Button>
  );
}
