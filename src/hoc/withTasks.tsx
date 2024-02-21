import React, { ComponentType, useCallback, useState } from 'react';

import Button from '@/components/Calendar/Button';
import { ICalendarProps } from '@/components/Calendar/types';
import Modal from '@/components/Modal';
import useCalendar from '@/context/useCalendar';
import { getTasksFromLocalStorage } from '@/helpers/getLocalTasks';
import getReadbleDate from '@/helpers/getReadableDate';
import { ITask } from '@/types';

interface WithTasksProps extends Pick<ICalendarProps, 'isWithTasks'> {}

const withTasks = <T extends WithTasksProps>(WrappedComponent: ComponentType<T>) => {
    const ComponentWithTasks = (props: Omit<T, keyof WithTasksProps>) => {
        const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

        const { selectedDay } = useCalendar();

        const handleToggleTodo = useCallback(() => {
            setIsModalOpen((prevValue) => !prevValue);
        }, []);

        const tasks = getTasksFromLocalStorage<ITask[]>(getReadbleDate(selectedDay));
        const isTaskExist = tasks.length !== 0;

        return (
            <>
                <WrappedComponent {...(props as T)} isWithTasks={true} />
                {selectedDay && (
                    <Button
                        text={isTaskExist ? 'View Tasks' : 'Add task'}
                        onButtonClick={handleToggleTodo}
                    />
                )}
                {isModalOpen && <Modal onClose={handleToggleTodo} />}
            </>
        );
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithTasks.displayName = `withTasks(${displayName})`;

    return ComponentWithTasks;
};

export default withTasks;
