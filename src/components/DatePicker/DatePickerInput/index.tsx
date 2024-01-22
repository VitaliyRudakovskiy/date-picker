import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';
import withTheme from '@hoc/withTheme';

import DateInput from './styled';
import { IDatePickerInputProps } from './types';
import { DATE_INPUT_REGEX } from '@constants/calendar';
import { useDispatch } from 'react-redux';
import { setSelectedDay, setSelectedMonth, setSelectedYear } from '@features/calendarSlice';
import { areAllDateValuesValid, getDateParts, isDateValid } from '@utils/getFullMonth';

const DatePickerInput = (props: IDatePickerInputProps) => {
    const dispatch = useDispatch();

    const { inputText, setInputText, setIsCalendarOpen, setInvalidInputError } = props;

    const handleInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            setInvalidInputError('');

            const isInputValid = DATE_INPUT_REGEX.test(value);

            if (!isInputValid) {
                event.preventDefault();
                setInvalidInputError('Date should be in format: dd.mm.yyyy');
                return;
            }

            if (value.length > 10) {
                event.preventDefault();
                return;
            }

            setInputText(value);
        },
        [inputText],
    );

    const handleInputSubmit = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;

        if (event.key === 'Enter') {
            if (!isDateValid(value)) {
                setInvalidInputError('Date should be in format: dd.mm.yyyy');
                return;
            }

            if (!areAllDateValuesValid(value)) {
                setInvalidInputError("It seems this date doesn't exist :(");
                return;
            }

            const [day, month, year] = getDateParts(value);
            const newSelectedDate = new Date(year, month - 1, day);

            dispatch(setSelectedYear(year));
            dispatch(setSelectedMonth(month - 1));
            dispatch(setSelectedDay(newSelectedDate));
        }
    }, []);

    const handleFocusInput = useCallback(() => {
        setIsCalendarOpen(true);
    }, []);

    return (
        <DateInput
            placeholder="DD.MM.YYYY"
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            onFocus={handleFocusInput}
        />
    );
};

export default withTheme(DatePickerInput);
