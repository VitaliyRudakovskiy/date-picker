import { Meta, StoryObj } from '@storybook/react';

import Year from './index';

const meta: Meta<typeof Year> = {
    title: 'Component/Year',
    component: Year,
    argTypes: {
        year: {
            name: 'Name of the year',
        },
        isSelected: {
            name: 'Is year selected',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Year>;

export const Selected: Story = {
    args: {
        year: 2024,
        isSelected: true,
    },
};

export const NotSelected: Story = {
    args: {
        year: 2023,
        isSelected: false,
    },
};
