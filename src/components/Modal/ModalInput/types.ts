import { ChangeEvent } from 'react';

export interface IModalInputProps {
    taskText: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
}
