import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const now = new Date();

const initialState: IInitialState = {
    firstDayOfWeek: 'Monday',
    selectedDate: now,
    selectedMonth: now.getMonth(),
    selectedYear: now.getFullYear(),
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setFirstDayOfWeek: (state, action: PayloadAction<'Monday' | 'Sunday'>) => {
            state.firstDayOfWeek = action.payload;
        },
        setSelectedDate: (state, action: PayloadAction<Date>) => {
            state.selectedDate = action.payload;
        },
        setSelectedMonth: (state, action: PayloadAction<number>) => {
            state.selectedMonth = action.payload;
        },
        setSelectedYear: (state, action: PayloadAction<number>) => {
            state.selectedYear = action.payload;
        },
    },
});

export const { setFirstDayOfWeek, setSelectedDate, setSelectedMonth, setSelectedYear } =
    calendarSlice.actions;

export const selectedFirstDayOfWeek = (state: { calendar: IInitialState }) =>
    state.calendar.firstDayOfWeek;
export const selectedDate = (state: { calendar: IInitialState }) => state.calendar.selectedDate;
export const selectedMonth = (state: { calendar: IInitialState }) => state.calendar.selectedMonth;
export const selectedYear = (state: { calendar: IInitialState }) => state.calendar.selectedYear;

export default calendarSlice.reducer;
