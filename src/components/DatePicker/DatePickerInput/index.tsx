import React, { ChangeEvent } from 'react';
import withTheme from '@hoc/withTheme';

import DateInput from './styled';
import { IDatePickerInputProps } from './types';

const DatePickerInput = (props: IDatePickerInputProps) => {
    const { inputText, setInputText } = props;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    return (
        <DateInput
            placeholder="Input date"
            type="text"
            value={inputText}
            onChange={handleInputChange}
        />
    );
};

export default withTheme(DatePickerInput);
