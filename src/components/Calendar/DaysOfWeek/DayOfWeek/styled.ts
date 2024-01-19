import styled, { DefaultTheme } from 'styled-components';

const fontM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontBold = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;

const DayOfWeekContainer = styled.span`
    text-align: center;
    font-size: ${fontM}px;
    font-weight: ${fontBold};
    padding: ${gapS} 6px;
`;

export default DayOfWeekContainer;