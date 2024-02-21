import { IRange } from '@/types';
declare const setRangeValues: (day: Date, prevRange: IRange) => {
    rangeEnd: Date;
    rangeStart?: Date | undefined;
} | {
    rangeStart: Date;
    rangeEnd: Date | undefined;
};
export default setRangeValues;
