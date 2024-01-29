import React, { KeyboardEvent, memo } from 'react';
import { Input, ModalButton, ModalInputWrapper } from './styled';
import { IModalInputProps } from './types';

const ModalInput = memo(({ taskText, onChange, onAdd }: IModalInputProps) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onAdd();
    };

    return (
        <ModalInputWrapper>
            <Input
                type="text"
                placeholder="Input new task"
                value={taskText}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <ModalButton onClick={onAdd}>Add Task</ModalButton>
        </ModalInputWrapper>
    );
});

export default ModalInput;
