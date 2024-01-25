import React from 'react';
import DatePicker from '@components/DatePicker';
import withTheme from '@hoc/withTheme';
import { useRange } from '@providers/RangeProvider';
import { IRangePickerProps } from './types';
import { convertRangeDate } from '@utils/getFullMonth';

const RangePicker = ({ CalendarView }: IRangePickerProps) => {
    const { range } = useRange();

    const rangeStart = range?.rangeStart ? convertRangeDate(range.rangeStart) : undefined;
    const rangeEnd = range?.rangeEnd ? convertRangeDate(range.rangeEnd) : undefined;

    return <DatePicker CalendarView={CalendarView} rangeStart={rangeStart} rangeEnd={rangeEnd} />;
};

export default withTheme(RangePicker);
