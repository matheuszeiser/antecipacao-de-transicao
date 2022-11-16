import {InputHTMLAttributes} from "react";
import {ThemeInput} from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest}: InputProps) => {
    return <ThemeInput></ThemeInput>;
};

export default Input;
