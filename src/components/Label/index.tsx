import {LabelHTMLAttributes} from "react";
import {ThemeLabel} from "./style";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({...rest}: LabelProps) => {
    return <ThemeLabel></ThemeLabel>;
};

export default Label;
