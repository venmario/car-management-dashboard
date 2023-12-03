import { FormLabel } from "react-bootstrap";
import { IClassName, IFontSizing } from "../../interfaces";
import { ReactNode } from "react";

interface TextViewProps extends IFontSizing, IClassName {
  children: ReactNode;
}

export default function TextView({
  children,
  typo,
  fontSize,
  weight,
  className,
}: TextViewProps) {
  return (
    <FormLabel className={`${typo}-${fontSize}-${weight} ${className}`}>
      {children}
    </FormLabel>
  );
}
