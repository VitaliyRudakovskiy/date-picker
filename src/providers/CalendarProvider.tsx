import React, { createContext, useContext, useState } from 'react';

import { ICalendarContext, IProviderProps } from './types';

const now = new Date();

const CalendarContext = createContext<ICalendarContext>({
    firstDayOfWeek: 'Monday',
    today: now,
    selectedDay: now,
    selectedMonth: now.getMonth(),
    selectedYear: now.getFullYear(),
    calendarType: 'Day',
    setFirstDayOfWeek: () => undefined,
    setToday: () => undefined,
    setSelectedDay: () => undefined,
    setSelectedMonth: () => undefined,
    setSelectedYear: () => undefined,
    setCalendarType: () => undefined,
});

export const useCalendar = () => {
    return useContext(CalendarContext);
};

const CalendarProvider = ({ children }: IProviderProps) => {
    const [firstDayOfWeek, setFirstDayOfWeek] = useState<'Monday' | 'Sunday'>('Monday');
    const [today, setToday] = useState<Date>(now);
    const [selectedDay, setSelectedDay] = useState<Date>(now);
    const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth());
    const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear());
    const [calendarType, setCalendarType] = useState<'Day' | 'Month' | 'Year'>('Day');

    const commonValue = {
        firstDayOfWeek,
        today,
        selectedDay,
        selectedMonth,
        selectedYear,
        calendarType,
        setFirstDayOfWeek,
        setToday,
        setSelectedDay,
        setSelectedMonth,
        setSelectedYear,
        setCalendarType,
    };

    return <CalendarContext.Provider value={commonValue}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;
