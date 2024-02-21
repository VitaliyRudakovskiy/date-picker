import React, { useCallback } from 'react';

import useCalendar from '@/context/useCalendar';
import { getMonthIndex } from '@/helpers/getMonths';
import withTheme from '@/hoc/withTheme';

import { MonthContainer } from './styled';
import { IMonthProps } from './types';

const Month = ({ month, isSelected }: IMonthProps) => {
    const { setCalendarType, setSelectedMonth } = useCalendar();

    const handleYearClick = useCallback(() => {
        setCalendarType('Day');
        setSelectedMonth(getMonthIndex(month));
    }, []);

    return (
        <MonthContainer
            data-testid="month-in-grid"
            $isMonthSelected={isSelected}
            onClick={handleYearClick}
        >
            {month}
        </MonthContainer>
    );
};

export default withTheme(Month);
