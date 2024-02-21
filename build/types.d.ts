import { Dispatch, SetStateAction } from 'react';
export interface IRange {
    rangeStart?: Date;
    rangeEnd?: Date;
}
export interface ITask {
    id: string;
    text: string;
    isCompleted: boolean;
}
export interface DispatchDate extends Dispatch<SetStateAction<Date>> {}
