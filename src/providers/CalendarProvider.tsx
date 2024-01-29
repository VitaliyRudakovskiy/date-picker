import React, { createContext, useContext, useState } from 'react';

import { DispatchDate, ICalendarContext, IProviderProps } from './types';

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

export const useCalendar = () => {
    return useContext(CalendarContext);
};

const CalendarProvider = ({ children }: IProviderProps) => {
    const [today] = useState<Date>(now);
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
    const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth());
    const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear());
    const [calendarType, setCalendarType] = useState<'Day' | 'Month' | 'Year'>('Day');

    const commonValue = {
        today,
        selectedDay,
        selectedMonth,
        selectedYear,
        calendarType,
        setSelectedDay: setSelectedDay as DispatchDate,
        setSelectedMonth,
        setSelectedYear,
        setCalendarType,
    };

    return <CalendarContext.Provider value={commonValue}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;
