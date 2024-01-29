import { Dispatch, ReactNode, SetStateAction } from 'react';

export type DispatchDate = Dispatch<SetStateAction<Date>>;
type DispatchNumber = Dispatch<SetStateAction<number>>;
type DispatchCalendarType = Dispatch<SetStateAction<'Day' | 'Month' | 'Year'>>;

export interface IProviderProps {
    children: ReactNode;
}

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

export interface IRange {
    rangeStart?: Date;
    rangeEnd?: Date;
}

type DispatchRange = Dispatch<SetStateAction<IRange | undefined>>;

export interface IRangeContext {
    range: IRange | undefined;
    setRange: DispatchRange;
}
