import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import DatePicker from './index';
import { Provider } from 'react-redux';
import store from '@store/store';

const meta: Meta<typeof DatePicker> = {
    title: 'Component/DatePicker',
    component: DatePicker,
    argTypes: {
        label: { name: 'DatePicker label' },
    },
    decorators: [
        (DatePicker) => (
            <Provider store={store}>
                <DatePicker />
            </Provider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
    args: {
        label: 'Date',
        Calendar: DatePicker,
    },
};
