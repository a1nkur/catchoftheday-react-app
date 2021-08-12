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

    /* @font-face {
        font-family: "haymakerregular";
        src: url("./fonts/haymaker-webfont.eot");
        src: url("./fonts/haymaker-webfont.eot?#iefix") format("embedded-opentype"), url("./fonts/haymaker-webfont.woff") format("woff"), url("./fonts/haymaker-webfont.ttf") format("truetype"), url("./fonts/haymaker-webfont.svg#haymakerregular") format("svg");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'blanchcaps_inline';
        src: url("./fonts/blanch_caps_inline-webfont.eot");
        src: url("./fonts/blanch_caps_inline-webfont.eot?#iefix") format('embedded-opentype'), url("./fonts/blanch_caps_inline-webfont.woff") format('woff'), url("./fonts/blanch_caps_inline-webfont.ttf") format('truetype'), url("./fonts/blanch_caps_inline-webfont.svg#blanchcaps_inline") format('svg');
        font-weight: normal;
        font-style: normal;
    } */

    /* @font-face {
        font-family: "haymakerregular";
        src: local("GoldmanBold"),
        url("./Styles/fonts/haymaker-webfont.ttf") format("truetype");
        font-weight: normal;
    }

    .font-face--haymaker {
        font-family: 'Haymaker';
    } */


    ul li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
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
