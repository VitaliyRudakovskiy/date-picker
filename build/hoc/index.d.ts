import { FC } from 'react';
import { ICalendarProps } from '@/components/Calendar/types';
declare class UtilityCalendar {
    private calendar;
    constructor();
    addDecorator(decorator: (calendar: FC<ICalendarProps>) => FC<ICalendarProps>): void;
    getCalendar(): FC<ICalendarProps>;
}
export default UtilityCalendar;
