const isDayInCurrentMonth = (currentDate: Date, currentMonth: number, currentYear: number) => {
    return currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;
};

export default isDayInCurrentMonth;
