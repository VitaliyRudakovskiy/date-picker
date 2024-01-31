import { Meta, StoryObj } from '@storybook/react';

import Month from './index';

const meta: Meta<typeof Month> = {
    title: 'Component/Month',
    component: Month,
    argTypes: {
        month: {
            name: 'Name of the month',
        },
        isSelected: {
            name: 'Is month selected',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Month>;

export const Selected: Story = {
    args: {
        month: 'January',
        isSelected: true,
    },
};

export const NotSelected: Story = {
    args: {
        month: 'March',
        isSelected: false,
    },
};
