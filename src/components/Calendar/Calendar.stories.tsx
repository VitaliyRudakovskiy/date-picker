import React from 'react';
import UtilityCalendar from '@hoc/index';
import withHolidays from '@hoc/withHolidays';
import withSelectedDay from '@hoc/withSelectedDay';
import withTasks from '@hoc/withTasks';
import withWeekends from '@hoc/withWeekends';
import { Meta, StoryObj } from '@storybook/react';
import { isDayWeekend, isHolidayDate } from '@utils/checkDate';

import Calendar from './index';

const meta: Meta<typeof Calendar> = {
    title: 'Component/Calendar',
    component: Calendar,
    argTypes: {
        isWithSelectedDay: {
            table: {
                disable: true,
            },
        },
        isDayWeekend: {
            table: {
                disable: true,
            },
        },
        isHolidayDate: {
            table: {
                disable: true,
            },
        },
        isSundayFirst: {
            table: {
                disable: true,
            },
        },
        isWithRange: {
            table: {
                disable: true,
            },
        },
        isWithTasks: {
            name: 'Is Adding Tasks enabled',
        },
        minValue: {
            name: 'Min calendar Date',
        },
        maxValue: {
            name: 'Max calendar Date',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};

export const WithSelectedDay: Story = {
    args: {
        isWithSelectedDay: true,
    },
};

export const WithWeekends: Story = {
    args: {
        isDayWeekend: isDayWeekend,
    },
};

export const WithHolidays: Story = {
    args: {
        isHolidayDate: isHolidayDate,
    },
};

export const WithSundayFirst: Story = {
    args: {
        isSundayFirst: true,
    },
};

export const WithMinAndMaxDate: Story = {
    args: {
        isWithSelectedDay: true,
        minValue: new Date(2023, 5, 1),
        maxValue: new Date(2024, 4, 1),
    },
};

export const RangePicker: Story = {
    args: {
        isWithRange: true,
    },
};

const calendar = new UtilityCalendar();
calendar.addDecorator(withTasks);
calendar.addDecorator(withHolidays);
calendar.addDecorator(withWeekends);
calendar.addDecorator(withSelectedDay);
const CalendarWithTasks = calendar.getCalendar();

export const WithTodos: Story = {
    render: () => <CalendarWithTasks />,
};
