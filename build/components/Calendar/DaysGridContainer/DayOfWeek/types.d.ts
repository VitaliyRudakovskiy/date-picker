export interface IDayProps {
    day: Date;
    isActive: boolean;
    isWeekend?: boolean;
    isToday: boolean;
    isHoliday?: boolean;
    isWithRange?: boolean;
    isWithSelectedDay?: boolean;
    isWithTasks?: boolean;
    minValue?: Date;
    maxValue?: Date;
}
export interface IDayStyledProps {
    $isActive: boolean;
    $isWeekend?: boolean;
    $isToday: boolean;
    $isDaySelected: boolean;
    $isHoliday?: boolean;
    $range?: 'Start' | 'Between' | 'End';
}
