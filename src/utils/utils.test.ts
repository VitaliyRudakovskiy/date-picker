import { DefaultTheme } from 'styled-components';

import { calculateBackgroundColor } from './calculateStyles';
import { getMonthIndex, getMonths, getReadbleDate, getYears } from './calendarHelper';

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

const firstDayRange = ({ theme }: DefaultTheme) => theme.colors.firstDayRange;

describe('Calculate Styles Functions', () => {
    it('should return firstDayRange when range is Start', () => {
        const result = calculateBackgroundColor(false, 'Start');
        expect(result).toBe('firstDayRange');
    });
});
