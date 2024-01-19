import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DAYS_OF_WEEK } from '@constants/calendar';
import { selectedFirstDayOfWeek } from '@features/calendarSlice';

import DayOfWeek from './DayOfWeek';
import { DaysOfWeekWrapper } from './styled';

const DaysOfWeek = () => {
    const firstDay = useSelector(selectedFirstDayOfWeek);

    const daysOfWeek = useMemo(() => {
        const allDays = Object.values(DAYS_OF_WEEK);
        return firstDay === "Monday" ? allDays : [allDays[6], ...allDays.slice(0, 6)];
    }, [firstDay]) 

    return (
        <DaysOfWeekWrapper>
            {daysOfWeek.map((day) => (
                <DayOfWeek key={day} day={day}/>
            ))}
        </DaysOfWeekWrapper>
    );
};

export default DaysOfWeek;
