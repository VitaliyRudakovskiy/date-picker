import { Dispatch, SetStateAction } from 'react';
export interface DispatchString extends Dispatch<SetStateAction<string>> {}
export interface DispatchBoolean extends Dispatch<SetStateAction<boolean>> {}
export interface IDatePickerInputProps {
    inputText: string;
    setInputText: DispatchString;
    setIsCalendarOpen: DispatchBoolean;
    setInvalidInputError: DispatchString;
}
