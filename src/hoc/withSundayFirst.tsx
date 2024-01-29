import React from 'react';
import { ComponentType } from 'react';
import { ICalendarProps } from '@components/Calendar/types';

interface WithSundayFirstProps extends Pick<ICalendarProps, 'isSundayFirst'> {}

const withSundayFirst = <T extends WithSundayFirstProps>(WrappedComponent: ComponentType<T>) => {
    const ComponentWithSundayFirst = (props: Omit<T, keyof WithSundayFirstProps>) => {
        return <WrappedComponent {...(props as T)} isSundayFirst={true} />;
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithSundayFirst.displayName = `withSundayFirst(${displayName})`;

    return ComponentWithSundayFirst;
};

export default withSundayFirst;
