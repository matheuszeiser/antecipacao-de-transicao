import Button from "../Button";
import {ThemeInput} from "../Input/style";
import {ThemeLabel} from "../Label/style";
import {ThemeResults, ThemeSimulation, Container} from "./style";
import {useState} from "react";
import api from "../../data/api";

// interface DataInterface {
//     amount: string;
//     installments: string;
//     mdr: string;
// }

const ContainerSimulation = () => {
    const [amount, setAmount] = useState("1000");
    const [installments, setInstallments] = useState("5");
    const [mdr, setMrd] = useState("10");
    const [resp, setResp] = useState([]);

    const getResults = () => {
        api.post("", {
            amount: amount,
            installments: installments,
            mdr: mdr,
        }).then((resp) => {
            console.log(resp.data);
            setResp(resp.data);
        });
    };

    return (
        <Container>
            <ThemeSimulation>
                <p>Simule sua antecipação!</p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        getResults();
                    }}
                >
                    <ThemeLabel>Informe o valor da venda*</ThemeLabel>
                    <ThemeInput
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                    <span></span>
                    <ThemeLabel>Em quantas parcelas*</ThemeLabel>
                    <ThemeInput
                        value={installments}
                        onChange={(e) => {
                            setInstallments(e.target.value);
                        }}
                    />
                    <span>Máximo 12 parcelas</span>
                    <ThemeLabel>Informe o percentual de MDR*</ThemeLabel>
                    <ThemeInput
                        value={mdr}
                        onChange={(e) => {
                            setMrd(e.target.value);
                        }}
                    />
                    <span></span>
                    <Button
                        type="submit"
                        title={"SIMULE SUA ANTECIPAÇÃO"}
                    ></Button>
                </form>
            </ThemeSimulation>
            <ThemeResults>
                <p>Você receberá:</p>
                <hr></hr>
                <div>
                    <span>Amanhã: R$: {resp["1"]} </span>
                    <span>Em 15 dias: R$: {resp["15"]} </span>
                    <span>Em 30 dias: R$: {resp["30"]}</span>
                    <span>Em 90 dias: R$: {resp["90"]}</span>
                </div>
            </ThemeResults>
        </Container>
    );
};

export default ContainerSimulation;
