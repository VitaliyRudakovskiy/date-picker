import { Dispatch, SetStateAction } from 'react';

import { DispatchDate } from '@/types';

export interface DispatchNumber extends Dispatch<SetStateAction<number>> {}
export interface DispatchCalendarType extends Dispatch<SetStateAction<'Day' | 'Month' | 'Year'>> {}

export interface ICalendarContext {
    today: Date;
    selectedDay?: Date;
    selectedMonth: number;
    selectedYear: number;
    calendarType: 'Day' | 'Month' | 'Year';
    setSelectedDay: DispatchDate;
    setSelectedMonth: DispatchNumber;
    setSelectedYear: DispatchNumber;
    setCalendarType: DispatchCalendarType;
}
