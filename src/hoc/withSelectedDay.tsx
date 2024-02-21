import React, { ComponentType } from 'react';

import { ICalendarProps } from '@/components/Calendar/types';

interface WithSelectedDayProps extends Pick<ICalendarProps, 'isWithSelectedDay'> {}

const withSelectedDay = <T extends WithSelectedDayProps>(WrappedComponent: ComponentType<T>) => {
    const ComponentWithSelectedDay = (props: Omit<T, keyof WithSelectedDayProps>) => {
        return <WrappedComponent {...(props as T)} isWithSelectedDay={true} />;
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithSelectedDay.displayName = `withSelectedDay(${displayName})`;

    return ComponentWithSelectedDay;
};

export default withSelectedDay;
