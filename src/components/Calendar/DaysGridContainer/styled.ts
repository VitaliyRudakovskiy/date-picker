import styled, { DefaultTheme } from 'styled-components';

const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;
const fontS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.s;

export const DaysGridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.p`
    font-size: ${fontS}px;
    text-align: center;
    padding: ${gapS} 6px;
`;
