import { ICodes } from './types';

export const WEEK_LENGTH = 7;
export const MONTHS_LENGTH = 12;
export const MAX_DAYS_IN_GRID = 42;

export const DATE_INPUT_REGEX = /^[0-9]*$/;

export const DAYS_OF_WEEK: ICodes = {
    Monday: 'Mo',
    Tuesday: 'Tu',
    Wednesday: 'We',
    Thursday: 'Th',
    Friday: 'Fr',
    Saturday: 'Sa',
    Sunday: 'Su',
};

export enum MONTHS {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
