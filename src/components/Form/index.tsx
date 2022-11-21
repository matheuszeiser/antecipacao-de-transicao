import {ThemeForm, ThemeInput, ThemeLabel} from "./style";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import Button from "../Button";
import api from "../../data/api";
import {toast} from "react-toastify";

interface FormProps {
    setResp: React.Dispatch<React.SetStateAction<never[]>>;
}

const Form = ({setResp}: FormProps) => {
    const schema = yup.object().shape({
        amount: yup.string().required("Amount is a required field"),
        installments: yup
            .string()
            .required("Installments is a required field."),
        mdr: yup.string().required("MDR is a required field."),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const getResults = (data: any) => {
        api.post("", data)
            .then((resp) => {
                console.log(resp.data);
                setResp(resp.data);
            })
            .catch((_) => toast.error("Verify the values"));
    };

    return (
        <ThemeForm onSubmit={handleSubmit(getResults)}>
            <ThemeLabel>Informe o valor da venda*</ThemeLabel>
            <ThemeInput placeholder="R$:" {...register("amount")} />
            <span>Min: 1000</span>
            <ThemeLabel>Em quantas parcelas*</ThemeLabel>
            <ThemeInput {...register("installments")} />
            <span>Máximo 12 parcelas</span>
            <ThemeLabel>Informe o percentual de MDR*</ThemeLabel>
            <ThemeInput {...register("mdr")} />
            <span>Máximo 99</span>
            <Button type="submit" title={"SIMULE SUA ANTECIPAÇÃO"}></Button>
        </ThemeForm>
    );
};

export default Form;
