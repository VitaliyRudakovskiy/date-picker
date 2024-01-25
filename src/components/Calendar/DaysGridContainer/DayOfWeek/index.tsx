import React, { useCallback } from 'react';
import withTheme from '@hoc/withTheme';
import { useCalendar } from '@providers/CalendarProvider';
import { isSameDay } from '@utils/getFullMonth';

import { DayOfWeekButton } from './styled';
import { IDayProps } from './types';
import { useRange } from '@providers/RangeProvider';

const DayOfWeek = (props: IDayProps) => {
    const { day, isActive, isWeekend, isToday, isHoliday = false, isWithRange = false } = props;
    const { selectedDay, setSelectedDay, setSelectedMonth, setSelectedYear } = useCalendar();

    const { range, setRange } = useRange();

    const handleSelectDay = useCallback(() => {
        if (isWithRange) {
            setRange((prevRange) => {
                if (!prevRange || !prevRange.rangeStart) {
                    return { rangeStart: day, rangeEnd: undefined };
                } else if (!prevRange.rangeEnd) {
                    return { ...prevRange, rangeEnd: day };
                } else {
                    return { rangeStart: day, rangeEnd: undefined };
                }
            });
            return;
        }

        if (!isActive) {
            const month = day.getMonth();
            const year = day.getFullYear();

            setSelectedMonth(month);
            setSelectedYear(year);
        }

        setSelectedDay(day);
    }, [selectedDay]);

    const getRangeState = (date: Date) => {
        if (range && range.rangeStart) {
            if (date.getTime() === range.rangeStart.getTime()) {
                return 'Start';
            }

            if (range.rangeEnd && date.getTime() === range.rangeEnd.getTime()) {
                return 'End';
            }

            if (range.rangeEnd && date > range.rangeStart && date < range.rangeEnd) {
                return 'Between';
            }
        }
    };

    return (
        <DayOfWeekButton
            $isActive={isActive}
            $isWeekend={isWeekend}
            $isToday={isToday}
            $isHoliday={isHoliday}
            $range={getRangeState(day)}
            onClick={handleSelectDay}
            $isDaySelected={isSameDay(day, selectedDay)}
        >
            {day.getDate()}
        </DayOfWeekButton>
    );
};

export default withTheme(DayOfWeek);
