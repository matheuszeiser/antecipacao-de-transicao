import { ButtonHTMLAttributes } from "react";
import { ThemeButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: ButtonProps) => {
  return (
    <div>
      <ThemeButton {...rest}>
        SIMULE SUA ANTECIPAÇÃO
      </ThemeButton>
    </div>
  );
};

export default Button;
