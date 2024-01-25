import { flexCenter } from '@constants/style/presets';
import styled from 'styled-components';
import { ICalendarStyledProps } from './types';

export const CalendarWrapper = styled.div<ICalendarStyledProps>`
    ${flexCenter};
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.calendarWidth};
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme, $isRangeExist }) => $isRangeExist ? `${theme.gaps.s} ${theme.gaps.s} 0 0` : theme.gaps.s};
    padding: ${({ theme }) => theme.gaps.m};
`;
