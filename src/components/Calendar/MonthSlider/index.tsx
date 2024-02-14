import React, { useCallback } from 'react';
import Next from '@assets/icons/Next';
import Prev from '@assets/icons/Prev';
import { MONTHS } from '@constants/calendar';
import { useCalendar } from '@providers/CalendarProvider';

import { MonthName, MonthNameContainer, MonthSliderWrapper, Year } from './styled';

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
                if (to === 'next') setSelectedYear(selectedYear + 20);
                else setSelectedYear(selectedYear - 20);
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
        <MonthSliderWrapper data-testid="month-slider">
            <Prev onClick={handleMonthChange('prev')} />
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
            <Next onClick={handleMonthChange('next')} />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
