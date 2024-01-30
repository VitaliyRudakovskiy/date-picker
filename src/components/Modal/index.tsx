import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useCalendar } from '@providers/CalendarProvider';
import { getReadbleDate } from '@utils/calendarHelper';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '@utils/tasksHelper';

import ModalInput from './ModalInput';
import { CloseButton, ModalContainer, ModalOverlay, ModalTitle, TasksContainer } from './styled';
import Task from './Task';
import { IModalProps, ITask } from './types';

const Modal = ({ onClose }: IModalProps) => {
    const [taskText, setTaskText] = useState<string>('');
    const [tasks, setTasks] = useState<ITask[]>([]);

    const { selectedDay } = useCalendar();

    const taskDate = getReadbleDate(selectedDay || new Date());

    useEffect(() => {
        const cachedTodos = getTasksFromLocalStorage<ITask[]>(taskDate);
        if (cachedTodos) setTasks(cachedTodos);
    }, [selectedDay]);

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    }, []);

    const handleAddTask = useCallback(() => {
        if (taskText.trim() === '') return;

        const myTasks = [...tasks];
        const newTask: ITask = {
            id: String(new Date().getTime()),
            text: taskText,
            isCompleted: false,
        };

        myTasks.push(newTask);
        setTasks(myTasks);
        saveTasksToLocalStorage(taskDate, myTasks);

        setTaskText('');
    }, [taskText, taskDate]);

    return ReactDOM.createPortal(
        <ModalOverlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ModalTitle>Tasks for {taskDate}</ModalTitle>
                <ModalInput
                    taskText={taskText}
                    onChange={handleInputChange}
                    onAdd={handleAddTask}
                />
                <TasksContainer>
                    {tasks.length !== 0
                        ? tasks.map((task) => (
                              <Task key={task.id} task={task} setTasks={setTasks} />
                          ))
                        : 'Your tasks will be here'}
                </TasksContainer>
            </ModalContainer>
        </ModalOverlay>,
        document.body,
    );
};

export default Modal;
