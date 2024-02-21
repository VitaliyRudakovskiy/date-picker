import { Dispatch, SetStateAction } from 'react';
declare const changeMonth: (
    to: 'next' | 'prev',
    selectedMonth: number,
    selectedYear: number,
    setSelectedMonth: Dispatch<SetStateAction<number>>,
    setSelectedYear: Dispatch<SetStateAction<number>>,
    calendarType: 'Day' | 'Year',
) => void;
export default changeMonth;
