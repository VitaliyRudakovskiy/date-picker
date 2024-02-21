import React, { ComponentType } from 'react';
import { ICalendarProps } from '@/components/Calendar/types';
interface WithSelectedDayProps extends Pick<ICalendarProps, 'isWithSelectedDay'> {}
declare const withSelectedDay: <T extends WithSelectedDayProps>(
    WrappedComponent: React.ComponentType<T>,
) => {
    (props: Omit<T, 'isWithSelectedDay'>): React.JSX.Element;
    displayName: string;
};
export default withSelectedDay;
