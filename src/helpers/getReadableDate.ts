const getReadbleDate = (date?: Date): string => {
    if (!date) return new Date().toDateString();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}`;
};

export default getReadbleDate;
