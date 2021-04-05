import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        font-size: 62.5%;
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
        font-size: 1.6rem;
    }
    button {
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    
`;
