import { ReactNode } from 'react';

export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
}
