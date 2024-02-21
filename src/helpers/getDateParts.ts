const getDateParts = (inputDate: string) => {
    const values = inputDate.split('.').map((item) => parseInt(item));
    return values;
};

export default getDateParts;
