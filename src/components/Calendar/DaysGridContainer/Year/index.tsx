import React, { useCallback } from 'react';
import { useCalendar } from '@providers/CalendarProvider';

import { YearContainer } from './styled';
import { IYearProps } from './types';

const Year = ({ year, isSelected }: IYearProps) => {
    const { setCalendarType, setSelectedYear } = useCalendar();

    const handleYearClick = useCallback(() => {
        setCalendarType('Day');
        setSelectedYear(year);
    }, []);

    return (
        <YearContainer $isYearSelected={isSelected} onClick={handleYearClick}>
            {year}
        </YearContainer>
    );
};

export default Year;
