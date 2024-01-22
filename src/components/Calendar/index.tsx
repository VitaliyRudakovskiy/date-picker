import React from 'react';
import ErrorBoundary from '@components/ErrorBoundary';
import withTheme from '@hoc/withTheme';

import DaysGridContainer from './DaysGridContainer';
import DaysOfWeek from './DaysHeader';
import MonthSlider from './MonthSlider';
import { CalendarWrapper } from './styled';
import { ICalendarProps } from './types';

const Calendar = (props: ICalendarProps) => {
    const { isHolidayDate } = props;
    return (
        <ErrorBoundary>
            <CalendarWrapper>
                <MonthSlider />
                <DaysOfWeek />
                <DaysGridContainer isHolidayDate={isHolidayDate} />
            </CalendarWrapper>
        </ErrorBoundary>
    );
};

export default withTheme(Calendar);
