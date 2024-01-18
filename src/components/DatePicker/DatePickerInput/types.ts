import { Dispatch, SetStateAction } from 'react';

type DispatchString = Dispatch<SetStateAction<string>>;

export interface IDatePickerInputProps {
    inputText: string;
    setInputText: DispatchString;
}
