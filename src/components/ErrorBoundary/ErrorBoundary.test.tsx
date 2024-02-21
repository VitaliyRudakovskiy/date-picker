import React from 'react';
import { render, screen } from '@testing-library/react';

import ErrorBoundary from '@/components/ErrorBoundary';

import '@testing-library/jest-dom';

describe('ErrorBoundary component', () => {
    it('renders children when there is no error', () => {
        const ChildComponent = () => <div data-testid="child-element">Child Element</div>;

        render(
            <ErrorBoundary>
                <ChildComponent />
            </ErrorBoundary>,
        );

        const childElement = screen.getByTestId('child-element');
        expect(childElement).toBeInTheDocument();
    });
});
