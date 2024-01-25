export interface ICalendarProps {
    isHolidayDate?: (date: Date) => boolean;
    isWithRange?: boolean;
}

export interface ICalendarStyledProps {
    $isRangeExist?: boolean;
}
