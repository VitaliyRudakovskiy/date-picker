import { ICodes } from './types';

export const WEEK_LENGTH = 7;
export const MONTHS_LENGTH = 12;

export const DATE_INPUT_REGEX = /^[0-9.]*$/;
export const FINAL_DATE_PATTERN = /^(\d{2})\.(\d{2})\.(\d{4})$/;

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
