import { Dispatch, SetStateAction } from 'react';
import { ITask } from '../types';
export interface ITaskProps {
    task: ITask;
    setTasks: Dispatch<SetStateAction<ITask[]>>;
}
export interface ITaskStyledProps {
    $isCompleted: boolean;
}
