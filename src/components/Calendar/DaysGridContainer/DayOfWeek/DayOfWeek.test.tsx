import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import DayOfWeek from './index';

describe('Month Test', () => {
    it('renders DayOfWeek with date', () => {
        render(
            <DayOfWeek
                day={new Date()}
                isToday={true}
                isActive={true}
                isHoliday={false}
                isWithTasks={false}
                isWeekend={false}
                isWithRange={false}
                maxValue={undefined}
                minValue={undefined}
            />,
        );

        const dayOfWeek = screen.getByTestId('day-of-week');
        expect(dayOfWeek).toBeInTheDocument();
    });
});
