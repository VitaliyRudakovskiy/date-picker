import styled, { createGlobalStyle } from 'styled-components';

import COLORS from './colors';
import FONTS from './fonts';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${FONTS.fontFamily.openSans};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        outline: none;
        color: ${COLORS.text};
    }
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
    color: ${COLORS.disabledDay};
    cursor: pointer;
`;

export default GlobalStyle;
