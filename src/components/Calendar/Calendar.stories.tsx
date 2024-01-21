import React from 'react';
import { Provider } from 'react-redux';
import store from '@store/store';
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

export const Primary: Story = (args) => (
    <Provider store={store}>
        <Calendar {...args} />
    </Provider>
);

Primary.args = {
    label: 'Calendar',
};
