import React, { useCallback } from 'react';
import withTheme from '@hoc/withTheme';
import { useCalendar } from '@providers/CalendarProvider';
import { isSameDay } from '@utils/getFullMonth';

import { DayOfWeekButton } from './styled';
import { IDayProps } from './types';

const DayOfWeek = ({ day, isActive, isWeekend, isToday }: IDayProps) => {
    const { selectedDay, setSelectedDay } = useCalendar();

    const handleSelectDay = useCallback(() => {
        setSelectedDay(day);
    }, [selectedDay]);

    return (
        <DayOfWeekButton
            $isActive={isActive}
            $isWeekend={isWeekend}
            $isToday={isToday}
            onClick={handleSelectDay}
            $isDaySelected={isSameDay(day, selectedDay)}
        >
            {day.getDate()}
        </DayOfWeekButton>
    );
};

export default withTheme(DayOfWeek);
