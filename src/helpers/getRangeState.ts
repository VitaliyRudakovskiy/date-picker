import { IRange } from '@/types';

const getRangeState = (date: Date, range: IRange) => {
    const { rangeStart, rangeEnd } = range || {};

    if (rangeStart && date.getTime() === rangeStart.getTime()) return 'Start';
    if (rangeStart && rangeEnd) {
        if (date.getTime() === rangeEnd.getTime()) return 'End';
        if (date > rangeStart && date < rangeEnd) return 'Between';
    }
};

export default getRangeState;
