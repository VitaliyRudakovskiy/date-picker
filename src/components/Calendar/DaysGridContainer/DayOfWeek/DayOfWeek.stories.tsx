import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import DayOfWeek from './index';
import { Provider } from 'react-redux';
import store from '@store/store';
import withTheme from '@hoc/withTheme';

const meta: Meta<typeof DayOfWeek> = {
    title: 'Component/DayOfWeek',
    component: (args) => (
        <Provider store={store}>
            <DayOfWeek {...args} />
        </Provider>
    ),
    decorators: [
        (DayOfWeek) => {
            const ThemeProvider = withTheme(DayOfWeek);
            return <ThemeProvider />;
        },
    ],
};

export default meta;

type Story = StoryObj<typeof DayOfWeek>;

export const Primary: Story = {
    args: {
        day: new Date(2024, 1, 22),
        isActive: true,
        isWeekend: false,
        isToday: false,
    },
};

export const Weekend: Story = {
    args: {
        day: new Date(2024, 1, 21),
        isActive: true,
        isWeekend: true,
        isToday: false,
    },
};

export const Today: Story = {
    args: {
        day: new Date(2024, 1, 23),
        isActive: true,
        isWeekend: false,
        isToday: true,
    },
};

export const DayInPrevMonth: Story = {
    args: {
        day: new Date(2024, 1, 24),
        isActive: false,
        isWeekend: false,
        isToday: false,
    },
};
