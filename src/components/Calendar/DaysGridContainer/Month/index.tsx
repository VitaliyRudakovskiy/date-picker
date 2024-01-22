import React, { useCallback } from 'react';
import { useCalendar } from '@providers/CalendarProvider';
import { getMonthIndex } from '@utils/getFullMonth';

import { MonthContainer } from './styled';
import { IMonthProps } from './types';

const Month = ({ month, isSelected }: IMonthProps) => {
    const { setCalendarType, setSelectedMonth } = useCalendar();

    const handleYearClick = useCallback(() => {
        setCalendarType('Day');
        setSelectedMonth(getMonthIndex(month));
    }, []);

    return (
        <MonthContainer $isMonthSelected={isSelected} onClick={handleYearClick}>
            {month}
        </MonthContainer>
    );
};

export default Month;
