import { Meta, StoryObj } from '@storybook/react';

import DayOfWeek from './index';

const meta: Meta<typeof DayOfWeek> = {
    title: 'Component/DayOfWeek',
    component: DayOfWeek,
    argTypes: {
        day: {
            name: 'Current date',
        },
        isActive: {
            name: 'If the day is in the current month',
        },
        isWeekend: {
            name: 'If the day is weekend',
        },
        isToday: {
            name: 'Today date',
        },
    },
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
