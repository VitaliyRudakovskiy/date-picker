import React, { useMemo } from 'react';

import { DAYS_OF_WEEK } from '@/constants/calendar';
import withTheme from '@/hoc/withTheme';

import DayOfWeek from './DayName';
import { DaysOfWeekWrapper } from './styled';
import { IDaysOfWeekProps } from './types';

const DaysOfWeek = ({ isSundayFirst = false }: IDaysOfWeekProps) => {
    const daysOfWeek = useMemo(() => {
        const allDays = Object.values(DAYS_OF_WEEK);
        return !isSundayFirst ? allDays : [allDays[6], ...allDays.slice(0, 6)];
    }, [isSundayFirst]);

    return (
        <DaysOfWeekWrapper>
            {daysOfWeek.map((day) => (
                <DayOfWeek key={day} day={day} />
            ))}
        </DaysOfWeekWrapper>
    );
};

export default withTheme(DaysOfWeek);
