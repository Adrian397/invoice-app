import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    
}


body{
    background-color: rgba(248, 248, 251, 1);
}
`;

export default GlobalStyle;
