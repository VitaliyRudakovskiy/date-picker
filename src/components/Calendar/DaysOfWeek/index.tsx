import React from 'react';
import { DAYS_OF_WEEK } from '@constants/calendar';

import { DayOfWeek, DaysOfWeekWrapper } from './styled';

const DaysOfWeek = () => {
    return (
        <DaysOfWeekWrapper>
            {Object.values(DAYS_OF_WEEK).map((day) => (
                <DayOfWeek key={day}>{day}</DayOfWeek>
            ))}
        </DaysOfWeekWrapper>
    );
};

export default DaysOfWeek;
