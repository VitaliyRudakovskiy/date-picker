import { Meta, StoryObj } from '@storybook/react';

import DaysHeader from './index';

const meta: Meta<typeof DaysHeader> = {
    title: 'Component/DaysHeader',
    component: DaysHeader,
    argTypes: {
        isSundayFirst: {
            table: {
                disable: true,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof DaysHeader>;

export const Standard: Story = {
    args: {
        isSundayFirst: false,
    },
};

export const American: Story = {
    args: {
        isSundayFirst: true,
    },
};
