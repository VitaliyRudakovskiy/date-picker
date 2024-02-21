import React from 'react';
import { ITaskProps } from './types';
declare const Task: React.MemoExoticComponent<
    ({ task, setTasks }: ITaskProps) => React.JSX.Element
>;
export default Task;
