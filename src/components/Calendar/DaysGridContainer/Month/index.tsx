import React, { useCallback } from 'react';
import { IMonthProps } from './types';
import { MonthContainer } from './styled';
import { useCalendar } from '@providers/CalendarProvider';
import { getMonthIndex } from '@utils/getFullMonth';

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
