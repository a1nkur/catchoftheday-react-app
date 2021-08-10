import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* -------------------------------- CSS RESET ------------------------------- */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* ------------------------------ GLOBAL STYLES ----------------------------- */
    html, body {
        font-family: 'Haymaker', sans-serif;
        font-family: 'Blanch Caps Inline', sans-serif;                                        
        font-family: 'Open Sans Light', sans-serif;
        font-family: 'Open Sans Condensed', sans-serif;
        font-family: 'Open Sans', sans-serif;  

    }
`;
