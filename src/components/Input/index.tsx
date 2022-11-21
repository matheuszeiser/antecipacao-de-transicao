import {ThemeInput} from "./style";
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest}: InputProps) => {
    return <ThemeInput></ThemeInput>;
};

export default Input;
