import styled from "styled-components";

export const Container = styled.section`
    display: flex;

    width: 1000px;
    height: 700px;

    border-radius: 10px;
`;

export const ThemeSimulation = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: var(--color4);

    padding: 70px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    p{
        color: black;
        font-weight: 700;
        margin-bottom: 80px;
    }

    label + input + span {
        margin-bottom: 40px;
    }

    span {
        display: flex;
        font-size: 10px;
        color: gray;
    }
`;

export const ThemeResults = styled.div`
    width: 40%;
    height: 100%;
    background-color: var(--color2);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;
