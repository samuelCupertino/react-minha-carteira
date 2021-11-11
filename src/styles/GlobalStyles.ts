import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --primary: ${(props) => props.theme.color.primary};
        --secondary: ${(props) => props.theme.color.secondary};
        --tertiary: ${(props) => props.theme.color.tertiary};

        --white: ${(props) => props.theme.color.white};
        --black: ${(props) => props.theme.color.black};
        --gray: ${(props) => props.theme.color.gray};

        --success: ${(props) => props.theme.color.success};
        --info: ${(props) => props.theme.color.info};
        --warning: ${(props) => props.theme.color.warning};
    }

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

    button {
        cursor: pointer;
    }
`;
