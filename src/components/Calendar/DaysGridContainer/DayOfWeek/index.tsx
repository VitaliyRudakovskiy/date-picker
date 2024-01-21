import React, { useCallback } from 'react';

import { DayOfWeekButton } from './styled';
import { IDayProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDay, setSelectedDay } from '@features/calendarSlice';
import { isSameDay } from '@utils/getFullMonth';

const DayOfWeek = ({ day, isActive, isWeekend, isToday }: IDayProps) => {
    const selectDay = useSelector(selectedDay);

    const dispatch = useDispatch();

    const handleSelectDay = useCallback(() => {
        dispatch(setSelectedDay(day));
    }, [selectDay]);

    return (
        <DayOfWeekButton
            $isActive={isActive}
            $isWeekend={isWeekend}
            $isToday={isToday}
            onClick={handleSelectDay}
            $isDaySelected={isSameDay(day, selectDay)}
        >
            {day.getDate()}
        </DayOfWeekButton>
    );
};

export default DayOfWeek;
