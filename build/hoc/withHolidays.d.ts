import React, { ComponentType } from 'react';
import { ICalendarProps } from '@/components/Calendar/types';
interface WithHolidaysProps extends Pick<ICalendarProps, 'isHolidayDate'> {
}
declare const withHolidays: <T extends WithHolidaysProps>(WrappedComponent: React.ComponentType<T>) => {
    (props: Omit<T, "isHolidayDate">): React.JSX.Element;
    displayName: string;
};
export default withHolidays;
