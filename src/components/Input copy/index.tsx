import {InputHTMLAttributes} from "react";
import {ThemeInput} from "../Input/style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest}: InputProps) => {
    return <ThemeInput></ThemeInput>;
};

export default Input;
