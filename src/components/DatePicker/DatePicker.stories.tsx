import { Meta, StoryObj } from '@storybook/react';

import DatePicker from './index';

const meta: Meta<typeof DatePicker> = {
    title: 'Component/DatePicker',
    component: DatePicker,
    argTypes: {
        label: { name: 'DatePicker label' },
    },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
    args: {
        label: 'Date',
        Calendar: DatePicker,
    },
};
