import { ComponentType } from 'react';
import UtilityCalendar from '@hoc/index';
import withHolidays from '@hoc/withHolidays';
import withSelectedDay from '@hoc/withSelectedDay';
import withTasks from '@hoc/withTasks';
import withWeekends from '@hoc/withWeekends';
import { Meta, StoryObj } from '@storybook/react';

import DatePicker from './index';

const utilutyCalendar = new UtilityCalendar();
const DefaultCalendar = utilutyCalendar.getCalendar() as ComponentType;

utilutyCalendar.addDecorator(withSelectedDay);
utilutyCalendar.addDecorator(withHolidays);
utilutyCalendar.addDecorator(withWeekends);
utilutyCalendar.addDecorator(withTasks);
const WithDecoratorsCalendar = utilutyCalendar.getCalendar() as ComponentType;

const meta: Meta<typeof DatePicker> = {
    title: 'Component/DatePicker',
    component: DatePicker,
    argTypes: {
        CalendarView: {
            table: {
                disable: true,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    args: {
        CalendarView: DefaultCalendar,
    },
};

export const Fullfilled: Story = {
    args: {
        CalendarView: WithDecoratorsCalendar,
    },
};
