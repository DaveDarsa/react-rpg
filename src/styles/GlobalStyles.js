import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        
    }
    .game{
        border:1px solid black;
        font-size: 2rem;
        padding:2rem 10rem;
        text-align: center;
        min-height: 25vh;
        .attacker,.defender{
            font-weight: bold;

        }   
    }
    .summary{
        margin-top: 2rem;
        font-size: 3rem;
        text-align: center;
        span{
            color:tomato;
        }
    }
    .winner{
        position: fixed;
        top:50vh;
        left:50vw;
        transform: translateX(-50%);
        text-align:center;
        font-size: 3.5rem;
        color: lime;
    }
    button{
        padding:1.2rem 1.5rem;
    }
`;
