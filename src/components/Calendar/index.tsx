import React, { useCallback } from 'react';
import ErrorBoundary from '@components/ErrorBoundary';
import withTheme from '@hoc/withTheme';

import DaysGridContainer from './DaysGridContainer';
import DaysOfWeek from './DaysHeader';
import MonthSlider from './MonthSlider';
import { CalendarWrapper } from './styled';
import { ICalendarProps } from './types';
import { useRange } from '@providers/RangeProvider';
import ClearButton from './ClearButton';

const Calendar = (props: ICalendarProps) => {
    const { isHolidayDate, isWithRange } = props;
    const { range, setRange } = useRange();

    const isRangeExist = isWithRange && !!range?.rangeStart && !!range?.rangeEnd;

    const handlClearButtonClick = useCallback(() => {
        setRange(undefined);
    }, [setRange]);

    return (
        <ErrorBoundary>
            <CalendarWrapper $isRangeExist={isRangeExist}>
                <MonthSlider />
                <DaysOfWeek />
                <DaysGridContainer isHolidayDate={isHolidayDate} isWithRange={isWithRange} />
            </CalendarWrapper>
            {isRangeExist && <ClearButton onButtonClick={handlClearButtonClick} />}
        </ErrorBoundary>
    );
};

export default withTheme(Calendar);
