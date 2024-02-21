import { WEEK_LENGTH } from '@/constants/calendar';

import getDaysCountInMonth from './getDaysCountInMonth';
import getFirstDayOfMonth from './getFirstDayOfMonth';
import getNextMonth from './getNextMonth';
import getPrevMonth from './getPrevMonth';

const getFullMonth = (monthNumber: number, year: number, firstDayOfWeek?: 'Monday' | 'Sunday') => {
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

export default getFullMonth;
