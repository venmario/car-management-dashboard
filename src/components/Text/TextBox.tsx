import { FormControl } from "react-bootstrap";
import { IClassName, IFontSizing } from "../../interfaces";

interface TextBoxProps extends IFontSizing, IClassName {
  type?: string;
  placeholder?: string;
  variant?: string;
  value?: string;
  borderColor?: string;
  onChange?: () => void;
}
export default function TextBox({
  type = "input",
  placeholder = "",
  borderColor = "grey",
  typo = "body",
  fontSize = 12,
  weight = "reguler",
  className = "",
  value = "",
}: TextBoxProps): React.JSX.Element {
  const style = {
    borderColor: borderColor,
    border: "1px solid rgba(0, 0, 0, 0.10)",
  };
  return (
    <FormControl
      type={type}
      placeholder={placeholder}
      style={style}
      value={value}
      className={`${typo}-${fontSize}-${weight} ${className}`}
    />
  );
}
