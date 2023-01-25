import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{

        --Green-0:rgb(244,244,244);
        
        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
        
        --textBtn:#FFFFFF;


        --Green-8:rgb(214,223,45);
        --Green-7:rgb(214,223,90);
        --Green-6:rgb(27,162,161);
        --Green-5:#379B7B;
        --Green-4:#46BF99;
        --Green-3:#6BCDAE;
        --Green-2:#91DBC3;
        --Green-1:#B7E8D8;
        
        --Brown-1:rgb(111,104,93);
        
        --Sucess:#3FE864;
        --Negative:#E83F5B;

        --toastify-color-dark: var(--Green-5);
        --toastify-color-success: var(--Sucess);
        --toastify-color-error: var(--Negative);

    }
    body{
        background: white;       

        background-color: var(--Green-0);
    }
    
    h1,h2,h3{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: var(--Brown-1);
    }

    h1{
        font-size: 50px;
    }
    h3{
        font-size: 25px;
    }

    button{

        cursor: pointer;
    }

    a{
        text-decoration:none
    }

    ::-webkit-scrollbar {
    width: 10px;
    }
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: var(--Green-5);
    }




`;

export const rotated = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;
