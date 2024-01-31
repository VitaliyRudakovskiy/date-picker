import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Calendar from './index';

describe('Calendar Component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Calendar />);
        expect(getByTestId('calendar')).toBeInTheDocument();
    });

    it('hides the clear button when range does not exist', () => {
        const { queryByText } = render(<Calendar isWithRange={false} />);
        expect(queryByText('Clear Interval')).toBeNull();
    });

    it('should render the calendar with custom props', () => {
        const isHolidayDate = jest.fn();
        const isWithRange = true;
        const isDayWeekend = jest.fn();
        const isWithSelectedDay = true;
        const isSundayFirst = true;
        const isWithTasks = true;
        const minValue = new Date();
        const maxValue = new Date();

        const { getByTestId } = render(
            <Calendar
                isHolidayDate={isHolidayDate}
                isWithRange={isWithRange}
                isDayWeekend={isDayWeekend}
                isWithSelectedDay={isWithSelectedDay}
                isSundayFirst={isSundayFirst}
                isWithTasks={isWithTasks}
                minValue={minValue}
                maxValue={maxValue}
            />,
        );

        expect(getByTestId('calendar')).toBeInTheDocument();
    });

    it('renders MonthSlider', () => {
        const { getByTestId } = render(<Calendar />);
        expect(getByTestId('month-slider')).toBeInTheDocument();
    });

    it('renders DaysGridContainer', () => {
        const { getByTestId } = render(<Calendar />);
        expect(getByTestId('data-grid-container')).toBeInTheDocument();
    });
});
