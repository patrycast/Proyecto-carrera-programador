import { createGlobalStyle } from "styled-components"

export const GlobalStyles= createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
       
    }
    :root{
        --bg-color: #282726;
        --text-white: #fff; 
        --nav-color: #231516;
        --p-error: #f9401f;
        --input-borderColor: #7e7d7d;
        --color-links: #ff4d6d;
        --color-desc: #cac5c5;
        --background-input: #131313;
        --btn-linear-gradient:linear-gradient(269deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
        /* --linear-gradient-yellow: linear-gradient(45deg, #c7ff4d, #df5505); */
        --linear-gradient-yellow: linear-gradient(269deg,rgb(70, 17, 107) 0%, rgb(101, 8, 8) 50%, rgb(247, 147, 7) 100%);
    }

     html{
        scroll-behavior: smooth;
        }
    
    body{
        background-color: var(--bg-color);
        color: var(--text-white);
        font-family: "poppins";
    }
    h2{
        font-weight: bold;
        background: var(--btn-linear-gradient);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    a{
        color: inherit;
    }
`;