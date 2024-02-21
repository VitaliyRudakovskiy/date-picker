import { MONTHS } from '@/constants/calendar';

const isMonthSelected = (month: string, selectedMonth: number) => {
    return MONTHS[selectedMonth] === month;
};

export default isMonthSelected;
