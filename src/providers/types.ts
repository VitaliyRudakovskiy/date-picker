import { Dispatch, ReactNode, SetStateAction } from 'react';

type DispatchDate = Dispatch<SetStateAction<Date>>;
type DispatchNumber = Dispatch<SetStateAction<number>>;
type DispatchFirstDay = Dispatch<SetStateAction<"Monday" | "Sunday">>;

export interface IProviderProps {
    children: ReactNode;
}

export interface ICalendarContext {
    firstDayOfWeek: 'Monday' | 'Sunday';
    today: Date;
    selectedDay: Date;
    selectedMonth: number;
    selectedYear: number;
    setFirstDayOfWeek: DispatchFirstDay;
    setToday: DispatchDate;
    setSelectedDay: DispatchDate;
    setSelectedMonth: DispatchNumber;
    setSelectedYear: DispatchNumber;
}