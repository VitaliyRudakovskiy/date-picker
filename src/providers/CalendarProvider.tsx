import React, { useState } from 'react';

import CalendarContext from '@/context/CalendarContext';
import { DispatchDate } from '@/types';

import { IProviderProps } from './types';

const now = new Date();

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
