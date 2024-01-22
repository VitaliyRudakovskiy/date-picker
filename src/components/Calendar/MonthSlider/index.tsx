import React, { useCallback } from 'react';
import next from '@assets/next.svg';
import prev from '@assets/prev.svg';
import { MONTHS } from '@constants/calendar';
import { useCalendar } from '@providers/CalendarProvider';

import { MonthName, MonthSliderIcon, MonthSliderWrapper } from './styled';

const MonthSlider = () => {
    const { selectedMonth, selectedYear, setSelectedMonth, setSelectedYear } = useCalendar();

    const handleMonthChange = useCallback(
        (to: 'next' | 'prev') => () => {
            let newYear = selectedYear;
            if (to === 'next') {
                const newMonth = (selectedMonth + 1) % 12;
                if (newMonth < selectedMonth) {
                    newYear++;
                    setSelectedYear(newYear);
                }
                setSelectedMonth(newMonth);
            } else {
                const newMonth = (selectedMonth + 11) % 12;
                if (newMonth > selectedMonth) {
                    newYear--;
                    setSelectedYear(newYear);
                }
                setSelectedMonth(newMonth);
            }
        },

        [selectedMonth, selectedYear],
    );

    return (
        <MonthSliderWrapper>
            <MonthSliderIcon src={prev} alt="prevMonth" onClick={handleMonthChange('prev')} />
            <MonthName>
                {MONTHS[selectedMonth]} {selectedYear}
            </MonthName>
            <MonthSliderIcon src={next} alt="nextMonth" onClick={handleMonthChange('next')} />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
