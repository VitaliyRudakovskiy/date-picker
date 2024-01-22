import { Meta, StoryObj } from '@storybook/react';
import { isHolidayDate } from '@utils/getFullMonth';

import Calendar from './index';

const meta: Meta<typeof Calendar> = {
    title: 'Component/Calendar',
    component: Calendar,
    argTypes: {
        isHolidayDate: {
            table: {
                disable: true,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};

export const WithHolidays: Story = {
    args: {
        isHolidayDate: isHolidayDate,
    },
};
