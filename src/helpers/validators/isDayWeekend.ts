const isDayWeekend = (currentDate: Date) => {
    return currentDate.getDay() === 0 || currentDate.getDay() === 6;
};

export default isDayWeekend;
