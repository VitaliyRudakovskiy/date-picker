export interface IDayProps {
    day: Date;
    isActive: boolean;
    isWeekend: boolean;
    isToday: boolean;
    isHoliday?: boolean;
}

export interface IDayStyledProps {
    $isActive: boolean;
    $isWeekend: boolean;
    $isToday: boolean;
    $isDaySelected: boolean;
    $isHoliday?: boolean;
}
