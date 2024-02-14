import styled, { createGlobalStyle } from 'styled-components';

import COLORS from './colors';
import FONTS from './fonts';
import GAPS from './gaps';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${FONTS.fontFamily.openSans};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        outline: none;
        color: ${COLORS.text};
        user-select: none;
    }
`;

export const CalendarItem = styled.div`
    font-size: ${FONTS.fontSize.s}px;
    font-weight: ${FONTS.fontWeight.m};
    text-align: center;
    padding: ${GAPS.s} 6px;
    border: 1px solid ${COLORS.primary};
    border-radius: ${GAPS.m};
    cursor: pointer;

    &:hover {
        border: 1px dashed ${COLORS.borderDash};
    }
`;

export default GlobalStyle;
