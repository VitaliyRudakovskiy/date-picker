import React, { ChangeEvent, useCallback } from 'react';
import withTheme from '@hoc/withTheme';

import DateInput from './styled';
import { IDatePickerInputProps } from './types';
import { DATE_INPUT_REGEX } from '@constants/calendar';

const DatePickerInput = (props: IDatePickerInputProps) => {
    const { inputText, setInputText, setIsCalendarOpen, setInvalidInputError } = props;

    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const inputDate = e.target.value;
            setInvalidInputError('');

            //const isInputValid = DATE_INPUT_REGEX.test(inputDate);

            if (inputDate.length === 2 && !inputDate.includes('.')) {
                setInputText(`${inputDate}.`);
                return;
            }

            if (inputDate.length === 5 && inputDate.charAt(4) !== '.') {
                setInputText(`${inputDate}.`);
                return;
            }

            // if (!isInputValid) {
            //     e.preventDefault();
            //     setInvalidInputError('Date should be in format: dd.mm.yyyy');
            //     return;
            // }

            if (inputDate.length > 10) {
                e.preventDefault();
                return;
            }

            setInputText(inputDate);
        },
        [inputText],
    );

    const handleFocusInput = useCallback(() => {
        setIsCalendarOpen(true);
    }, []);

    return (
        <DateInput
            placeholder="DD.MM.YYYY"
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onFocus={handleFocusInput}
        />
    );
};

export default withTheme(DatePickerInput);
