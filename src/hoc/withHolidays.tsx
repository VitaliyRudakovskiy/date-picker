import React from 'react';
import { ComponentType } from 'react';
import { ICalendarProps } from '@components/Calendar/types';
import { isHolidayDate } from '@utils/checkDate';

interface WithHolidaysProps extends Pick<ICalendarProps, 'isHolidayDate'> {}

const withHolidays = <T extends WithHolidaysProps>(WrappedComponent: ComponentType<T>) => {
    const ComponentHolidaysDays = (props: Omit<T, keyof WithHolidaysProps>) => {
        return <WrappedComponent {...(props as T)} isHolidayDate={isHolidayDate} />;
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentHolidaysDays.displayName = `withHolidays(${displayName})`;

    return ComponentHolidaysDays;
};

export default withHolidays;
