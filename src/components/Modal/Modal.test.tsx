import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import getReadbleDate from '@/helpers/getReadableDate';

import '@testing-library/jest-dom';

import Modal from './index';

describe('Month Test', () => {
    it('should render a modal with the correct title', () => {
        const onClose = jest.fn();
        const selectedDay = new Date();
        const taskDate = getReadbleDate(selectedDay);
        const modalRoot = document.createElement('div');
        modalRoot.setAttribute('id', 'modal-root');
        document.body.appendChild(modalRoot);

        render(<Modal onClose={onClose} />, { container: modalRoot });

        expect(screen.getByTestId('modal')).toBeInTheDocument();
        expect(screen.getByText(`Tasks for ${taskDate}`)).toBeInTheDocument();

        document.body.removeChild(modalRoot);
    });

    it('closes the modal on close button click', () => {
        const onClose = jest.fn();
        const { getByText } = render(<Modal onClose={onClose} />);

        const closeButton = getByText('×');
        fireEvent.click(closeButton);

        expect(onClose).toHaveBeenCalled();
    });
});
