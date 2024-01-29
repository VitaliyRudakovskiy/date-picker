import { flexCenter } from '@constants/style/presets';
import styled from 'styled-components';

export const ModalInputWrapper = styled.div`
    ${flexCenter};
    gap: ${({ theme }) => theme.gaps.s};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.gaps.l};
`;

export const Input = styled.input`
    font-size: ${({ theme }) => theme.fonts.fontSize.xl}px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    margin: ${({ theme }) => theme.gaps.s} 0;
    padding: ${({ theme }) => theme.gaps.s};
    border: 1px solid ${({ theme }) => theme.colors.disabledDay};
    border-radius: ${({ theme }) => theme.gaps.xs};
    background: transparent;
    flex: 1;
`;

export const ModalButton = styled.button`
    ${flexCenter};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    padding: ${({ theme }) => theme.gaps.m};
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
