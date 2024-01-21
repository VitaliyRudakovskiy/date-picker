import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import calendarReducer, { setFirstDayOfWeek } from '@features/calendarSlice';
import DaysHeader from './index';

const meta: Meta<typeof DaysHeader> = {
    title: 'Component/DaysHeader',
    component: DaysHeader,
};

export default meta;

type Story = StoryObj<typeof DaysHeader>;

const storeMonday = configureStore({
    reducer: {
        calendar: calendarReducer,
    },
});

storeMonday.dispatch(setFirstDayOfWeek('Monday'));

export const Primary: Story = {
    decorators: [
        (DaysHeader) => (
            <Provider store={storeMonday}>
                <DaysHeader />
            </Provider>
        ),
    ],
};

const storeSunday = configureStore({
    reducer: {
        calendar: calendarReducer,
    },
});

storeSunday.dispatch(setFirstDayOfWeek('Sunday'));

export const SundayFirst: Story = {
    decorators: [
        (DaysHeader) => (
            <Provider store={storeSunday}>
                <DaysHeader />
            </Provider>
        ),
    ],
};
