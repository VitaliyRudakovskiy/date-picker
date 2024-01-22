import { CalendarItem } from '@constants/style/globalStyles';
import styled, { DefaultTheme } from 'styled-components';

import { IMonthStyledProps } from './types';

const chosenDay = ({ theme }: DefaultTheme) => theme.colors.chosenDay;
const primary = ({ theme }: DefaultTheme) => theme.colors.primary;
const text = ({ theme }: DefaultTheme) => theme.colors.text;

export const MonthContainer = styled(CalendarItem)<IMonthStyledProps>`
    color: ${({ $isMonthSelected }) => ($isMonthSelected ? primary : text)};
    background-color: ${({ $isMonthSelected }) => ($isMonthSelected ? chosenDay : primary)};
`;
