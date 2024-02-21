import { MONTHS_LENGTH } from '@/constants/calendar';

const getNextMonth = (year: number, monthIndex: number) => {
    return monthIndex === MONTHS_LENGTH - 1
        ? { month: 0, year: year + 1 }
        : { month: monthIndex + 1, year };
};

export default getNextMonth;
