import React, { useCallback } from 'react';
import withTheme from '@hoc/withTheme';
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
        <YearContainer
            data-testid="year-in-grid"
            $isYearSelected={isSelected}
            onClick={handleYearClick}
        >
            {year}
        </YearContainer>
    );
};

export default withTheme(Year);
