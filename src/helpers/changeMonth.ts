import { Dispatch, SetStateAction } from 'react';

const changeMonth = (
    to: 'next' | 'prev',
    selectedMonth: number,
    selectedYear: number,
    setSelectedMonth: Dispatch<SetStateAction<number>>,
    setSelectedYear: Dispatch<SetStateAction<number>>,
    calendarType: 'Day' | 'Year',
) => {
    let newYear = selectedYear;
    let newMonth = selectedMonth;

    if (calendarType === 'Day') {
        if (to === 'next') {
            newMonth = (selectedMonth + 1) % 12;
            if (newMonth < selectedMonth) newYear++;
        } else {
            newMonth = (selectedMonth + 11) % 12;
            if (newMonth > selectedMonth) newYear--;
        }
    }

    setSelectedYear(newYear);
    setSelectedMonth(newMonth);
};

export default changeMonth;
