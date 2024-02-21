import React, { ComponentType } from 'react';
import { ICalendarProps } from '@/components/Calendar/types';
interface WithRangeProps extends Pick<ICalendarProps, 'isWithRange'> {
}
declare const withRange: <T extends WithRangeProps>(WrappedComponent: React.ComponentType<T>) => {
    (props: Omit<T, "isWithRange">): React.JSX.Element;
    displayName: string;
};
export default withRange;
