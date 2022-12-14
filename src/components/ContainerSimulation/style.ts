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

    p {
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
    display: flex;
    flex-direction: column;

    width: 40%;
    height: 100%;

    background-color: var(--color2);

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    p {
        margin: 70px 0 10px 0;
        color: black;
        font-style: italic;
        font-weight: 600;
    }

    hr {
        text-align: center;

        margin: 0 auto;

        width: 60%;
        height: 2px;
        border-radius: 15px;

        background-color: var(--color4);

        border: none;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding-left: 50px;
        margin: 50px 0 50px 0;

        span {
            margin: 30px 0 30px 0;
        }
    }
`;
