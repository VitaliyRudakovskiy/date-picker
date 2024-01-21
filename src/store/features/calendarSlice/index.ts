import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const now = new Date();

const initialState: IInitialState = {
    firstDayOfWeek: 'Monday',
    today: now,
    selectedDay: now,
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
        setToday: (state, action: PayloadAction<Date>) => {
            state.today = action.payload;
        },
        setSelectedDay: (state, action: PayloadAction<Date>) => {
            state.selectedDay = action.payload;
        },
        setSelectedMonth: (state, action: PayloadAction<number>) => {
            state.selectedMonth = action.payload;
        },
        setSelectedYear: (state, action: PayloadAction<number>) => {
            state.selectedYear = action.payload;
        },
    },
});

export const { setFirstDayOfWeek, setToday, setSelectedDay, setSelectedMonth, setSelectedYear } =
    calendarSlice.actions;

export const selectedFirstDayOfWeek = (state: { calendar: IInitialState }) =>
    state.calendar.firstDayOfWeek;
export const selectedToday = (state: { calendar: IInitialState }) => state.calendar.today;
export const selectedDay = (state: { calendar: IInitialState }) => state.calendar.selectedDay;
export const selectedMonth = (state: { calendar: IInitialState }) => state.calendar.selectedMonth;
export const selectedYear = (state: { calendar: IInitialState }) => state.calendar.selectedYear;

export default calendarSlice.reducer;
