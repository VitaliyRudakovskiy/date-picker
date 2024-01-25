import React from 'react';
import type { Preview } from '@storybook/react';

import CalendarProvider from '../src/providers/CalendarProvider';
import RangeProvider from '../src/providers/RangeProvider';
import ErrorBoundary from '../src/components/ErrorBoundary';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <CalendarProvider>
                <RangeProvider>
                    <ErrorBoundary>
                        <Story />
                    </ErrorBoundary>
                </RangeProvider>
            </CalendarProvider>
        ),
    ],
};

export default preview;
