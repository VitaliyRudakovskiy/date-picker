import React, { Component } from 'react';
import withTheme from '@hoc/withTheme';

import { Error, ErrorBoundaryWrapper } from './styled';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error,
        };
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            return (
                <ErrorBoundaryWrapper data-testid="error-boundary">
                    <h2>Oops! Something went wrong</h2>
                    <Error>{error && error.toString()}</Error>
                </ErrorBoundaryWrapper>
            );
        }

        return this.props.children;
    }
}

export default withTheme(ErrorBoundary);
