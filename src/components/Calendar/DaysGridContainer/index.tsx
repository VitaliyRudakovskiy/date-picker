import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectedFirstDayOfWeek,
    selectedMonth,
    selectedToday,
    selectedYear,
} from '@features/calendarSlice';
import { getFullMonth, isDayInCurrentMonth, isDayWeekend, isSameDay } from '@utils/getFullMonth';

import DayOfWeek from './DayOfWeek';
import { DaysGridWrapper } from './styled';

const DaysGridContainer = () => {
    const firstDayOfWeek = useSelector(selectedFirstDayOfWeek);
    const currentMonth = useSelector(selectedMonth);
    const currentYear = useSelector(selectedYear);
    const today = useSelector(selectedToday);

    const MONTH_DAYS = getFullMonth(currentMonth, currentYear, firstDayOfWeek);

    return (
        <DaysGridWrapper>
            {MONTH_DAYS.map((day) => (
                <DayOfWeek
                    key={day.getTime()}
                    day={day}
                    isActive={isDayInCurrentMonth(day, currentMonth, currentYear)}
                    isWeekend={isDayWeekend(day)}
                    isToday={isSameDay(day, today)}
                />
            ))}
        </DaysGridWrapper>
    );
};

export default DaysGridContainer;
