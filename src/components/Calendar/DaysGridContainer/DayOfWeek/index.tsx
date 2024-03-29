import React, { useCallback } from 'react';

import useCalendar from '@/context/useCalendar';
import { getTasksFromLocalStorage } from '@/helpers/getLocalTasks';
import getRangeState from '@/helpers/getRangeState';
import getReadbleDate from '@/helpers/getReadableDate';
import setRangeValues from '@/helpers/setRangeValues';
import isDateBetweenMinAndMax from '@/helpers/validators/isDateBetweenMinAndMax';
import isSameDay from '@/helpers/validators/isSameDay';
import withTheme from '@/hoc/withTheme';
import { useRange } from '@/providers/RangeProvider';
import { ITask } from '@/types';

import { DayOfWeekButton, TasksMark } from './styled';
import { IDayProps } from './types';

const DayOfWeek = ({
    day,
    isActive,
    isWeekend = false,
    isToday,
    isHoliday = false,
    isWithRange = false,
    isWithSelectedDay = false,
    isWithTasks = false,
    minValue = undefined,
    maxValue = undefined,
}: IDayProps) => {
    const { selectedDay, setSelectedDay, setSelectedMonth, setSelectedYear } = useCalendar();

    const { range, setRange } = useRange();

    const handleSelectDay = useCallback(() => {
        if (minValue && maxValue && !isDateBetweenMinAndMax(day, minValue!, maxValue!)) return;

        if (isWithRange) {
            setRange((prevRange) => setRangeValues(day, prevRange!));
            return;
        }

        if (!isWithSelectedDay) return;

        if (!isActive) {
            setSelectedMonth(day.getMonth());
            setSelectedYear(day.getFullYear());
        }

        setSelectedDay(day);
    }, [isWithSelectedDay, isWithRange, isActive, day, minValue, maxValue]);

    const cellRangeState = (date: Date) => getRangeState(date, range!);

    const tasks = getTasksFromLocalStorage<ITask[]>(getReadbleDate(day));

    return (
        <DayOfWeekButton
            data-testid="day-of-week"
            $isActive={isActive}
            $isWeekend={isWeekend}
            $isToday={isToday}
            $isHoliday={isHoliday}
            $range={cellRangeState(day)}
            onClick={handleSelectDay}
            $isDaySelected={isSameDay(day, selectedDay!)}
        >
            {isWithTasks && tasks.length !== 0 && <TasksMark />}
            {day.getDate()}
        </DayOfWeekButton>
    );
};

export default withTheme(DayOfWeek);
