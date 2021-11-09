import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    :root {
        --color-primary: #0D0D0D;
        --color-secondary: #fff;
        --bg-primary: #1B1F38;
        --bg-secondary: #252A48;
    }    
`;