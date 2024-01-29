import { IRange } from '@providers/types';

export const setRangeValues = (day: Date, prevRange: IRange) => {
    if (!prevRange || !prevRange.rangeStart) {
        return { rangeStart: day, rangeEnd: undefined };
    } else if (!prevRange.rangeEnd) {
        if (day >= prevRange.rangeStart) {
            return { ...prevRange, rangeEnd: day };
        } else {
            return { rangeStart: day, rangeEnd: prevRange.rangeStart };
        }
    } else {
        const startDate = new Date(+prevRange.rangeStart);
        const endDate = new Date(+prevRange.rangeEnd);

        if (day >= startDate && day <= endDate) {
            const diffToStart = Math.abs(day.getTime() - startDate.getTime());
            const diffToEnd = Math.abs(day.getTime() - endDate.getTime());

            if (diffToStart <= diffToEnd) {
                return { rangeStart: day, rangeEnd: prevRange.rangeEnd };
            } else {
                return { rangeStart: prevRange.rangeStart, rangeEnd: day };
            }
        } else if (day < startDate) {
            return { rangeStart: day, rangeEnd: prevRange.rangeEnd };
        } else {
            return { rangeStart: prevRange.rangeStart, rangeEnd: day };
        }
    }
};

export const getRangeState = (date: Date, range: IRange) => {
    const { rangeStart, rangeEnd } = range || {};

    if (rangeStart && date.getTime() === rangeStart.getTime()) return 'Start';
    if (rangeStart && rangeEnd) {
        if (date.getTime() === rangeEnd.getTime()) return 'End';
        if (date > rangeStart && date < rangeEnd) return 'Between';
    }
};

export const isDateBetweenMinAndMax = (day: Date, min: Date, max: Date) => {
    return day.getTime() >= min.getTime() && day.getTime() <= max.getTime();
};

export const getDefaultDates = () => {
    const now = new Date();

    const defaultMinDate = new Date(now.setMonth(now.getMonth() - 3));
    const defaultMaxDate = new Date(now.setMonth(now.getMonth() + 3));

    return { defaultMinDate, defaultMaxDate };
};
