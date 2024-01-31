import React from 'react';
import { ComponentType } from 'react';
import { ICalendarProps } from '@components/Calendar/types';
interface WithTasksProps extends Pick<ICalendarProps, 'isWithTasks'> {
}
declare const withTasks: <T extends WithTasksProps>(WrappedComponent: React.ComponentType<T>) => {
    (props: Omit<T, "isWithTasks">): React.JSX.Element;
    displayName: string;
};
export default withTasks;
