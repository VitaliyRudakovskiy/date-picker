import React, { useState } from 'react';
import Calendar from '@assets/icons/Calendar';
import Clear from '@assets/icons/Clear';
import withTheme from '@hoc/withTheme';
import CalendarProvider from '@providers/CalendarProvider';

import DatePickerInput from './DatePickerInput';
import { DateLabelContainer, DatePickerHeader, DatePickerWrapper, ErrorText } from './styled';
import { IDatePickerProps } from './types';

const DatePicker = ({ CalendarView }: IDatePickerProps) => {
    const [inputText, setInputText] = useState<string>('');
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
    const [invalidInputError, setInvalidInputError] = useState<string>('');

    const handleClearIconClick = () => {
        setInputText('');
    };

    const handleCalendarIconClick = () => {
        setIsCalendarOpen((prevIsOpened) => !prevIsOpened);
    };

    return (
        <CalendarProvider>
            <DatePickerWrapper data-testid="date-picker">
                <DateLabelContainer>
                    <p>Date</p>
                    {invalidInputError && <ErrorText>{invalidInputError}</ErrorText>}
                </DateLabelContainer>

                <DatePickerHeader>
                    <Calendar
                        onClick={handleCalendarIconClick}
                        data-testid="calendar-icon-button"
                    />
                    <DatePickerInput
                        inputText={inputText}
                        setInputText={setInputText}
                        setIsCalendarOpen={setIsCalendarOpen}
                        setInvalidInputError={setInvalidInputError}
                    />
                    <Clear onClick={handleClearIconClick} />
                </DatePickerHeader>

                {isCalendarOpen && <CalendarView />}
            </DatePickerWrapper>
        </CalendarProvider>
    );
};

export default withTheme(DatePicker);
