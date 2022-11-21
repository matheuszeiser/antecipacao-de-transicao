import {ThemeResults, ThemeSimulation, Container} from "./style";
import {useState} from "react";
import Form from "../Form";

const ContainerSimulation = () => {
    const [resp, setResp] = useState([]);

    return (
        <Container>
            <ThemeSimulation>
                <p>Simule sua antecipação!</p>
                <Form setResp={setResp} />
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
