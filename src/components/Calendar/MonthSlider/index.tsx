import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import next from '@assets/next.svg';
import prev from '@assets/prev.svg';
import { MONTHS } from '@constants/calendar';
import { selectedMonth, setSelectedMonth, setSelectedYear } from '@features/calendarSlice';
import { selectedYear } from '@features/calendarSlice';

import { MonthName, MonthSliderIcon, MonthSliderWrapper } from './styled';

const MonthSlider = () => {
    const month = useSelector(selectedMonth);
    const year = useSelector(selectedYear);

    const dispatch = useDispatch();

    const handleMonthChange = useCallback(
        (to: 'next' | 'prev') => () => {
            let newYear = year;
            if (to === 'next') {
                const newMonth = (month + 1) % 12;
                if (newMonth < month) {
                    newYear++;
                    dispatch(setSelectedYear(newYear));
                }
                dispatch(setSelectedMonth(newMonth));
            } else {
                const newMonth = (month + 11) % 12;
                if (newMonth > month) {
                    newYear--;
                    dispatch(setSelectedYear(newYear));
                }
                dispatch(setSelectedMonth(newMonth));
            }
        },
        [month, year],
    );

    return (
        <MonthSliderWrapper>
            <MonthSliderIcon src={prev} alt="prevMonth" onClick={handleMonthChange('prev')} />
            <MonthName>
                {MONTHS[month]} {year}
            </MonthName>
            <MonthSliderIcon src={next} alt="nextMonth" onClick={handleMonthChange('next')} />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
