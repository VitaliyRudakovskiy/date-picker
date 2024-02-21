import React, { ComponentType } from 'react';
import { ICalendarProps } from '@/components/Calendar/types';
interface WithWeekendsProps extends Pick<ICalendarProps, 'isDayWeekend'> {}
declare const withWeekends: <T extends WithWeekendsProps>(
    WrappedComponent: React.ComponentType<T>,
) => {
    (props: Omit<T, 'isDayWeekend'>): React.JSX.Element;
    displayName: string;
};
export default withWeekends;
