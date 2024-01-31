import { Meta, StoryObj } from '@storybook/react';

import DaysGridContainer from './index';
import { isDayWeekend, isHolidayDate } from '@utils/checkDate';

const meta: Meta<typeof DaysGridContainer> = {
    title: 'Component/DaysGridContainer',
    component: DaysGridContainer,
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
        minValue: {
            name: 'Min calendar Date',
        },
        maxValue: {
            name: 'Max calendar Date',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DaysGridContainer>;

export const Primary: Story = {
    args: {
        isWithSelectedDay: true,
        isDayWeekend: isDayWeekend,
        isHolidayDate: isHolidayDate,
        isSundayFirst: true,
        minValue: new Date(2023, 5, 1),
        maxValue: new Date(2024, 4, 1),
    },
};
