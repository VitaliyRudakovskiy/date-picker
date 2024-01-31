import React from 'react';
import DatePicker from '@components/DatePicker';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

const Calendar = () => <div data-testid="calendar">Mock Calendar</div>;

describe('DatePicker component', () => {
    it('renders with initial date and label', () => {
        render(<DatePicker CalendarView={Calendar} />);
        const calendarIcon = screen.getByTestId('calendar-icon-button');
        expect(calendarIcon).toBeInTheDocument();
    });

    it('opens and closes the calendar on calendar icon click', () => {
        render(<DatePicker CalendarView={Calendar} />);

        const calendarIcon = screen.getByTestId('calendar-icon-button');

        fireEvent.click(calendarIcon);

        const calendar = screen.getByText('Mock Calendar');

        expect(calendar).toBeVisible();

        fireEvent.click(calendarIcon);

        expect(calendar).not.toBeVisible();
    });
});
