import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import DaysHeader from './index';

describe('Days Header Test', () => {
    it('renders the days header', () => {
        render(<DaysHeader />);

        expect(screen.getByText('Mo')).toBeInTheDocument();
        expect(screen.getByText('Tu')).toBeInTheDocument();
        expect(screen.getByText('We')).toBeInTheDocument();
        expect(screen.getByText('Th')).toBeInTheDocument();
        expect(screen.getByText('Fr')).toBeInTheDocument();
        expect(screen.getByText('Sa')).toBeInTheDocument();
        expect(screen.getByText('Su')).toBeInTheDocument();
    });
});
