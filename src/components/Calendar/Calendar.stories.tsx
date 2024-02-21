import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import isDayWeekend from '@/helpers/validators/isDayWeekend';
import isHolidayDate from '@/helpers/validators/isHolidayDate';
import UtilityCalendar from '@/hoc/index';
import withHolidays from '@/hoc/withHolidays';
import withSelectedDay from '@/hoc/withSelectedDay';
import withTasks from '@/hoc/withTasks';
import withWeekends from '@/hoc/withWeekends';

import Calendar from './index';

const meta: Meta<typeof Calendar> = {
    title: 'Component/Calendar',
    component: Calendar,
    argTypes: {
        isWithSelectedDay: {
            name: 'Is selecting date enabled',
        },
        isDayWeekend: {
            name: 'Are weekends enabled',
        },
        isHolidayDate: {
            table: {
                disable: true,
            },
        },
        isSundayFirst: {
            name: 'Is Sunday first',
        },
        isWithRange: {
            name: 'Is with range',
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
calendar.addDecorator(withSelectedDay);
calendar.addDecorator(withWeekends);
calendar.addDecorator(withHolidays);
const CalendarWithTasks = calendar.getCalendar();

export const WithTodos: Story = {
    render: () => <CalendarWithTasks />,
};

export const FullFunctionalCalendar: Story = {
    args: {
        isWithSelectedDay: true,
        isDayWeekend: isDayWeekend,
        isHolidayDate: isHolidayDate,
        isSundayFirst: true,
        minValue: new Date(2023, 5, 1),
        maxValue: new Date(2024, 4, 1),
        isWithRange: true,
    },
};
