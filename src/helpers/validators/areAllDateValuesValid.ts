import getDateParts from '@/helpers/getDateParts';

const areAllDateValuesValid = (inputDate: string) => {
    const [day, month, year] = getDateParts(inputDate);

    const tempDate = new Date(year, month - 1, day);

    const isDayValid = tempDate.getDate() === day;
    const isMonthValid = tempDate.getMonth() === month - 1;
    const isYearValid = tempDate.getFullYear() === year;

    return isDayValid && isMonthValid && isYearValid;
};

export default areAllDateValuesValid;
