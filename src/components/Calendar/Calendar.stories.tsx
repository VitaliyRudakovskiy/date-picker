import { Meta, StoryObj } from '@storybook/react';

import Calendar from './index';

const meta: Meta<typeof Calendar> = {
    title: 'Component/Calendar',
    component: Calendar,
    argTypes: {
        label: { name: 'DatePicker label' },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
    args: {
        label: 'Calendar',
        Calendar: Calendar,
    },
};
