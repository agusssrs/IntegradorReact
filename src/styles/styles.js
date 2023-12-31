import { styled } from "styled-components";

export const GlobalStyles = styled`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Josefin Sans', sans-serif;
    }

    :root{
        --border:#ff914d;
        --hdrBnd:#3a3e4b;

    }

    html {
        scroll-behavior: smooth;
        transition: transform 0.6s;
    }

    body::-webkit-scrollbar{
        display: none;
    }
`