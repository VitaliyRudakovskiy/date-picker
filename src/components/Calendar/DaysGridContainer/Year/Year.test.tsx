import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Year from './index';

describe('Year Test', () => {
    it('should render the year', () => {
        const { getByTestId } = render(<Year year={2024} isSelected={false} />);
        const yearElement = getByTestId('year-in-grid');
        expect(yearElement).toBeInTheDocument();
    });

    it('should apply the correct styling when isSelected is true', () => {
        const { getByTestId } = render(<Year year={2024} isSelected={true} />);
        const yearElement = getByTestId('year-in-grid');
        expect(yearElement).toHaveStyle('color: primary');
        expect(yearElement).toHaveStyle('background-color: chosenDay');
    });

    it('should not apply the selected styling when isSelected is false', () => {
        const { getByTestId } = render(<Year year={2024} isSelected={false} />);
        const yearElement = getByTestId('year-in-grid');
        expect(yearElement).toHaveStyle('color: text');
        expect(yearElement).toHaveStyle('background-color: primary');
    });
});
