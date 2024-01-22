import React, { useCallback } from 'react';
import { IYearProps } from './types';
import { YearContainer } from './styled';
import { useCalendar } from '@providers/CalendarProvider';

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
