export interface IDaysGridProps {
    isHolidayDate?: (date: Date) => boolean;
    isWithRange?: boolean;
    isDayWeekend?: (date: Date) => boolean;
    isWithSelectedDay?: boolean;
    isSundayFirst?: boolean;
    isWithTasks?: boolean;
}
