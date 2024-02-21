const isDateBetweenMinAndMax = (day: Date, min: Date, max: Date) => {
    return day.getTime() >= min.getTime() && day.getTime() <= max.getTime();
};

export default isDateBetweenMinAndMax;
