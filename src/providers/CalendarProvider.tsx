import React, { createContext, useContext, useState } from 'react';

import { ICalendarContext, IProviderProps } from './types';

const now = new Date();

const CalendarContext = createContext<ICalendarContext>({
    firstDayOfWeek: 'Monday',
    today: now,
    selectedDay: now,
    selectedMonth: now.getMonth(),
    selectedYear: now.getFullYear(),
    setFirstDayOfWeek: () => undefined,
    setToday: () => undefined,
    setSelectedDay: () => undefined,
    setSelectedMonth: () => undefined,
    setSelectedYear: () => undefined,
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

    const commonValue = {
        firstDayOfWeek,
        today,
        selectedDay,
        selectedMonth,
        selectedYear,
        setFirstDayOfWeek,
        setToday,
        setSelectedDay,
        setSelectedMonth,
        setSelectedYear,
    };

    return <CalendarContext.Provider value={commonValue}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;
