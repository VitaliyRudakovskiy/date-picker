import { Meta, StoryObj } from '@storybook/react';

import DaysHeader from './index';

const meta: Meta<typeof DaysHeader> = {
    title: 'Component/DaysHeader',
    component: DaysHeader,
    argTypes: {
        label: 'test',
    },
};

export default meta;

type Story = StoryObj<typeof DaysHeader>;

export const Primary: Story = {
    args: {
        label: 'test',
    },
};
