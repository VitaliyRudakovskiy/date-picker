import React, { useCallback } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import withTheme from '@/hoc/withTheme';
import { useRange } from '@/providers/RangeProvider';

import Button from './Button';
import DaysGridContainer from './DaysGridContainer';
import DaysOfWeek from './DaysHeader';
import MonthSlider from './MonthSlider';
import { CalendarWrapper } from './styled';
import { ICalendarProps } from './types';

const Calendar = ({
    isHolidayDate,
    isWithRange,
    isDayWeekend,
    isWithSelectedDay,
    isSundayFirst,
    isWithTasks,
    minValue,
    maxValue,
}: ICalendarProps) => {
    const { range, setRange } = useRange();

    const handlClearButtonClick = useCallback(() => {
        setRange(undefined);
    }, [setRange]);

    const isRangeExist = isWithRange && !!range?.rangeStart && !!range?.rangeEnd;

    return (
        <ErrorBoundary>
            <CalendarWrapper
                $isRangeExist={isRangeExist}
                $isWithTasks={isWithTasks}
                data-testid="calendar"
            >
                <MonthSlider />
                <DaysOfWeek isSundayFirst={isSundayFirst} />
                <DaysGridContainer
                    isHolidayDate={isHolidayDate}
                    isWithRange={isWithRange}
                    isWithSelectedDay={isWithSelectedDay}
                    isSundayFirst={isSundayFirst}
                    isDayWeekend={isDayWeekend}
                    isWithTasks={isWithTasks}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </CalendarWrapper>
            {isRangeExist && <Button text="Clear Interval" onButtonClick={handlClearButtonClick} />}
        </ErrorBoundary>
    );
};

export default withTheme(Calendar);
