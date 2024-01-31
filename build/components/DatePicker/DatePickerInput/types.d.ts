import { Dispatch, SetStateAction } from 'react';
type DispatchString = Dispatch<SetStateAction<string>>;
type DispatchBoolean = Dispatch<SetStateAction<boolean>>;
export interface IDatePickerInputProps {
    inputText: string;
    setInputText: DispatchString;
    setIsCalendarOpen: DispatchBoolean;
    setInvalidInputError: DispatchString;
}
export {};
