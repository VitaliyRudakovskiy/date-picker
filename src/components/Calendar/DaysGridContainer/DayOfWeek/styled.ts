import styled, { DefaultTheme } from 'styled-components';

import { IDayStyledProps } from './types';

const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;
const fontS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.s;
const fontWeightM = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.m;
const activeDay = ({ theme }: DefaultTheme) => theme.colors.text;
const disabledDay = ({ theme }: DefaultTheme) => theme.colors.disabledDay;
const chosenDay = ({ theme }: DefaultTheme) => theme.colors.chosenDay;
const primary = ({ theme }: DefaultTheme) => theme.colors.primary;
const borderDash = ({ theme }: DefaultTheme) => theme.colors.borderDash;
const rem05 = ({ theme }: DefaultTheme) => theme.gaps.m;
const cellWidth = ({ theme }: DefaultTheme) => theme.sizes.cellSize;

export const DayOfWeekButton = styled.div<IDayStyledProps>`
    font-size: ${fontS}px;
    font-weight: ${fontWeightM};
    text-align: center;
    padding: ${gapS} 6px;
    max-width: ${cellWidth};
    color: ${({ $isActive, $isWeekend, $isDaySelected }) =>
        !$isActive ? disabledDay : $isDaySelected ? primary : $isWeekend ? 'red' : activeDay};
    background-color: ${({$isDaySelected}) => $isDaySelected ? chosenDay : primary};
    border: 1px solid ${primary};
    border-color: ${({ $isToday }) => ($isToday ? chosenDay : 'none')};
    border-radius: ${rem05};
    cursor: pointer;

    &:hover {
        border: 1px dashed ${borderDash};
    }
`;
