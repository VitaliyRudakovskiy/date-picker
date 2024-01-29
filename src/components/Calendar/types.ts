export interface ICalendarProps {
    isHolidayDate?: (date: Date) => boolean;
    isWithRange?: boolean;
    isWithSelectedDay?: boolean;
    isSundayFirst?: boolean;
    isDayWeekend?: (date: Date) => boolean;
    isWithTasks?: boolean;
}

export interface ICalendarStyledProps {
    $isRangeExist?: boolean;
    $isWithTasks?: boolean;
}
