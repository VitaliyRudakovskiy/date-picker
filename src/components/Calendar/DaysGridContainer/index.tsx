import React from 'react';
import { useCalendar } from '@providers/CalendarProvider';
import { getFullMonth, isDayInCurrentMonth, isDayWeekend, isSameDay } from '@utils/getFullMonth';

import DayOfWeek from './DayOfWeek';
import { DaysGridWrapper } from './styled';

const DaysGridContainer = () => {
    const { firstDayOfWeek, today, selectedMonth, selectedYear } = useCalendar();

    const MONTH_DAYS = getFullMonth(selectedMonth, selectedYear, firstDayOfWeek);

    return (
        <DaysGridWrapper>
            {MONTH_DAYS.map((day) => (
                <DayOfWeek
                    key={day.getTime()}
                    day={day}
                    isActive={isDayInCurrentMonth(day, selectedMonth, selectedYear)}
                    isWeekend={isDayWeekend(day)}
                    isToday={isSameDay(day, today)}
                />
            ))}
        </DaysGridWrapper>
    );
};

export default DaysGridContainer;
