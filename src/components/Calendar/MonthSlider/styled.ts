import { flexBetween } from '@constants/style/presets';
import styled, { DefaultTheme } from 'styled-components';

const dark = ({ theme }: DefaultTheme) => theme.colors.month;
const hoverColor = ({ theme }: DefaultTheme) => theme.colors.chosenDay;
const openSans = ({ theme }: DefaultTheme) => theme.fonts.fontFamily.openSans;
const fontM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontBold = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const gapM = ({ theme }: DefaultTheme) => theme.gaps.m;

export const MonthSliderWrapper = styled.div`
    width: 100%;
    ${flexBetween};
    padding: ${gapM} 0;
`;

export const MonthSliderIcon = styled.img`
    color: ${dark};
    cursor: pointer;
`;

export const MonthNameContainer = styled.h3`
    font-family: ${openSans};
    font-size: ${fontM}px;
    font-weight: ${fontBold};
    color: ${dark};
    cursor: pointer;
`;

export const MonthName = styled.span`
    &:hover {
        color: ${hoverColor};
    }
`;

export const Year = styled.span`
    &:hover {
        color: ${hoverColor};
    }
`;
