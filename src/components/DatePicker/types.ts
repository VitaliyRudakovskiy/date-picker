import { ComponentType } from "react";

export interface IDatePickerProps {
    CalendarView: ComponentType;
    rangeStart?: string;
    rangeEnd?: string;
}