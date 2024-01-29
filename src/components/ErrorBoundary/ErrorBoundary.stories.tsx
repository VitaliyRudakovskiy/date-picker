import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ErrorBoundary from './index';

const GoodComponent = () => <p>This is the component without an error</p>;
const ErrorComponent = () => {
    throw new Error('Test error');
};

const meta: Meta<typeof ErrorBoundary> = {
    title: 'component/ErrorBoundary',
    component: ErrorBoundary,
    argTypes: {
        children: {
            name: 'Children',
            description: 'Children to render',
            defaultValue: undefined,
        },
    },
};

export default meta;

type Story = StoryObj<typeof ErrorBoundary>;

export const WithoutError: Story = {
    render: () => (
        <ErrorBoundary>
            <GoodComponent />
        </ErrorBoundary>
    ),
};

export const WithError: Story = {
    render: () => (
        <ErrorBoundary>
            <ErrorComponent />
        </ErrorBoundary>
    ),
};
