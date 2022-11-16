import Button from "../Button";
import {ThemeInput} from "../Input/style";
import {ThemeLabel} from "../Label/style";
import {ThemeResults, ThemeSimulation, Container} from "./style";

const ContainerSimulation = () => {
    return (
        <Container>
            <ThemeSimulation>
                <p>Simule sua antecipação!</p>
                <ThemeLabel>Informe o valor da venda*</ThemeLabel>
                <ThemeInput placeholder="Valor da venda" value={"R$: "} />
                <span></span>
                <ThemeLabel>Em quantas parcelas*</ThemeLabel>
                <ThemeInput />
                <span>Máximo 12 parcelas</span>
                <ThemeLabel>Informe o percentual de MDR*</ThemeLabel>
                <ThemeInput />
                <span></span>
                <Button title={"SIMULE SUA ANTECIPAÇÃO"}></Button>
            </ThemeSimulation>
            <ThemeResults></ThemeResults>
        </Container>
    );
};

export default ContainerSimulation;
