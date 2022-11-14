import { createGlobalStyle } from "styled-components";

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
        --color1 #889dcb;
        --color2 #a1b6d8;
        --color3 #bacee5;
        --color4 #d3e7f2;
        --color5 #ecffff;
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
