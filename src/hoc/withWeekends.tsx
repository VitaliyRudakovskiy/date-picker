import React from 'react';
import { ComponentType } from 'react';
import { ICalendarProps } from '@components/Calendar/types';
import { isDayWeekend } from '@utils/getFullMonth';

interface WithWeekendsProps extends Pick<ICalendarProps, 'isDayWeekend'> {}

const withWeekends = <T extends WithWeekendsProps>(WrappedComponent: ComponentType<T>) => {
    const ComponentWithWeekends = (props: Omit<T, keyof WithWeekendsProps>) => {
        return <WrappedComponent {...(props as T)} isDayWeekend={isDayWeekend} />;
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithWeekends.displayName = `withWeekendsDays(${displayName})`;

    return ComponentWithWeekends;
};

export default withWeekends;
