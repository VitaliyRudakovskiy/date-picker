import { MONTHS_LENGTH } from '@/constants/calendar';

const getPrevMonth = (year: number, monthIndex: number) => {
    return monthIndex === 0
        ? { month: MONTHS_LENGTH - 1, year: year - 1 }
        : { month: monthIndex - 1, year };
};

export default getPrevMonth;
