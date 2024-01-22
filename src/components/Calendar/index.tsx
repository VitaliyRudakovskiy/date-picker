import React from 'react';
import ErrorBoundary from '@components/ErrorBoundary';
import withTheme from '@hoc/withTheme';

import DaysGridContainer from './DaysGridContainer';
import DaysOfWeek from './DaysHeader';
import MonthSlider from './MonthSlider';
import { CalendarWrapper } from './styled';

const Calendar = () => {
    return (
        <ErrorBoundary>
            <CalendarWrapper>
                <MonthSlider />
                <DaysOfWeek />
                <DaysGridContainer />
            </CalendarWrapper>
        </ErrorBoundary>
    );
};

export default withTheme(Calendar);
