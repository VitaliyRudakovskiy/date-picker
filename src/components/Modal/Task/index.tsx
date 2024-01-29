import React, { memo } from 'react';
import { ITaskProps } from './types';
import { DeleteTaskButton, TaskText, TaskWrapper } from './styled';
import {
    getTasksFromLocalStorage,
    removeTasksFromLocalStorage,
    saveTasksToLocalStorage,
} from '@utils/tasksHelper';
import { useCalendar } from '@providers/CalendarProvider';
import { getReadbleDate } from '@utils/getFullMonth';
import { ITask } from '../types';

const Task = memo(({ task, setTasks }: ITaskProps) => {
    const { id, text, isCompleted } = task;

    const { selectedDay } = useCalendar();

    const localStorageKey = getReadbleDate(selectedDay!);

    const handleCheckChange = () => {
        const tasks = getTasksFromLocalStorage<ITask[]>(localStorageKey);

        const updatedTasks = tasks.map((task: ITask) => {
            if (task.id === id) return { ...task, isCompleted: !task.isCompleted };
            return task;
        });

        setTasks(updatedTasks);
        saveTasksToLocalStorage(localStorageKey, updatedTasks);
    };

    const handleDeleteTodo = () => {
        const tasks = getTasksFromLocalStorage<ITask[]>(localStorageKey);

        const updatedTasks = tasks.filter((task: ITask) => task.id !== id);

        setTasks(updatedTasks);
        updatedTasks.length === 0
            ? removeTasksFromLocalStorage(localStorageKey)
            : saveTasksToLocalStorage(localStorageKey, updatedTasks);
    };

    return (
        <TaskWrapper>
            <input type="checkbox" checked={isCompleted} onChange={handleCheckChange} />
            <TaskText $isCompleted={isCompleted}>{text}</TaskText>
            <DeleteTaskButton onClick={handleDeleteTodo}>Delete</DeleteTaskButton>
        </TaskWrapper>
    );
});

export default Task;
