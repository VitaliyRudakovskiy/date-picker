import React, { useCallback } from 'react';

import next from '@/assets/next.svg';
import prev from '@/assets/prev.svg';
import { MONTHS } from '@/constants/calendar';
import useCalendar from '@/context/useCalendar';
import changeMonth from '@/helpers/changeMonth';
import changeYear from '@/helpers/changeYear';

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

    const handleSliderChange = useCallback(
        (to: 'next' | 'prev') => () => {
            if (calendarType === 'Day') {
                changeMonth(
                    to,
                    selectedMonth,
                    selectedYear,
                    setSelectedMonth,
                    setSelectedYear,
                    calendarType,
                );
            }
            if (calendarType === 'Year') {
                changeYear(to, selectedYear, setSelectedYear);
            }
        },
        [selectedMonth, selectedYear, setSelectedMonth, setSelectedYear, calendarType],
    );

    const handleCalendarTypeChange = useCallback(
        (type: 'Month' | 'Year') => () => {
            setCalendarType(type);
        },
        [setCalendarType],
    );

    const renderMonthYearHeader = () => {
        switch (calendarType) {
            case 'Day':
                return (
                    <>
                        <MonthName onClick={handleCalendarTypeChange('Month')}>
                            {MONTHS[selectedMonth]}{' '}
                        </MonthName>
                        <Year onClick={handleCalendarTypeChange('Year')}>{selectedYear}</Year>
                    </>
                );
            case 'Month':
                return <MonthName onClick={handleCalendarTypeChange('Month')}>Months</MonthName>;
            case 'Year':
                return (
                    <MonthName onClick={handleCalendarTypeChange('Year')}>
                        {selectedYear - 10} - {selectedYear + 9}
                    </MonthName>
                );
            default:
                return null;
        }
    };

    return (
        <MonthSliderWrapper data-testid="month-slider">
            <MonthSliderIcon src={prev} alt="prevMonth" onClick={handleSliderChange('prev')} />
            <MonthNameContainer>{renderMonthYearHeader()}</MonthNameContainer>
            <MonthSliderIcon src={next} alt="nextMonth" onClick={handleSliderChange('next')} />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
