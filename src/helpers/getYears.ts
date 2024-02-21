const getYears = (year: number) => {
    const years = [];
    for (let i = year - 10; i < year + 10; i++) {
        years.push(i);
    }
    return years;
};

export default getYears;
