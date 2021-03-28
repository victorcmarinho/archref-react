import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    button {
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    
`;
