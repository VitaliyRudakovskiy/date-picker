import styled, { DefaultTheme } from 'styled-components';

const fontM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontBold = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;
const cell = ({ theme }: DefaultTheme) => theme.sizes.cellSize;

export const DaysOfWeekWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, ${cell});
`;

export const DayOfWeek = styled.span`
    text-align: center;
    font-size: ${fontM}px;
    font-weight: ${fontBold};
    padding: ${gapS} 6px;
`;
