import { ICodes } from '@/theme/types';

export const WEEK_LENGTH = 7;
export const MONTHS_LENGTH = 12;

export const DATE_INPUT_REGEX = /^[0-9.]*$/;
// Allows to enter only digits from 0 to 9 and a point

export const FINAL_DATE_PATTERN = /^(\d{2})\.(\d{2})\.(\d{4})$/;
// The pattern mathces the date string which should be in format 14.02.2024

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
