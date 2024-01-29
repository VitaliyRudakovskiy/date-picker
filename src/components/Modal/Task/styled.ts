import { flexBetween, flexCenter } from '@constants/style/presets';
import styled from 'styled-components';
import { ITaskStyledProps } from './types';

export const TaskWrapper = styled.div`
    ${flexBetween};
    width: 100%;
    gap: ${({ theme }) => theme.gaps.s};
    margin-bottom: ${({ theme }) => theme.gaps.s};
`;

export const TaskText = styled.p<ITaskStyledProps>`
    font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    text-decoration: ${({ $isCompleted }) => ($isCompleted ? 'line-through' : 'none')};
    flex: 1;
`;

export const DeleteTaskButton = styled.button`
    flex: 0;
    ${flexCenter};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    padding: ${({ theme }) => theme.gaps.s};
    border: 1px solid ${({ theme }) => theme.colors.disabledDay};
    border-radius: ${({ theme }) => theme.gaps.xs};
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.middleDayRange};
    }

    &:active {
        background: ${({ theme }) => theme.colors.disabledDay};
    }
`;
