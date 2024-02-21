import { IRange } from '@/types';

const setRangeValues = (day: Date, prevRange: IRange) => {
    if (!prevRange || !prevRange.rangeStart) return setInitialRange(day);

    if (!prevRange.rangeEnd) return setRangeEnd(day, prevRange);

    return updateRange(day, prevRange);
};

const setInitialRange = (day: Date) => {
    return { rangeStart: day, rangeEnd: undefined };
};

const setRangeEnd = (day: Date, prevRange: IRange) => {
    if (day >= prevRange.rangeStart!) return { ...prevRange, rangeEnd: day };

    return { rangeStart: day, rangeEnd: prevRange.rangeStart };
};

const updateRange = (day: Date, prevRange: IRange) => {
    const startDate = new Date(+prevRange.rangeStart!);
    const endDate = new Date(+prevRange.rangeEnd!);

    if (day >= startDate && day <= endDate) return updateWithinRange(day, prevRange);

    if (day < startDate) return { rangeStart: day, rangeEnd: prevRange.rangeEnd };

    return { rangeStart: prevRange.rangeStart, rangeEnd: day };
};

const updateWithinRange = (day: Date, prevRange: IRange) => {
    const startDate = new Date(+prevRange.rangeStart!);
    const diffToStart = Math.abs(day.getTime() - startDate.getTime());
    const diffToEnd = Math.abs(day.getTime() - prevRange.rangeEnd!.getTime());

    if (diffToStart <= diffToEnd) return { rangeStart: day, rangeEnd: prevRange.rangeEnd };

    return { rangeStart: prevRange.rangeStart, rangeEnd: day };
};

export default setRangeValues;
