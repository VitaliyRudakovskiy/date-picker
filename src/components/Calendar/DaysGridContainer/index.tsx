import React, { useMemo } from 'react';
import { useCalendar } from '@providers/CalendarProvider';
import {
    getFullMonth,
    getMonths,
    getYears,
    isDayInCurrentMonth,
    isDayWeekend,
    isMonthSelected,
    isSameDay,
} from '@utils/getFullMonth';

import DayOfWeek from './DayOfWeek';
import Month from './Month';
import { DaysGridWrapper, MonthsGridWrapper, YearsGridWrapper } from './styled';
import { IDaysGridProps } from './types';
import Year from './Year';

const DaysGridContainer = (props: IDaysGridProps) => {
    const {
        isHolidayDate,
        isWithRange,
        isDayWeekend,
        isWithSelectedDay,
        isSundayFirst = false,
        isWithTasks,
    } = props;
    const { today, selectedMonth, selectedYear, calendarType } = useCalendar();

    const firstDayOfWeek = isSundayFirst ? 'Sunday' : 'Monday';

    const CALENDAR_DAYS = useMemo(() => {
        if (calendarType === 'Day')
            return getFullMonth(selectedMonth, selectedYear, firstDayOfWeek);
    }, [calendarType, selectedYear, selectedMonth, firstDayOfWeek]);

    const CALENDAR_MONTHS = useMemo(() => {
        if (calendarType === 'Month') return getMonths();
    }, [calendarType, selectedMonth]);

    const CALENDAR_YEARS = useMemo(() => {
        if (calendarType === 'Year') return getYears(selectedYear);
    }, [calendarType, selectedYear]);

    return (
        <>
            {CALENDAR_DAYS && (
                <DaysGridWrapper>
                    {CALENDAR_DAYS.map((day) => (
                        <DayOfWeek
                            key={day.getTime()}
                            day={day}
                            isActive={isDayInCurrentMonth(day, selectedMonth, selectedYear)}
                            isWeekend={isDayWeekend && isDayWeekend(day)}
                            isToday={isSameDay(day, today)}
                            isHoliday={isHolidayDate && isHolidayDate(day)}
                            isWithRange={isWithRange}
                            isWithSelectedDay={isWithSelectedDay}
                            isWithTasks={isWithTasks}
                        />
                    ))}
                </DaysGridWrapper>
            )}

            {CALENDAR_MONTHS && (
                <MonthsGridWrapper>
                    {CALENDAR_MONTHS.map((month) => (
                        <Month
                            key={month}
                            month={month}
                            isSelected={isMonthSelected(month, selectedMonth)}
                        />
                    ))}
                </MonthsGridWrapper>
            )}

            {CALENDAR_YEARS && (
                <YearsGridWrapper>
                    {CALENDAR_YEARS.map((year) => (
                        <Year key={year} year={year} isSelected={year === selectedYear} />
                    ))}
                </YearsGridWrapper>
            )}
        </>
    );
};

export default DaysGridContainer;
