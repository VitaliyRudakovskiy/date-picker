import { DefaultTheme } from 'styled-components';

const activeDay = ({ theme }: DefaultTheme) => theme.colors.text;
const chosenDay = ({ theme }: DefaultTheme) => theme.colors.chosenDay;
const disabledDay = ({ theme }: DefaultTheme) => theme.colors.disabledDay;
const firstDayRange = ({ theme }: DefaultTheme) => theme.colors.firstDayRange;
const middleDayRange = ({ theme }: DefaultTheme) => theme.colors.middleDayRange;
const primary = ({ theme }: DefaultTheme) => theme.colors.primary;
const weekendDay = ({ theme }: DefaultTheme) => theme.colors.weekendDay;
const holiday = ({ theme }: DefaultTheme) => theme.colors.holiday;

export const calculateBackgroundColor = (
    isDaySelected: boolean,
    range?: 'Start' | 'Between' | 'End',
) => {
    switch (true) {
        case isDaySelected:
            return chosenDay;
        case range === 'Start':
            return firstDayRange;
        case range === 'Between':
            return middleDayRange;
        case range === 'End':
            return chosenDay;
        default:
            return primary;
    }
};

export const calculateTextColor = (
    isActive: boolean,
    isWeekend: boolean | undefined,
    isDaySelected: boolean,
    isHoliday?: boolean,
    range?: 'Start' | 'Between' | 'End',
) => {
    switch (true) {
        case range === 'Between':
            return chosenDay;
        case range === 'Start':
        case range === 'End':
        case isDaySelected:
            return primary;
        case isHoliday:
            return holiday;
        case !isActive:
            return disabledDay;
        case isWeekend:
            return weekendDay;
        default:
            return activeDay;
    }
};
