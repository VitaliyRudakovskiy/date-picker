import { FINAL_DATE_PATTERN, MONTHS } from '@constants/calendar';
import { HOLIDAYS } from '@constants/holidays';

export const isDayInCurrentMonth = (
    currentDate: Date,
    currentMonth: number,
    currentYear: number,
) => {
    return currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;
};

export const isDayWeekend = (currentDate: Date) => {
    return currentDate.getDay() === 0 || currentDate.getDay() === 6;
};

export const isMonthSelected = (month: string, selectedMonth: number) => {
    return MONTHS[selectedMonth] === month;
};

export const isSameDay = (date1: Date, date2: Date) => {
    if (!date2) return false;
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

export const isDateValid = (inputDate: string) => {
    return FINAL_DATE_PATTERN.test(inputDate);
};

export const getDateParts = (inputDate: string) => {
    const values = inputDate.split('.').map((item) => parseInt(item));
    return values;
};

export const areAllDateValuesValid = (inputDate: string) => {
    const [day, month, year] = getDateParts(inputDate);

    const tempDate = new Date(year, month - 1, day);

    const isDayValid = tempDate.getDate() === day;
    const isMonthValid = tempDate.getMonth() === month - 1;
    const isYearValid = tempDate.getFullYear() === year;

    return isDayValid && isMonthValid && isYearValid;
};

export const isHolidayDate = (date: Date): boolean => {
    return HOLIDAYS.some(
        (holiday) =>
            date.getDate() === holiday.date.getDate() &&
            date.getMonth() === holiday.date.getMonth(),
    );
};
