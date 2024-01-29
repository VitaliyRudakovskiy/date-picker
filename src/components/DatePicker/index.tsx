import React, { useState } from 'react';
import calendar from '@assets/calendar.svg';
import clear from '@assets/clear.svg';
import { Icon } from '@constants/style/globalStyles';
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
            <DatePickerWrapper>
                <DateLabelContainer>
                    <p>Date</p>
                    {invalidInputError && <ErrorText>{invalidInputError}</ErrorText>}
                </DateLabelContainer>

                <DatePickerHeader>
                    <Icon src={calendar} alt="Toggle calendar" onClick={handleCalendarIconClick} />
                    <DatePickerInput
                        inputText={inputText}
                        setInputText={setInputText}
                        setIsCalendarOpen={setIsCalendarOpen}
                        setInvalidInputError={setInvalidInputError}
                    />
                    <Icon src={clear} alt="Clear text" onClick={handleClearIconClick} />
                </DatePickerHeader>

                {isCalendarOpen && <CalendarView />}
            </DatePickerWrapper>
        </CalendarProvider>
    );
};

export default withTheme(DatePicker);
