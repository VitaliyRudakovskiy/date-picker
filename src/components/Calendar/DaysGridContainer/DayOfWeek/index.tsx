import React, { useCallback } from 'react';
import withTheme from '@hoc/withTheme';
import { useCalendar } from '@providers/CalendarProvider';
import { isSameDay } from '@utils/getFullMonth';

import { DayOfWeekButton } from './styled';
import { IDayProps } from './types';

const DayOfWeek = (props: IDayProps) => {
    const { day, isActive, isWeekend, isToday, isHoliday = false } = props;
    const { selectedDay, setSelectedDay, setSelectedMonth, setSelectedYear } = useCalendar();

    const handleSelectDay = useCallback(() => {
        if (!isActive) {
            const month = day.getMonth();
            const year = day.getFullYear();

            setSelectedMonth(month);
            setSelectedYear(year);
        }
        setSelectedDay(day);
    }, [selectedDay]);

    return (
        <DayOfWeekButton
            $isActive={isActive}
            $isWeekend={isWeekend}
            $isToday={isToday}
            $isHoliday={isHoliday}
            onClick={handleSelectDay}
            $isDaySelected={isSameDay(day, selectedDay)}
        >
            {day.getDate()}
        </DayOfWeekButton>
    );
};

export default withTheme(DayOfWeek);
