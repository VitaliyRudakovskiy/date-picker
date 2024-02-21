import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';

import { DATE_INPUT_REGEX } from '@/constants/calendar';
import useCalendar from '@/context/useCalendar';
import getDateParts from '@/helpers/getDateParts';
import areAllDateValuesValid from '@/helpers/validators/areAllDateValuesValid';
import isDateValid from '@/helpers/validators/isDateValid';
import withTheme from '@/hoc/withTheme';

import DateInput from './styled';
import { IDatePickerInputProps } from './types';

const DatePickerInput = (props: IDatePickerInputProps) => {
    const { setSelectedDay, setSelectedMonth, setSelectedYear } = useCalendar();

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

            setSelectedYear(year);
            setSelectedMonth(month - 1);
            setSelectedDay(newSelectedDate);
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
