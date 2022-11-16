import {ButtonHTMLAttributes} from "react";
import {ThemeButton} from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const Button = ({title, ...rest}: ButtonProps) => {
    return (
        <div>
            <ThemeButton {...rest}>{title}</ThemeButton>
            <div></div>
        </div>
    );
};

export default Button;
