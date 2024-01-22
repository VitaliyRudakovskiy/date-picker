import { CalendarItem } from '@constants/style/globalStyles';
import styled, { DefaultTheme } from 'styled-components';

import { IYearStyledProps } from './types';

const chosenDay = ({ theme }: DefaultTheme) => theme.colors.chosenDay;
const primary = ({ theme }: DefaultTheme) => theme.colors.primary;
const text = ({ theme }: DefaultTheme) => theme.colors.text;

export const YearContainer = styled(CalendarItem)<IYearStyledProps>`
    color: ${({ $isYearSelected }) => ($isYearSelected ? primary : text)};
    background-color: ${({ $isYearSelected }) => ($isYearSelected ? chosenDay : primary)};
`;
