import React, { useMemo } from 'react';
import { DAYS_OF_WEEK } from '@constants/calendar';
import withTheme from '@hoc/withTheme';
import { useCalendar } from '@providers/CalendarProvider';

import DayOfWeek from './DayName';
import { DaysOfWeekWrapper } from './styled';

const DaysOfWeek = () => {
    const { firstDayOfWeek } = useCalendar();

    const daysOfWeek = useMemo(() => {
        const allDays = Object.values(DAYS_OF_WEEK);
        return firstDayOfWeek === 'Monday' ? allDays : [allDays[6], ...allDays.slice(0, 6)];
    }, [firstDayOfWeek]);

    return (
        <DaysOfWeekWrapper>
            {daysOfWeek.map((day) => (
                <DayOfWeek key={day} day={day} />
            ))}
        </DaysOfWeekWrapper>
    );
};

export default withTheme(DaysOfWeek);
