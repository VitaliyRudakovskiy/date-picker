import { createContext } from 'react';

import { ICalendarContext } from './types';

const now = new Date();

const CalendarContext = createContext<ICalendarContext>({
    today: now,
    selectedDay: undefined,
    selectedMonth: now.getMonth(),
    selectedYear: now.getFullYear(),
    calendarType: 'Day',
    setSelectedDay: () => undefined,
    setSelectedMonth: () => undefined,
    setSelectedYear: () => undefined,
    setCalendarType: () => undefined,
});

export default CalendarContext;
