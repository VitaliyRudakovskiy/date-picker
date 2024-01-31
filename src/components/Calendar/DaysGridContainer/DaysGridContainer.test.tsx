import React from 'react';
import { render, screen } from '@testing-library/react';
import { getFullMonth } from '@utils/getFullMonth';

import '@testing-library/jest-dom';

import DaysGridContainer from './index';

it('should render the correct number of DayOfWeek components', () => {
    const isHolidayDate = jest.fn();
    const isWithRange = false;
    const isDayWeekend = jest.fn();
    const isWithSelectedDay = true;
    const isSundayFirst = false;
    const isWithTasks = false;
    const minValue = new Date(2024, 0, 1);
    const maxValue = new Date(2024, 11, 28);

    render(
        <DaysGridContainer
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

    const dayOfWeekComponents = screen.getAllByTestId('day-of-week');
    expect(dayOfWeekComponents.length).toBe(getFullMonth(0, 2024, 'Monday').length);
});
