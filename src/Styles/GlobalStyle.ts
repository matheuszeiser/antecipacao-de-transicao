import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }
    :root{
        --black: #121214;
        --color1: #04394e;
        --color2: #00875e;
        --color3: #a7cc15;
        --color4: #f5cc17;
        --color5: #f56217;
    }

    body{
        background-color: var(--black);
        color: var(--white);
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
