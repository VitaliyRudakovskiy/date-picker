export declare const getDaysCountInMonth: (year: number, monthIndex: number) => number;
export declare const getFirstDayOfMonth: (year: number, monthIndex: number) => number;
export declare const getPrevMonth: (year: number, monthIndex: number) => {
    month: number;
    year: number;
};
export declare const getNextMonth: (year: number, monthIndex: number) => {
    month: number;
    year: number;
};
export declare const getFullMonth: (monthNumber: number, year: number, firstDayOfWeek?: 'Monday' | 'Sunday') => Date[];
