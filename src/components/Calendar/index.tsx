import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from '@components/ErrorBoundary';
import withTheme from '@hoc/withTheme';
import store from '@store/store';

import DaysGridContainer from './DaysGridContainer';
import DaysOfWeek from './DaysOfWeek';
import MonthSlider from './MonthSlider';
import { CalendarWrapper } from './styled';

const Calendar = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <CalendarWrapper>
                    <MonthSlider />
                    <DaysOfWeek />
                    <DaysGridContainer />
                </CalendarWrapper>
            </Provider>
        </ErrorBoundary>
    );
};

export default withTheme(Calendar);
