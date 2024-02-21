import styled from 'styled-components';

import { flexCenter } from '@/theme/style/presets';

import { ICalendarStyledProps } from './types';

export const CalendarWrapper = styled.div<ICalendarStyledProps>`
    ${flexCenter};
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.calendarWidth};
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme, $isRangeExist, $isWithTasks }) =>
        $isRangeExist || $isWithTasks ? `${theme.gaps.s} ${theme.gaps.s} 0 0` : theme.gaps.s};
    padding: ${({ theme }) => theme.gaps.m};
`;
