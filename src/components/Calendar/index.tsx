import React, { useCallback } from 'react';
import ErrorBoundary from '@components/ErrorBoundary';
import withTheme from '@hoc/withTheme';
import { useRange } from '@providers/RangeProvider';

import Button from './Button';
import DaysGridContainer from './DaysGridContainer';
import DaysOfWeek from './DaysHeader';
import MonthSlider from './MonthSlider';
import { CalendarWrapper } from './styled';
import { ICalendarProps } from './types';

const Calendar = (props: ICalendarProps) => {
    const {
        isHolidayDate,
        isWithRange,
        isDayWeekend,
        isWithSelectedDay,
        isSundayFirst,
        isWithTasks,
    } = props;

    const { range, setRange } = useRange();

    const handlClearButtonClick = useCallback(() => {
        setRange(undefined);
    }, [setRange]);

    const isRangeExist = isWithRange && !!range?.rangeStart && !!range?.rangeEnd;

    //const min = minDate ? minDate : getDefaultDates().defaultMinDate;
    //const max = maxDate ? maxDate : getDefaultDates().defaultMaxDate;

    return (
        <ErrorBoundary>
            <CalendarWrapper $isRangeExist={isRangeExist} $isWithTasks={isWithTasks}>
                <MonthSlider />
                <DaysOfWeek isSundayFirst={isSundayFirst} />
                <DaysGridContainer
                    isHolidayDate={isHolidayDate}
                    isWithRange={isWithRange}
                    isWithSelectedDay={isWithSelectedDay}
                    isSundayFirst={isSundayFirst}
                    isDayWeekend={isDayWeekend}
                    isWithTasks={isWithTasks}
                />
            </CalendarWrapper>
            {isRangeExist && <Button text="Clear Interval" onButtonClick={handlClearButtonClick} />}
        </ErrorBoundary>
    );
};

export default withTheme(Calendar);
