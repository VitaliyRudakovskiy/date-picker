import React, { useCallback } from 'react';
import next from '@assets/next.svg';
import prev from '@assets/prev.svg';
import { MONTHS } from '@constants/calendar';
import { useCalendar } from '@providers/CalendarProvider';

import { MonthName, MonthNameContainer, MonthSliderIcon, MonthSliderWrapper, Year } from './styled';

const MonthSlider = () => {
    const {
        selectedMonth,
        selectedYear,
        calendarType,
        setSelectedMonth,
        setSelectedYear,
        setCalendarType,
    } = useCalendar();

    const handleMonthChange = useCallback(
        (to: 'next' | 'prev') => () => {
            if (calendarType === 'Day') {
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
            }
            if (calendarType === 'Year') {
                if (to === 'next') setSelectedYear(selectedYear + 10);
                else setSelectedYear(selectedYear - 10);
            }
        },

        [calendarType, selectedMonth, selectedYear],
    );

    const handleMonthClick = useCallback(() => {
        setCalendarType('Month');
    }, []);

    const handleYearClick = useCallback(() => {
        setCalendarType('Year');
    }, []);

    return (
        <MonthSliderWrapper>
            <MonthSliderIcon src={prev} alt="prevMonth" onClick={handleMonthChange('prev')} />
            <MonthNameContainer>
                {calendarType === 'Day' ? (
                    <>
                        <MonthName onClick={handleMonthClick}>{MONTHS[selectedMonth]} </MonthName>
                        <Year onClick={handleYearClick}>{selectedYear}</Year>
                    </>
                ) : calendarType === 'Month' ? (
                    <MonthName>Months</MonthName>
                ) : (
                    <MonthName>
                        {selectedYear - 10} - {selectedYear + 9}
                    </MonthName>
                )}
            </MonthNameContainer>
            <MonthSliderIcon src={next} alt="nextMonth" onClick={handleMonthChange('next')} />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
