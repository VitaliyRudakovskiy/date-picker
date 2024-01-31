import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Month from './index';

describe('Month Test', () => {
    it('should render the month name when isSelected is false', () => {
        const { getByTestId } = render(<Month month="January" isSelected={false} />);
        const monthElement = getByTestId('month-in-grid');
        expect(monthElement).toHaveTextContent('January');
    });

    it('should apply the correct styling when isSelected is true', () => {
        const { getByTestId } = render(<Month month="January" isSelected={true} />);
        const monthElement = getByTestId('month-in-grid');
        expect(monthElement).toHaveStyle('color: primary');
        expect(monthElement).toHaveStyle('background-color: chosenDay');
    });

    it('should not apply the selected styling when isSelected is false', () => {
        const { getByTestId } = render(<Month month="January" isSelected={false} />);
        const monthElement = getByTestId('month-in-grid');
        expect(monthElement).toHaveStyle('color: text');
        expect(monthElement).toHaveStyle('background-color: primary');
    });
});
