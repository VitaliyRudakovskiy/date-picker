import { IRange } from '@/types';
declare const getRangeState: (date: Date, range: IRange) => "Start" | "End" | "Between" | undefined;
export default getRangeState;
