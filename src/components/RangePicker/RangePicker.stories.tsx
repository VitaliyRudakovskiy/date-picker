import { Meta, StoryObj } from '@storybook/react';

import RangePicker from './index';
import UtilityCalendar from '@hoc/index';
import withRange from '@hoc/withRange';

const rangeCalendar = new UtilityCalendar();
rangeCalendar.addDecorator(withRange);
const Calendar = rangeCalendar.getCalendar();

const meta: Meta<typeof RangePicker> = {
    title: 'Component/RangePicker',
    component: RangePicker,
    argTypes: {
        CalendarView: {
            table: {
                disable: true,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

export const Primary: Story = {
    args: {
        CalendarView: Calendar,
    },
};
