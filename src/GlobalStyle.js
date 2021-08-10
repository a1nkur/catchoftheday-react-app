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

    /******************************************************************************/

    /* The emerging W3C standard that is currently Firefox-only */
    * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
    }

    /* Works on Chrome/Edge/Safari */
    *::-webkit-scrollbar {
    width: 6px;
    }
    *::-webkit-scrollbar-track {
    background: transparent;
    }
    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.7);
    border-radius: 20px;
    border: transparent;
    }

    /******************************************************************************/
`;
