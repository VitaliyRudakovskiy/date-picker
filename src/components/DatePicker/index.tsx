import React, { FC, useState } from 'react';
import calendar from '@assets/calendar.svg';
import clear from '@assets/clear.svg';
import Calendar from '@components/Calendar';
import { Icon } from '@constants/style/globalStyles';
import withTheme from '@hoc/withTheme';

import DatePickerInput from './DatePickerInput';
import { DateLabelContainer, DatePickerHeader, DatePickerWrapper } from './styled';

const DatePicker: FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

    const handleClearIconClick = () => {
        setInputText('');
    };

    const handleCalendarIconClick = () => {
        setIsCalendarOpen((prevIsOpened) => !prevIsOpened);
    };

    return (
        <DatePickerWrapper>
            <DateLabelContainer>
                <p>Date</p>
            </DateLabelContainer>
            <DatePickerHeader>
                <Icon src={calendar} alt="Toggle calendar" onClick={handleCalendarIconClick} />
                <DatePickerInput inputText={inputText} setInputText={setInputText} />
                <Icon src={clear} alt="Clear text" onClick={handleClearIconClick} />
            </DatePickerHeader>

            {isCalendarOpen && <Calendar />}
        </DatePickerWrapper>
    );
};

export default withTheme(DatePicker);
