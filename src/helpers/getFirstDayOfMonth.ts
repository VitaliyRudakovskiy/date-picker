const getFirstDayOfMonth = (year: number, monthIndex: number) => {
    const date = new Date(year, monthIndex, 1);
    return date.getDay();
};

export default getFirstDayOfMonth;
