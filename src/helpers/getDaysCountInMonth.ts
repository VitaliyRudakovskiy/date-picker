const getDaysCountInMonth = (year: number, monthIndex: number) => {
    const date = new Date(year, monthIndex + 1, 0);
    return date.getDate();
};

export default getDaysCountInMonth;
