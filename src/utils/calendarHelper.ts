import { MONTHS } from '@constants/calendar';

export const getMonths = () => {
    return Object.values(MONTHS).filter((value) => typeof value === 'string') as string[];
};

export const getYears = (year: number) => {
    const years = [];
    for (let i = year - 10; i < year + 10; i++) {
        years.push(i);
    }
    return years;
};

export const getMonthIndex = (month: string) => {
    return MONTHS[month as keyof typeof MONTHS];
};

export const getReadbleDate = (date?: Date): string => {
    if (!date) return new Date().toDateString();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}`;
};
