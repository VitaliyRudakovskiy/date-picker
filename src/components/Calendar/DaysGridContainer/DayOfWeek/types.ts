export interface IDayProps {
    day: Date;
    isActive: boolean;
    isWeekend: boolean;
    isToday: boolean;
}

export interface IDayStyledProps {
    $isActive: boolean;
    $isWeekend: boolean;
    $isToday: boolean;
    $isDaySelected: boolean;
}
