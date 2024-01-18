import styled, { DefaultTheme } from 'styled-components';

const textL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;

const DateInput = styled.input`
    font-size: ${textL}px;
    width: 100%;
    border: none;
    background: transparent;
`;

export default DateInput;
