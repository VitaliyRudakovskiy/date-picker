import React, { useCallback } from 'react';
import { ICalendarProps } from '@components/Calendar/types';
import { ComponentType, useState } from 'react';
import Button from '@components/Calendar/Button';
import Modal from '@components/Modal';
import { useCalendar } from '@providers/CalendarProvider';
import { getTasksFromLocalStorage } from '@utils/tasksHelper';

interface WithTasksProps extends Pick<ICalendarProps, 'isWithTasks'> {}

const withTasks = <T extends WithTasksProps>(WrappedComponent: ComponentType<T>) => {
    const ComponentWithTasks = (props: Omit<T, keyof WithTasksProps>) => {
        const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

        const { selectedDay } = useCalendar();

        const handleToggleTodo = useCallback(() => {
            setIsModalOpen((prevValue) => !prevValue);
        }, []);

        //const tasks = getTasksFromLocalStorage(selectedDay?.toDateString());

        return (
            <>
                <WrappedComponent {...(props as T)} isWithTasks={true} />
                {selectedDay && <Button text="Add task" onButtonClick={handleToggleTodo} />}
                {isModalOpen && <Modal onClose={handleToggleTodo} />}
            </>
        );
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name;
    ComponentWithTasks.displayName = `withTasks(${displayName})`;

    return ComponentWithTasks;
};

export default withTasks;
