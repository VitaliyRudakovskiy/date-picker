import React, { ComponentType } from 'react';
import { ICalendarProps } from '@/components/Calendar/types';
interface WithSundayFirstProps extends Pick<ICalendarProps, 'isSundayFirst'> {
}
declare const withSundayFirst: <T extends WithSundayFirstProps>(WrappedComponent: React.ComponentType<T>) => {
    (props: Omit<T, "isSundayFirst">): React.JSX.Element;
    displayName: string;
};
export default withSundayFirst;
