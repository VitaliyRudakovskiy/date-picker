import { flexCenter } from '@constants/style/presets';
import styled, { DefaultTheme } from 'styled-components';

const calendarWidth = ({ theme }: DefaultTheme) => theme.sizes.calendarWidth;
const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;
const gapM = ({ theme }: DefaultTheme) => theme.gaps.m;
const borderColor = ({ theme }: DefaultTheme) => theme.colors.border;

export const CalendarWrapper = styled.div`
    ${flexCenter};
    width: 100%;
    max-width: ${calendarWidth};
    flex-direction: column;
    border: 1px solid ${borderColor};
    border-radius: ${gapS};
    padding: ${gapM};
`;
