import { Meta, StoryObj } from '@storybook/react';

import DatePicker from './index';
import UtilityCalendar from '@hoc/index';
import { ComponentType } from 'react';

const calendarService = new UtilityCalendar();
const DefaultCalendar = calendarService.getCalendar() as ComponentType;

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

export const Primary: Story = {
    args: {
        CalendarView: DefaultCalendar,
    },
};
