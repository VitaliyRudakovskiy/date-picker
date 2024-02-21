import styled from 'styled-components';

import { calculateBackgroundColor, calculateTextColor } from '@/helpers/calculateStyles';

import { IDayStyledProps } from './types';

export const DayOfWeekButton = styled.div<IDayStyledProps>`
    position: relative;
    font-size: ${({ theme }) => theme.fonts.fontSize.s}px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    text-align: center;
    padding: ${({ theme }) => theme.gaps.s} 6px;
    max-width: ${({ theme }) => theme.sizes.cellSize};
    color: ${({ $isActive, $isWeekend, $isDaySelected, $isHoliday, $range }) =>
        calculateTextColor($isActive, $isWeekend, $isDaySelected, $isHoliday, $range)};
    background-color: ${({ $isDaySelected, $range }) =>
        calculateBackgroundColor($isDaySelected, $range)};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-color: ${({ $isToday }) => ($isToday ? ({ theme }) => theme.colors.chosenDay : 'none')};
    border-radius: ${({ $range }) =>
        $range && $range === 'Start'
            ? `10px 0 0 10px`
            : $range === 'Between'
              ? 0
              : $range === 'End'
                ? `0 10px 10px 0`
                : '10px'};
    cursor: pointer;

    &:hover {
        border: 1px dashed ${({ theme }) => theme.colors.borderDash};
    }
`;

export const TasksMark = styled.div`
    position: absolute;
    left: 40%;
    top: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.taskMarkColor};
`;
