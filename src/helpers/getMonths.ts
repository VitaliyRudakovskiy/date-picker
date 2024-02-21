import { MONTHS } from '@/constants/calendar';

export const getMonths = () => {
    return Object.values(MONTHS).filter((value) => typeof value === 'string') as string[];
};

export const getMonthIndex = (month: string) => {
    return MONTHS[month as keyof typeof MONTHS];
};
