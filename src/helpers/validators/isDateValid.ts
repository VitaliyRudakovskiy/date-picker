import { FINAL_DATE_PATTERN } from '@/constants/calendar';

const isDateValid = (inputDate: string) => {
    return FINAL_DATE_PATTERN.test(inputDate);
};

export default isDateValid;
