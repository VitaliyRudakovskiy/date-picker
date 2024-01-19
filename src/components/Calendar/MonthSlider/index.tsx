import React from 'react';
import { useSelector } from 'react-redux';
import next from '@assets/next.svg';
import prev from '@assets/prev.svg';
import { MONTHS } from '@constants/calendar';
import { selectedMonth } from '@features/calendarSlice';
import { selectedYear } from '@features/calendarSlice';

import { MonthName, MonthSliderIcon, MonthSliderWrapper } from './styled';

const MonthSlider = () => {
    const month = useSelector(selectedMonth);
    const year = useSelector(selectedYear);
    
    return (
        <MonthSliderWrapper>
            <MonthSliderIcon src={prev} alt="prevWeek" />
            <MonthName>{MONTHS[month]} {year}</MonthName>
            <MonthSliderIcon src={next} alt="nextWeek" />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
