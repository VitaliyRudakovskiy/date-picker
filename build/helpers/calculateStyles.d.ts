import { DefaultTheme } from 'styled-components';
export declare const calculateBackgroundColor: (
    isDaySelected: boolean,
    range?: 'Start' | 'Between' | 'End',
) => ({ theme }: DefaultTheme) => any;
export declare const calculateTextColor: (
    isActive: boolean,
    isWeekend: boolean | undefined,
    isDaySelected: boolean,
    isHoliday?: boolean,
    range?: 'Start' | 'Between' | 'End',
) => ({ theme }: DefaultTheme) => any;
