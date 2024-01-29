import { FC } from 'react';
import Calendar from '@components/Calendar';
import { ICalendarProps } from '@components/Calendar/types';

class UtilityCalendar {
    private calendar: FC<ICalendarProps>;

    constructor() {
        this.calendar = Calendar;
    }

    public addDecorator(decorator: (calendar: FC<ICalendarProps>) => FC<ICalendarProps>): void {
        this.calendar = decorator(this.calendar);
    }

    public getCalendar(): FC<ICalendarProps> {
        return this.calendar;
    }
}

export default UtilityCalendar;
