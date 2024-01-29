import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { isDayWeekend, isHolidayDate } from '@utils/getFullMonth';

import Calendar from './index';
import UtilityCalendar from '@hoc/index';
import withTasks from '@hoc/withTasks';
import withHolidays from '@hoc/withHolidays';
import withWeekends from '@hoc/withWeekends';
import withSelectedDay from '@hoc/withSelectedDay';

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
