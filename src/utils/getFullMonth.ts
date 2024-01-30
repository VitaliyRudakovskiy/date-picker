import { MONTHS_LENGTH, WEEK_LENGTH } from '@constants/calendar';

export const getDaysCountInMonth = (year: number, monthIndex: number) => {
    const date = new Date(year, monthIndex + 1, 0);
    return date.getDate();
};

export const getFirstDayOfMonth = (year: number, monthIndex: number) => {
    const date = new Date(year, monthIndex, 1);
    return date.getDay();
};

export const getPrevMonth = (year: number, monthIndex: number) => {
    return monthIndex === 0
        ? { month: MONTHS_LENGTH - 1, year: year - 1 }
        : { month: monthIndex - 1, year };
};

export const getNextMonth = (year: number, monthIndex: number) => {
    return monthIndex === MONTHS_LENGTH - 1
        ? { month: 0, year: year + 1 }
        : { month: monthIndex + 1, year };
};

export const getFullMonth = (
    monthNumber: number,
    year: number,
    firstDayOfWeek?: 'Monday' | 'Sunday',
) => {
    const daysCountInMonth = getDaysCountInMonth(year, monthNumber);
    const isMondayFirst = firstDayOfWeek === 'Monday';
    const firstDayOfMonth = getFirstDayOfMonth(year, monthNumber);

    const remainingDaysFromPrevMonth: number = isMondayFirst
        ? (WEEK_LENGTH + firstDayOfMonth - 1) % WEEK_LENGTH
        : (WEEK_LENGTH + firstDayOfMonth) % WEEK_LENGTH;

    const { month: prevMonth, year: prevYear } = getPrevMonth(year, monthNumber);
    const { month: nextMonth, year: nextYear } = getNextMonth(year, monthNumber);

    const prevMonthDays = getDaysCountInMonth(prevYear, prevMonth);
    const prevMonthDates = Array.from({ length: remainingDaysFromPrevMonth }, (_, i) => {
        const day = prevMonthDays - remainingDaysFromPrevMonth + i + 1;
        return new Date(prevYear, prevMonth, day);
    });

    const currentMonthDates = Array.from({ length: daysCountInMonth }, (_, i) => {
        const day = i + 1;
        return new Date(year, monthNumber, day);
    });

    const remainingDaysToNextMonth = daysCountInMonth + remainingDaysFromPrevMonth;
    const weeksToAdd = Math.ceil(remainingDaysToNextMonth / WEEK_LENGTH);
    const daysToAdd = weeksToAdd * WEEK_LENGTH - remainingDaysToNextMonth;

    const nextMonthDates = Array.from({ length: daysToAdd }, (_, i) => {
        const day = i + 1;
        return new Date(nextYear, nextMonth, day);
    });

    return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};
