import { IRange } from '@providers/types';
export declare const setRangeValues: (day: Date, prevRange: IRange) => {
    rangeStart: Date;
    rangeEnd: undefined;
} | {
    rangeEnd: Date;
    rangeStart?: Date | undefined;
};
export declare const getRangeState: (date: Date, range: IRange) => "Start" | "End" | "Between" | undefined;
export declare const isDateBetweenMinAndMax: (day: Date, min: Date, max: Date) => boolean;
