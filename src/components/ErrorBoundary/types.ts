import { ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
}
