import { HOLIDAYS } from '@/constants/holidays';

const isHolidayDate = (date: Date): boolean => {
    return HOLIDAYS.some(
        (holiday) =>
            date.getDate() === holiday.date.getDate() &&
            date.getMonth() === holiday.date.getMonth(),
    );
};

export default isHolidayDate;
