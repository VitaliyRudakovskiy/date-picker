import { getMonthIndex, getMonths, getReadbleDate, getYears } from './calendarHelper';
import {
    getDaysCountInMonth,
    getFirstDayOfMonth,
    getFullMonth,
    getNextMonth,
    getPrevMonth,
} from './getFullMonth';
import { getRangeState, isDateBetweenMinAndMax, setRangeValues } from './rangeValues';
import { saveTasksToLocalStorage } from './tasksHelper';

describe('Calendar Helper Functions', () => {
    it('should return an array of all the months as strings', () => {
        const result = getMonths();
        expect(result).toEqual([
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]);
    });

    it('should return an array of 20 years centered around the input year', () => {
        const result = getYears(2021);
        expect(result).toEqual([
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
            2025, 2026, 2027, 2028, 2029, 2030,
        ]);
    });

    it('should return the index of the given month as a number', () => {
        const monthIndex = getMonthIndex('January');
        expect(monthIndex).toBe(0);
    });

    it('should return undefined for invalid month names', () => {
        const monthIndex = getMonthIndex('Jaunary');
        expect(monthIndex).toBeUndefined();
    });

    it('should return a string in the format "dd.mm.yyyy" for a given Date object', () => {
        const date = new Date(2024, 0, 1);
        const result = getReadbleDate(date);
        expect(result).toBe('01.01.2024');
    });
});

describe('Tasks Helper Functions', () => {
    it('should save new tasks to local storage for a selected day', () => {
        const selectedDay = '14.03.2024';
        const newTasks = ['task1', 'task2'];

        saveTasksToLocalStorage(selectedDay, newTasks);

        expect(localStorage.getItem(selectedDay)).toEqual(JSON.stringify(newTasks));
    });
});

describe('Range Values Functions', () => {
    it('should return an object with rangeStart equal to the given day and rangeEnd undefined when prevRange or prevRange.rangeStart is undefined', () => {
        const day = new Date();
        const prevRange = {};

        const result = setRangeValues(day, prevRange);

        expect(result).toEqual({ rangeStart: day, rangeEnd: undefined });
    });

    it('should return an object with rangeStart equal to the given day and rangeEnd equal to the previous rangeStart when prevRange.rangeEnd is undefined and the given day is less than prevRange.rangeStart', () => {
        const day = new Date();
        const prevRange = { rangeStart: new Date() };

        const result = setRangeValues(day, prevRange);

        expect(result).toEqual({ rangeStart: day, rangeEnd: prevRange.rangeStart });
    });

    it('should return an object with rangeStart equal to the previous rangeStart and rangeEnd equal to the given day when prevRange.rangeEnd is undefined and the given day is greater than or equal to prevRange.rangeStart', () => {
        const day = new Date();
        const prevRange = { rangeStart: new Date() };

        const result = setRangeValues(day, prevRange);

        expect(result).toEqual({ rangeStart: prevRange.rangeStart, rangeEnd: day });
    });

    it('should return "Start" when date is equal to rangeStart', () => {
        const date = new Date();
        const range = { rangeStart: date };
        const result = getRangeState(date, range);
        expect(result).toBe('Start');
    });

    it('should return "End" when date is equal to rangeEnd', () => {
        const date = new Date(2024, 5, 12);
        const range = { rangeStart: new Date(2024, 4, 28), rangeEnd: new Date(2024, 5, 12) };
        const result = getRangeState(date, range);
        expect(result).toBe('End');
    });

    it('should return "Between" when date is between rangeStart and rangeEnd', () => {
        const date = new Date(2024, 1, 15);
        const range = { rangeStart: new Date(2024, 1, 10), rangeEnd: new Date(2024, 1, 20) };
        const result = getRangeState(date, range);
        expect(result).toBe('Between');
    });

    it('should return true when day is between min and max dates', () => {
        const day = new Date(2024, 3, 12);
        const min = new Date(2024, 2, 23);
        const max = new Date(2024, 3, 18);

        const result = isDateBetweenMinAndMax(day, min, max);

        expect(result).toBe(true);
    });

    it('should return false when day is before min date', () => {
        const day = new Date(2024, 1, 4);
        const min = new Date(2024, 2, 23);
        const max = new Date(2024, 3, 18);

        const result = isDateBetweenMinAndMax(day, min, max);

        expect(result).toBe(false);
    });
});

describe('Check Date Functions', () => {
    it('should return 28 for February in a leap year', () => {
        const year = 2024;
        const monthIndex = 1;
        const result = getDaysCountInMonth(year, monthIndex);
        expect(result).toBe(29);
    });

    it('should return 30 for April', () => {
        const year = 2024;
        const monthIndex = 3;
        const result = getDaysCountInMonth(year, monthIndex);
        expect(result).toBe(30);
    });

    it('should return 0 when year is 2024 and monthIndex is 0', () => {
        const year = 2024;
        const monthIndex = 0;
        const result = getFirstDayOfMonth(year, monthIndex);
        expect(result).toBe(1);
    });

    it('should return the previous month and year when given a valid year and monthIndex', () => {
        const year = 2024;
        const monthIndex = 3;
        const result = getPrevMonth(year, monthIndex);
        expect(result).toEqual({ month: 2, year: 2024 });
    });

    it('should return the correct next month and year when given a valid year and monthIndex', () => {
        const year = 2024;
        const monthIndex = 5;
        const result = getNextMonth(year, monthIndex);
        expect(result).toEqual({ month: 6, year: 2024 });
    });

    it('should return an array of length 42 when given a month with 30 days and Saturday if first day', () => {
        const result = getFullMonth(8, 2024, 'Monday');
        expect(result.length).toBe(42);
    });

    it('should return an array of length 35 when given a month starting at Monday', () => {
        const result = getFullMonth(0, 2024, 'Monday');
        expect(result.length).toBe(35);
    });
});
