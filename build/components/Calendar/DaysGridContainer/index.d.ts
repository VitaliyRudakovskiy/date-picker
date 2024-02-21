import React from 'react';
import { IDaysGridProps } from './types';
declare const DaysGridContainer: ({
    isHolidayDate,
    isWithRange,
    isDayWeekend,
    isWithSelectedDay,
    isSundayFirst,
    isWithTasks,
    minValue,
    maxValue,
}: IDaysGridProps) => React.JSX.Element;
export default DaysGridContainer;
