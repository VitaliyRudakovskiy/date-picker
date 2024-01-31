import { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'Component/Button',
    component: Button,
    argTypes: {
        text: {
            name: 'Text on the button',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        text: 'Clear Interval',
    },
};
